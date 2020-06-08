import React, { Component } from 'react';
import { List, InputItem } from 'antd-mobile';
import { login } from '../../api';
import { Message } from 'element-react'
import 'element-theme-default';
import logo from './images/logo.png';
import wechatLogo from './images/wechat.svg' ;
import messageLogo from './images/message.svg';
import touristLogo from './images/tourist.svg';

import './index.less';

interface IProps {
    history: any
}

interface IState {
}

export default class Login extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    email = "";
    password = "";

    //跳转到注册页面
    handleRegister = () => {
        this.props.history.replace('/register')
    };

    //跳转到主页
    handleEnter = () => {
        this.props.history.push('/')
    };

    handleChange1 = (e:any) => {
        this.email = e;
    }

    handleChange2 = (e:any) => {
        this.password = e;
    }

    handleLogin = () => {
        if(this.email===""||this.password==="")
        {
            Message.error('邮箱及密码均不能为空唷！');
            return;
        }
        login({
            email:this.email,
            password:this.password
        }).then(response=>{
            //还没完成
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
                                <li onClick={this.handleEnter}><img src={wechatLogo} alt="微信" />微信</li>
                                <li onClick={this.handleEnter}><img src={messageLogo} alt="短信" />短信验证</li>
                                <li onClick={this.handleEnter}><img src={touristLogo} alt="游客" />游客访问</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}