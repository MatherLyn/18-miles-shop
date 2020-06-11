import React, { Component } from 'react';
import notPay from './images/notPay.svg';
import notComment from './images/notComment.svg';
import notShip from './images/notShip.svg';
import notReceive from './images/notReceive.svg';
import setting from './images/setting.svg';
import avatar from '../../assets/avatar.png';
import './index.less';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { store } from '../../store';
import { observer } from 'mobx-react';
import { getUserProfile } from '../../cgi';

interface IProps extends RouteComponentProps {

}

interface IState {

}

@observer
class Profile extends Component<IProps, IState> {

    async componentDidMount () {
        if (store.loginAuthorization) {
            const userInfo = await getUserProfile();
            if (userInfo?.data.errcode === 0) {
                store.userInfo = userInfo.data.data;
            }
        }
    }

    private routeTo = (target: string, tab?: string) => {
        const route: string = `${target}${tab ? `#${tab}` : ''}`
        if (store.isLogin) {
            this.props.history.push(route);
        } else {
            this.props.history.push(`/login#redirect_url=${encodeURIComponent(route)}`);
        }
    }

    handleLogin = () => {
        if (!store.isLogin) {
            this.props.history.push(`/login#redirect_url=${encodeURIComponent('/profile')}`);
        }
    }

    removeToSetting=()=>{
        store.isLogin ? this.props.history.push('/setting') : this.props.history.push(`/login#redirect_url=${encodeURIComponent('/setting')}`);
    };

    render() {
        return (
            <div id="me">
                <div id="wrapper">
                    <div id="topBox">
                        <img id="settingIcon" src={setting} alt="设置"  onClick={this.removeToSetting}/>
                        <div id="user">
                            <div
                                id="avatar"
                                style={{
                                    backgroundImage: `url(${avatar})`
                                }}
                                onClick={this.handleLogin}
                            />
                            <div id="name">
                                <div className="user-info">
                                    <div className="user-content">{store.isLogin ? `${store.userInfo?.username}，你好` : <div>你好，请先<a className="login-tips" onClick={this.handleLogin}>登录</a></div>}</div>
                                </div>
                            </div>
                            <div id="links">
                                <ul>
                                    <li onClick={e => this.routeTo('/collection')}>
                                        <div className="link-icon collection"></div>
                                        <div className="link-title">收藏</div>
                                    </li>
                                    <li onClick={e => this.routeTo('/discount')}>
                                        <div className="link-icon discount"></div>
                                        <div className="link-title">优惠</div>
                                    </li>
                                    <li onClick={e => this.routeTo('/history')}>
                                        <div className="link-icon history"></div>
                                        <div className="link-title">足迹</div>
                                    </li>
                                    <li onClick={e => this.routeTo('/bill')}>
                                        <div className="link-icon bill"></div>
                                        <div className="link-title">账单</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="inner-wrapper">
                        <div id="orderBox">
                            <div id="caption">
                                <h1>我的订单</h1>
                                <span onClick={e => this.routeTo('/process', '1')}>查看全部订单</span>
                            </div>
                            <div id="stages">
                                <ul>
                                    <li onClick={e => this.routeTo('/process', '2')}><img className="stagesIcon" src={notPay} alt="待付款" />待付款</li>
                                    <li onClick={e => this.routeTo('/process', '3')}><img className="stagesIcon" src={notShip} alt="待发货" />待发货</li>
                                    <li onClick={e => this.routeTo('/process', '4')}><img className="stagesIcon" src={notReceive} alt="待收货" />待收货</li>
                                    <li onClick={e => this.routeTo('/process', '5')}><img className="stagesIcon" src={notComment} alt="待评价" />待评价</li>
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