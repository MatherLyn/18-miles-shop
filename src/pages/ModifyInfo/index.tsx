import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Input, Radio, Message, Upload } from 'element-react';
import { store } from '../../store';
import { modifyUserProfile, getUserProfile } from '../../cgi';
import { observer } from 'mobx-react';
import avatar from '../../assets/avatar.png';
import './index.less';

interface IProps extends RouteComponentProps {

}

interface IState {
    avatar: string;
    username: string;
    birthday: string;
    sex: number;
    phone: string;
}

@observer
class ModifyInfo extends Component<IProps, IState> {
    private hasAvatarChange: boolean = false;

    constructor(props: IProps) {
        super(props);
        this.state = {
            avatar: store.userInfo.avatar,
            username: store.userInfo.username,
            birthday: store.userInfo.birthday,
            sex: store.userInfo.sex,
            phone: store.userInfo.phone
        };
    }
    
    async componentDidMount () {
        if (store.loginAuthorization) {
            const userInfo = await getUserProfile();
            if (userInfo?.data.errcode === 0) {
                store.userInfo = userInfo.data.data;
                this.setState({
                    avatar: store.userInfo.avatar,
                    username: store.userInfo.username,
                    birthday: store.userInfo.birthday,
                    sex: store.userInfo.sex,
                    phone: store.userInfo.phone
                })
            }
        }
    }

    handleSubmitAvatar = () => {

    }

    handleReturn = () => {
        this.props.history.goBack();
    }

    modifyProfile = async () => {
        const config: any = {...this.state};
        if (this.hasAvatarChange) {
            config.avatar = store.userInfo.avatar;
        } else {
            delete config.avatar;
        }
        const modifyRes = await modifyUserProfile(config);
        if (modifyRes?.data.errcode === 0) {
            Message.success('修改成功！');
            this.props.history.goBack();
            // setTimeout(() => {
            //     this.props.history.goBack();
            // }, 1000);
        }
    }

    handleChange = (key: string, value: any) => {
        // @ts-ignore
        this.setState({ [key]: value });
    }

    handleAvatarScucess(res: any, file: any) {
        this.setState({ avatar: URL.createObjectURL(file.raw) });
        store.userInfo.avatar = res.urls[0];
        this.hasAvatarChange = true;
    }

    beforeAvatarUpload(file: File) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
            Message('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
            Message('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
    }

    onChange = (e: any) => {
        if (e === '男') {
            this.setState({
                sex: 0,
            });
        }
        else {
            this.setState({
                sex: 1,
            });
        }
    };

    render() {
        return (
            <div className="modify-info">
                <div className="head">
                    <div className="cancel" onClick={this.handleReturn}>取消</div>
                    <div className="title">编辑资料</div>
                    <div className="finish" onClick={this.modifyProfile}>完成</div>
                </div>
                <div className="wrapper">
                    <div className="avatar-box" onClick={this.handleSubmitAvatar}>
                        <Upload
                            className="avatar-uploader"
                            action="http://kanolin.cn/api/attachment/upload"
                            showFileList={false}
                            onSuccess={(res, file) => this.handleAvatarScucess(res, file)}
                            beforeUpload={file => this.beforeAvatarUpload(file)}
                        >
                            {< img src={this.state.avatar || avatar} className="avatar" />}
                        </Upload>
                    </div>
                </div>

                <div className="input-box">
                    <div className="input-wrapper">
                        <div className="title-head">用户姓名</div>
                        <Input className="input" placeholder="请输入内容" value={this.state.username} onChange={value => this.handleChange('username', value)} />
                    </div>
                    <div className="input-wrapper">
                        <div className="title-head">电话号码</div>

                        <Input className="input" placeholder="请输入内容" value={this.state.phone} onChange={value => this.handleChange('phone', value)} />

                    </div>
                    <div className="input-wrapper">

                        <div className="title-head">出生日期</div>

                        <Input className="input" placeholder="请输入内容" value={this.state.birthday} onChange={value => this.handleChange('birthday', value)} />

                    </div>
                    <div className="input-wrapper">
                        <div className="title-head">性别</div>
                            <Radio.Group value={`${this.state.sex ? `女` : `男`}`} onChange={e => this.onChange(e) } fill="#f64b00">
                                <Radio.Button value="男" />
                                <Radio.Button value="女" />
                            </Radio.Group>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ModifyInfo);