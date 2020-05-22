import React, { Component } from 'react'
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.less';
import logo from './images/logo.png'
import wechatLogo from './images/wechat.svg'
import messageLogo from './images/message.svg'
import touristLogo from './images/tourist.svg'
import { reqLogin } from '../../api'

export default class Login extends Component {
    //提交表单且数据验证成功后回调事件
    onFinish = async (values) => {
        console.log('收到表单数据: ', values, "，准备发送ajax请求。");
        const { username, password } = values;
        const result = await reqLogin(username, password);
        console.log('网页接收到的数据：', result)
    };

    //提交表单且数据验证失败后回调事件
    onFinishFailed = errorInfo => {
        console.log('提交失败:', errorInfo);
    };

    //跳转到注册页面
    handleRegister = () => {
        this.props.history.replace('/register')
    };

    //跳转到主页
    handleEnter = () => {
        this.props.history.push('/home')
    };

    render() {
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="logo" />
                    <h1>十八里铺</h1>
                </header>
                <section className='login-section'>
                <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <h1>登陆</h1>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                            {
                                min: 4,
                                message: '用户名必须大于4位!',
                            },
                            {
                                max: 12,
                                message: '用户名必须小于12位!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                            {
                                min: 4,
                                message: '密码必须大于4位!',
                            },
                            {
                                max: 12,
                                message: '密码必须小于12位!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密码"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登陆
                                </Button>
                        <Button type="primary" className="login-form-button" onClick={this.handleRegister}>
                            注册
                                </Button>
                    </Form.Item>
                    <h5>其他方式</h5>
                    <ul id="way-box">
                        <li onClick={this.handleEnter}><img src={wechatLogo} alt="微信" />微信</li>
                        <li onClick={this.handleEnter}><img src={messageLogo} alt="短信" />短信验证</li>
                        <li onClick={this.handleEnter}><img src={touristLogo} alt="游客" />游客访问</li>
                    </ul>
                </Form>
            </section>
            </div>
        )
    }
}
