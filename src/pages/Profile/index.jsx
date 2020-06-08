import React, { Component } from 'react'
import notPay from './images/notPay.svg'
import notComment from './images/notComment.svg'
import notShip from './images/notShip.svg'
import notReceive from './images/notReceive.svg'
import setting from './images/setting.svg'
import avatar from './images/avatar.jpeg'
import './index.less';

class Profile extends Component {

    render() {
        return (
            <div id="me">
                <div id="wrapper">
                    <div id="topBox">
                        <img id="settingIcon" src={setting} alt="设置"  onClick={this.removeToSetting}/>
                        <div id="user">
                            <img id="avatar" src={avatar} alt="用户头像"/>
                            <div id="name">
                                <div className="user-info">
                                    <div className="user-content">{`林大妈，你好`}</div>
                                </div>
                            </div>
                            <div id="links">
                                <ul>
                                    <li onClick={this.handle1}>收藏</li>
                                    <li onClick={this.handle2}>优惠</li>
                                    <li onClick={this.handle3}>足迹</li>
                                    <li onClick={this.handle4}>账单</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="inner-wrapper">
                        <div id="orderBox">
                            <div id="caption">
                                <h1>我的订单</h1>
                                <span onClick={this.showOrder}>查看全部订单</span>
                            </div>
                            <div id="stages">
                                <ul>
                                    <li onClick={this.showOrder1}><img className="stagesIcon" src={notPay} alt="待付款" />待付款</li>
                                    <li onClick={this.showOrder2}><img className="stagesIcon" src={notShip} alt="待发货" />待发货</li>
                                    <li onClick={this.showOrder3}><img className="stagesIcon" src={notReceive} alt="待收获" />待收获</li>
                                    <li onClick={this.showOrder4}><img className="stagesIcon" src={notComment} alt="待评价" />待评价</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;