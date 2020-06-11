import React, { Component } from 'react';
import avatar from '../../assets/avatar.png';
import './index.less';
import { store } from '../../store';
import { observer } from 'mobx-react';
import { getUserProfile } from '../../cgi';

interface IProps {
    history: any

};
interface IState {

};

@observer
class Setting extends Component<IProps, IState> {
    async componentDidMount () {
        if (store.loginAuthorization) {
            const userInfo = await getUserProfile();
            if (userInfo?.data.errcode === 0) {
                store.userInfo = userInfo.data.data;
            }
        }
    }

    handleEdit = () => {
        //进入编辑页面
        this.props.history.push('/modifyinfo');
    }

    handleGoToAddress = () => {
        this.props.history.push('/address');
    }

    handleReturn = () => {
        this.props.history.push('/profile');
    }

    handleLogout = () => {
        store.isLogin = false;
        // @ts-ignore
        store.userInfo = null;
        localStorage.removeItem('Authorization');
        this.props.history.push('/login');
    }
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
                        <div className="avatar" style={{ backgroundImage: `url(${avatar})` }} />
                        <div className="text-box">
                            <h1>{store.userInfo?.username || ''}</h1>
                        </div>
                        <div className="edit" onClick={this.handleEdit}>编辑</div>
                    </div>
                    <div className="a-box" onClick={this.handleGoToAddress}>
                        <h1>我的收货地址</h1>
                        <div className="goto-icon">
                            <div className="g-icon"></div>
                        </div>
                    </div>
                    <div className="a-box">
                        <h1>支付设置</h1>
                        <div className="goto-icon">
                            <div className="g-icon"></div>
                        </div>
                    </div>
                    <div className="a-box">
                        <h1>修改密码</h1>
                        <div className="goto-icon">
                            <div className="g-icon"></div>
                        </div>
                    </div>
                    <div className="bottom-box bottom-box1">
                        切换用户
                    </div>
                    <div className="bottom-box" onClick={this.handleLogout}>
                        退出登录
                    </div>
                </div>
            </div>
        )
    }
}

export default Setting;