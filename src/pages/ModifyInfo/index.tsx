import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Input, Radio, Message } from 'element-react';
import { store } from '../../store';
import './index.less';
import { modifyUserProfile } from '../../cgi';

interface IProps extends RouteComponentProps {

}

interface IState {
    avatar: string;
    username: string;
    birthday: string;
    sex: number;
    phone: number;
}

class ModifyInfo extends Component<IProps, IState> {
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

    handleReturn = () => {
        this.props.history.goBack();
    }

    modifyProfile = async () => {
        await modifyUserProfile(this.state);
        Message.success('修改成功！');
        this.props.history.goBack();
    }

    handleChange = (key: string, value: any) => {
        // @ts-ignore
        this.setState({ [key]: value });
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
                    <div className="avatar-box">
                        
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-wrapper">
                        <div className="title-head">用户名</div>
                        <Input placeholder="请输入内容" value={this.state.username} onChange={value => this.handleChange('username', value)}/>
                    </div>
                    <div className="input-wrapper">
                        <div className="title-head">电话号码</div>
                        <Input placeholder="请输入内容" value={this.state.phone} onChange={value => this.handleChange('phone', value)}/>
                    </div>
                    <div className="input-wrapper">
                        <div className="title-head">出生日期</div>
                        <Input placeholder="请输入内容" value={this.state.birthday} onChange={value => this.handleChange('birthday', value)}/>
                    </div>
                    <div className="input-wrapper">
                        <div className="title-head">性别</div>
                        <Radio.Group value={`${this.state.sex ? `女` : `男`}`} onChange={e => this.onChange(e)}>
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