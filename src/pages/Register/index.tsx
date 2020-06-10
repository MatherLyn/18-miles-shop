import React, { Component } from 'react'
import { register, sendEmailCode } from '../../cgi';
import { Input, Button, Message } from 'element-react'
import logo from './images/logo.png';
import invisible from './images/invisible.png'
import './index.less';
import { collectAnchor } from '../../util';

interface IProps {
    history: any
};

interface IState {
    email: string;
    password: string;
    repeatPassword: string;
    verifyCode: string;
    time: number
};
export default class Register extends Component<IProps, IState> {
    private redirectUrl: string;
    private email: string = '';
    private password: string = '';
    private repeatPassword: string = '';
    private verifyCode: string = '';

    constructor(props: IProps) {
        super(props);
        this.redirectUrl = collectAnchor(window.location.href).get('redirect_url') as string;
        this.state = {
            email: '',
            password: '',
            repeatPassword: '',
            verifyCode: '',
            time: 0
        }
    };

    handleReturn = () => {
        this.props.history.push(`/login#redirect_url=${encodeURIComponent(this.redirectUrl)}`);
    };

    handleRegister = () => {
        if (this.state.email === "") {
            Message.error('邮箱不能为空唷！');
            return;
        }
        if (this.state.password === "") {
            Message.error('请输入密码！');
            return;
        }
        if (this.state.repeatPassword === "") {
            Message.error('请确认密码！');
            return;
        }
        if (this.state.verifyCode === "") {
            Message.error('请输入验证码！');
            return;
        }
        if (this.state.password !== this.state.repeatPassword) {
            Message.error('两次输入的密码不一致，请重新输入！');
            return;
        }
        register({
            email: this.state.email,
            password: this.state.password,
            code: this.state.verifyCode
        }).then(response => {
            //还没完成
        });
    }

    handleSendCode = () => {
        if (this.state.time !== 0) {
            return;
        } else {
            // sendEmailCode({
            //     email: this.state.email
            // });
            this.setState({
                time: 30
            });
            let interval: NodeJS.Timeout | null = setInterval(() => {
                if (this.state.time > 0) {
                    console.log(this.state.time);
                    this.setState({
                        time : this.state.time - 1
                    })
                } else {
                    clearInterval(interval as NodeJS.Timeout);
                    interval = null;
                }
            }, 1000);    
        }
    }

    render() {
        return (
            <div className='register'>
                <header className='register-header'>
                    <img src={logo} alt="logo" />
                    <h1>十八里铺</h1>
                </header>
                <section className='register-section'>
                    <section className='wrapper'>
                        <div className="register-box">
                            <div className="title">
                                <h1>注册</h1>
                            </div>
                            <div className="input-box">
                                <div className="subtitle">
                                    <span>*</span>邮箱
                                    </div>
                                <div className="email-box">
                                    <Input
                                        className="email-input"
                                        placeholder="请输入邮箱"
                                        value={this.state.email}
                                        // @ts-ignore
                                        onChange={value => this.setState({email: value})}
                                    />
                                    <Button disabled={this.state.time !== 0} className="verify-email" type="text" onClick={this.handleSendCode}>{this.state.time !== 0 ? `${this.state.time}s后重试` : '验证邮箱'}</Button>
                                </div>
                                <div className="subtitle">
                                    <span>*</span>密码
                                </div>
                                <Input
                                    className="a-input"
                                    placeholder="请输入密码"
                                    value={this.state.password}
                                    // @ts-ignore
                                    onChange={value => this.setState({password: value})}
                                >
                                </Input>
                                <div className="subtitle">
                                    <span>*</span>确认密码
                                </div>
                                <Input
                                    className="a-input"
                                    placeholder="请再次输入密码"
                                    value={this.state.repeatPassword}
                                    // @ts-ignore
                                    onChange={value => this.setState({repeatPassword: value})}
                                ></Input>
                                <div className="subtitle">
                                    <span>*</span>验证码
                                </div>
                                <Input
                                    className="a-input"
                                    placeholder="请输入验证码" 
                                    value={this.state.verifyCode}
                                    // @ts-ignore
                                    onChange={value => this.setState({verifyCode: value})}
                                />
                                <div className="button-box">
                                    <Button className="comfirm" type="primary" onClick={this.handleRegister}>确定注册</Button>
                                    <Button className="return-login" type="text" onClick={this.handleReturn}>返回登录</Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        )
    }
}
