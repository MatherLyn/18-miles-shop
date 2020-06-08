import React, { Component } from 'react'
import notPay from './images/notPay.svg'
import notComment from './images/notComment.svg'
import notShip from './images/notShip.svg'
import notReceive from './images/notReceive.svg'
import setting from './images/setting.svg'
import avatar from './images/avatar.jpeg'
import './index.less';
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface IProps extends RouteComponentProps {

}

interface IState {

}

class Profile extends Component<IProps, IState> {

    private routeTo = (target: string, tab?: string) => {
        this.props.history.push(`${target}${tab ? `#${tab}` : ''}`);
    }

    render() {
        return (
            <div id="me">
                <div id="wrapper">
                    <div id="topBox">
                        <img id="settingIcon" src={setting} alt="设置"  onClick={e => this.routeTo('/settings')}/>
                        <div id="user">
                            <img id="avatar" src={avatar} alt="用户头像"/>
                            <div id="name">
                                <div className="user-info">
                                    <div className="user-content">{`林大妈，你好`}</div>
                                </div>
                            </div>
                            <div id="links">
                                <ul>
                                    <li onClick={e => this.routeTo('/collection')}>收藏</li>
                                    <li onClick={e => this.routeTo('/discount')}>优惠</li>
                                    <li onClick={e => this.routeTo('/history')}>足迹</li>
                                    <li onClick={e => this.routeTo('/bill')}>账单</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="inner-wrapper">
                        <div id="orderBox">
                            <div id="caption">
                                <h1>我的订单</h1>
                                <span onClick={e => this.routeTo('/order')}>查看全部订单</span>
                            </div>
                            <div id="stages">
                                <ul>
                                    <li onClick={e => this.routeTo('/process', '1')}><img className="stagesIcon" src={notPay} alt="待付款" />待付款</li>
                                    <li onClick={e => this.routeTo('/process', '2')}><img className="stagesIcon" src={notShip} alt="待发货" />待发货</li>
                                    <li onClick={e => this.routeTo('/process', '3')}><img className="stagesIcon" src={notReceive} alt="待收货" />待收货</li>
                                    <li onClick={e => this.routeTo('/process', '4')}><img className="stagesIcon" src={notComment} alt="待评价" />待评价</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Profile);