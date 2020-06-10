import React, { Component } from 'react';
import avatar from '../../assets/avatar.png';
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
                    <h1>设置</h1>
                </div>
                <div className="main-box">
                    <div className="userinfo">
                        <div className="avatar" style={{ backgroundImage: `url(${avatar})` }}/>
                        <div className="text-box">
                            <h1>用户名</h1>
                        </div>
                        <div className="edit" onClick={this.handleEdit}>编辑</div>
                    </div>
                    <div className="a-box" onClick={this.handleGoToAddress}>
                        <h1>我的收货地址</h1>
                        <div className="goto-icon">
                            <div className="g-icon"></div>
                        </div>
                    </div>
                    <div className="a-box" onClick={this.handleGoToAddress}>
                        <h1>支付设置</h1>
                        <div className="goto-icon">
                            <div className="g-icon"></div>
                        </div>
                    </div>
                    <div className="a-box" onClick={this.handleGoToAddress}>
                        <h1>修改密码</h1>
                        <div className="goto-icon">
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