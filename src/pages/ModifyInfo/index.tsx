import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Input, Radio } from 'element-react';
import { store } from '../../store';
import './index.less';

interface IProps extends RouteComponentProps {

}

interface IState {
    sex: number;
}

class ModifyInfo extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            sex: 0,
        };
        this.setState({
            sex: store.userInfo.sex,
        });
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
                    <div className="cancel">取消</div>
                    <div className="title">编辑资料</div>
                    <div className="finish">完成</div>
                </div>
                <div className="wrapper">
                    <div className="avatar-box">

                    </div>
                </div>
                <div className="input-box">
                    <div className="input-wrapper">
                        <div className="title-head">用户名</div>
                        <Input placeholder="请输入内容" />
                    </div>
                    <div className="input-wrapper">
                        <div className="title-head">电话号码</div>
                        <Input placeholder="请输入内容" />
                    </div>
                    <div className="input-wrapper">
                        <div className="title-head">出生日期</div>
                        <Input placeholder="请输入内容" />
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