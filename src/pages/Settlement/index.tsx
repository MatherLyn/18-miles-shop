import React, { Component } from 'react';
import { store } from '../../store'
import './index.less'
import { item } from '../../api';

interface IMapProps {
    history:any,

}

interface IMapState {

}

class Settlement extends Component<IMapProps, IMapState> {
    constructor(props: IMapProps) {
        super(props);
    }

    handleReturn = () => {
        this.props.history.goBack();
    };

    handleGoToAddress=()=>{
        this.props.history.push('/address');
    };
    render() {
        return (
            <div className="settlement-page">
                <div className="head">
                    <div className="return-icon" onClick={this.handleReturn}>
                        <div className="r-icon"></div>
                    </div>
                    <div className="title">确认订单</div>
                </div>

                <div className="wrapper">
                    <div className="user-addr">
                        <div className="icon"></div>
                        {
                            store.addresses.filter(item => item.default === true).map((content, index) => (
                                <div className="recipient-info" key={index}>
                                    <div className="top-box">
                                        <div className="recipient">{content.recipient}</div>
                                        <div className="phone">{content.phone}</div>
                                    </div>
                                    <div className="address-info">{content.province + content.city + content.county + content.address}</div>
                                </div>
                            ))
                        }
                        <div className="go-to-address-page">
                            <div className="go-icon" onClick={this.handleGoToAddress}>
                                <div className="g-icon"></div>
                            </div>
                        </div>
                    </div>
                    <div className="commodities">
                        {
                            (
                                //根据传到这个页面的具体商品，一件商品返回对应的一个commodity标签
                                <div className="commodity">
                                    <div className="top-wrapper">
                                        <div className="commodity-image">这里是图片</div>
                                        <div className="middle-box">
                                            <div className="commodity-name">这里是商品名称</div>
                                            <div className="commodity-attrs">这里是商品属性</div>
                                        </div>
                                        <div className="right-box">
                                            <div className="commodity-price">￥价格</div>
                                            <div className="commodity-num">×数量</div>
                                        </div>
                                    </div>
                                    <div className="bottom-wrapper">
                                        <div className="subtotal">小计：<span className="highlight-text">￥单价*数量</span></div>
                                    </div>
                                </div>
                            )
                        }


                    </div>
                </div>

                <div className="submit">
                    <div className="summary">{`共${'aaa'}件，`}</div>
                    <div className="total-price">合计：<span className="highlight-text-bottom">{`${'aaa'}`}</span></div>
                    <div className="submit-button">提交订单</div>
                </div>
            </div>);
    }
}

export default Settlement;