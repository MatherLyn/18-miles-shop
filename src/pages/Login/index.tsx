import React, { Component } from 'react';
import { List, InputItem } from 'antd-mobile';
import { login } from '../../api';
import { Message } from 'element-react'
import 'element-theme-default';
import logo from './images/logo.png';
import wechatLogo from './images/wechat.svg';
import messageLogo from './images/message.svg';
import touristLogo from './images/tourist.svg';

import './index.less';
import { collectAnchor, addAnchor } from '../../util';
import { store } from '../../store';

interface IProps {
    history: any
}

interface IState {
}

export default class Login extends Component<IProps, IState> {
    private redirectUrl: string;
    constructor(props: IProps) {
        super(props);
        this.redirectUrl = collectAnchor(window.location.href).get('redirect_url') as string;
    }

    email = "";
    password = "";

    //跳转到注册页面
    handleRegister = () => {
        this.props.history.replace(addAnchor('/register', { redirect_url: this.redirectUrl }));
    };

    //跳转到回跳页面
    handleEnter = () => {
        this.props.history.push(decodeURIComponent(this.redirectUrl));
    };

    handleChange1 = (e: any) => {
        this.email = e;
    }

    handleChange2 = (e: any) => {
        this.password = e;
    }

    handleLogin = () => {
        if (this.email === "" || this.password === "") {
            Message.error('邮箱及密码均不能为空唷！');
            return;
        }
        login({
            email: this.email,
            password: this.password
        }).then(response => {
            if (response.data.errcode === 0) {
                store.loginAuthorization = response.data.Authorization;
                store.isLogin = true;
                this.handleEnter();
            }
        });
    }

    render() {
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="logo" />
                    <h1 className="name">十八里铺</h1>
                </header>
                <section className='wrapper'>
                    <div className="login-box">
                        <div className="title">
                            <h1>登录</h1>
                        </div>
                        <List className="input-box">
                            <InputItem
                                // {...getFieldProps('inputtitle2')}
                                placeholder="邮箱"
                                onChange={e => this.handleChange1(e)}
                                className="input-email"
                            >
                                <div className="email-icon" />
                            </InputItem>
                            <InputItem
                                // {...getFieldProps('inputtitle2')}
                                placeholder="密码"
                                onChange={e => this.handleChange2(e)}
                                className="input-password"
                            >
                                <div className="password-icon" />
                            </InputItem>
                        </List>
                        <div className="button-box">
                            <button className="button-login" onClick={this.handleLogin}>登 陆</button>
                            <span className="tips">还没有账号？注册一个吧~</span>
                            <button className="button-register" onClick={this.handleRegister}>注 册</button>
                        </div>
                        <div className="message-box">
                            <h5>其他方式</h5>
                            <ul id="way-box">
                                <li><img src={wechatLogo} alt="微信" />微信登录</li>
                                <li><img src={messageLogo} alt="短信" />短信验证</li>
                                <li><img src={touristLogo} alt="游客" />游客访问</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}