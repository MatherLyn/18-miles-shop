import React, { Component } from 'react'
// import {
//     Form,
//     Input,
//     Row,
//     Col,
//     Button,
//     Tooltip,
//   } from 'antd';
// import './index.less';
import logo from './images/logo.png'
// import { QuestionCircleOutlined } from '@ant-design/icons';
// import { reqRegister } from '../../api'

export default class Register extends Component {
//     formItemLayout = {
//         labelCol: {
//             xs: {
//                 span: 24,
//             },
//             sm: {
//                 span: 6,
//             },
//         },
//         wrapperCol: {
//             xs: {
//                 span: 24,
//             },
//             sm: {
//                 span: 16,
//             },
//         },
//     };
//     tailFormItemLayout = {
//         wrapperCol: {
//             xs: {
//                 span: 24,
//                 offset: 0,
//             },
//             sm: {
//                 span: 16,
//                 offset: 6,
//             },
//         },
//     };
//     handleReturn = () => {
//         this.props.history.replace('/login');
//     };

//     //提交表单且数据验证成功后回调事件
//     onFinish = async (values) => {
//         let req = {
//             "username": values["username"],
//             "nickname": values["username"],
//             "phone": values["phone"],
//             "password": values["password"],
//             "code": values["captcha"]
//         }
//         console.log('收到表单数据: ', req, "，准备发送ajax请求。");
//         const result = await reqRegister(req);
//         console.log('网页接收到的数据：', result)
//     };

//     //提交表单且数据验证失败后回调事件
//     onFinishFailed = errorInfo => {
//         console.log('提交失败:', errorInfo);
//     };

//     render() {
//         return (
//             <div className='login'>
//                 <header className='login-header'>
//                     <img src={logo} alt="logo" />
//                     <h1>十八里铺</h1>
//                 </header>
//                 <section className='login-section register-section'>
//                     <Form
//                         {...this.formItemLayout}
//                         // form={this.form}
//                         name="register"
//                         className="register-form"
//                         onFinish={this.onFinish}
//                         onFinishFailed={this.onFinishFailed}
//                         scrollToFirstError
//                     >

//                         <h1>登陆</h1>
//                         <Form.Item
//                             name="username"
//                             label={
//                                 <span>
//                                     用户名&nbsp;
//                         <Tooltip title="用户名唯一标识用户，确定后不能修改。初始昵称设置为用户名。">
//                                         <QuestionCircleOutlined />
//                                     </Tooltip>
//                                 </span>
//                             }
//                             rules={[{ required: true, message: '请输入用户名!', whitespace: true }]}
//                         >
//                             <Input />
//                         </Form.Item>

//                         <Form.Item
//                             name="phone"
//                             label="手机号码"
//                             rules={[{ required: true, message: '请输入您的手机号码!' }]}
//                         >
//                             <Input style={{ width: '100%' }} />
//                         </Form.Item>

//                         <Form.Item
//                             name="password"
//                             label="密码"
//                             rules={[
//                                 {
//                                     required: true,
//                                     message: '请输入密码!',
//                                 },
//                             ]}
//                             hasFeedback
//                         >
//                             <Input.Password />
//                         </Form.Item>

//                         <Form.Item
//                             name="confirm"
//                             label="确认密码"
//                             dependencies={['password']}
//                             hasFeedback
//                             rules={[
//                                 {
//                                     required: true,
//                                     message: '请确认密码!',
//                                 },
//                                 ({ getFieldValue }) => ({
//                                     validator(rule, value) {
//                                         if (!value || getFieldValue('password') === value) {
//                                             return Promise.resolve();
//                                         }
//                                         return Promise.reject('两次输入的密码不一致!');
//                                     },
//                                 }),
//                             ]}
//                         >
//                             <Input.Password />
//                         </Form.Item>

//                         <Form.Item label="二维码">
//                             <Row gutter={8}>
//                                 <Col span={12}>
//                                     <Form.Item
//                                         name="captcha"
//                                         noStyle
//                                         rules={[{ required: true, message: '请输入您收到的二维码!' }]}
//                                     >
//                                         <Input />
//                                     </Form.Item>
//                                 </Col>
//                                 <Col span={12}>
//                                     <Button>获取二维码</Button>
//                                 </Col>
//                             </Row>
//                         </Form.Item>

//                         <Form.Item {...this.tailFormItemLayout}>
//                             <Row gutter={10}>
//                                 <Col span={15}>
//                                     <Button type="primary" htmlType="submit" className="tailBtn">
//                                         注册
//                       </Button>
//                                 </Col>
//                                 <Col span={9}>
//                                     <Button onClick={this.handleReturn} className="tailBtn returnLogin">返回登陆</Button>
//                                 </Col>
//                             </Row>
//                         </Form.Item>
//                     </Form>
//                 </section>
//             </div>
//         )
// }
}
