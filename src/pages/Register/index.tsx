import React, { Component } from 'react'
import { register } from '../../api';
import { Input, Button, Message } from 'element-react'
import logo from './images/logo.png';
import invisible from './images/invisible.png'
import './index.less';

interface IProps {
    history: any
};

interface IState {
};
export default class  Register extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    };
    email="";
    password="";
    repeatPassword="";
    verifyCode="";

    handleReturn=()=> {
        this.props.history.push('/login');
    };

    handleRegister=()=>{
        if(this.email==="")
        {
            Message.error('邮箱不能为空唷！');
            return;
        }
        if(this.password==="")
        {
            Message.error('请输入密码！');
            return;
        }
        if(this.repeatPassword==="")
        {
            Message.error('请确认密码！');
            return;
        }
        if(this.verifyCode==="")
        {
            Message.error('请输入验证码！');
            return;
        }
        if(this.password!==this.repeatPassword)
        {
            Message.error('两次输入的密码不一致，请重新输入！');
            return;
        }
        register({
            email:this.email,
            password:this.password,
            code:this.verifyCode
        }).then(response=>{
            //还没完成
        });
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
                                    <Input className="email-input" placeholder="请输入邮箱"/>
                                    <Button className="verify-email" type="text">验证邮箱</Button>
                                </div>
                                <div className="subtitle">
                                    <span>*</span>密码
                                </div>
                                <Input
                                    // icon="time"
                                    className="a-input"
                                    placeholder="请输入密码"
                                    // append={<img src={invisible} alt=""/>}
                                    // onIconClick={this.handleIconClick.bind(this)}
                                >
                                </Input>
                                <div className="subtitle">
                                    <span>*</span>确认密码
                                </div>
                                <Input
                                    // icon="time"
                                    className="a-input"
                                    placeholder="请再次输入密码"
                                // onIconClick={this.handleIconClick.bind(this)}
                                ></Input>
                                <div className="subtitle">
                                    <span>*</span>验证码
                                </div>
                                <Input className="a-input" placeholder="请输入验证码" />
                                <div className="button-box">
                                    <Button className="comfirm" type="primary"  onClick={this.handleRegister}>确定注册</Button>
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
