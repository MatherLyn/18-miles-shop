import React, { Component } from 'react'
import avatar from './images/avatar.jpeg'
import './index.less';

interface IProps {
    history: any

};
interface IState {

};

class Setting extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    };
    handleEdit = () => {
        //进入编辑页面

    };
    handleGoToAddress = () => {
        this.props.history.push('/address');
    };
    handleReturn=()=>{
        this.props.history.push('/profile');
    };
    render() {
        return (
            <div className="setting">
                <div className="head">
                    <div className="return-icon" onClick={this.handleReturn}>
                        <div className="r-icon"></div>
                    </div>
                    <h1>我的设置</h1>
                </div>
                <div className="main-box">
                    <div className="userinfo">
                        <img className="avatar" src={avatar} alt="" />
                        <div className="text-box">
                            <h1>用户名</h1>
                        </div>
                        <div className="edit" onClick={this.handleEdit}>编辑</div>
                    </div>
                    <div className="a-box">
                        <h1>我的收货地址</h1>
                        <div className="goto-icon" onClick={this.handleGoToAddress}>
                            <div className="g-icon"></div>
                        </div>
                    </div>
                    <div className="a-box">
                        <h1>支付设置</h1>
                        <div className="goto-icon" onClick={this.handleGoToAddress}>
                            <div className="g-icon"></div>
                        </div>
                    </div>
                    <div className="a-box">
                        <h1>修改密码</h1>
                        <div className="goto-icon" onClick={this.handleGoToAddress}>
                            <div className="g-icon"></div>
                        </div>
                    </div>
                    <div className="bottom-box bottom-box1">
                        切换用户
                    </div>
                    <div className="bottom-box">
                        退出登录
                    </div>
                </div>
            </div>
        )
    }
}

export default Setting;