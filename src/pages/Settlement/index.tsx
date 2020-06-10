import React, { Component } from 'react';
import { store } from '../../store'
import './index.less'
import { item } from '../../cgi';

interface IProps {
    history: any,

}

interface IState {

}

class Settlement extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        for (let i: number = 0; i < store.cart.length; i++) {
            if (store.cart[i].isChecked) {
                this.totalPrice += store.cart[i].price * store.cart[i].num;
                this.totalPieces += store.cart[i].num;
            }
        }
    }

    totalPieces = 0;
    totalPrice = 0;
    handleReturn = () => {
        this.props.history.goBack();
    };

    handleGoToAddress = () => {
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
                            store.cart.filter(item => item.isChecked === true).map((content, index) => (
                                <div className="commodity" key={index}>
                                    <div className="top-wrapper">
                                        <div className="commodity-image">{content.sku_pic}</div>
                                        <div className="middle-box">
                                            <div className="commodity-name">{content.name}</div>
                                            <div className="commodity-attrs">{content.attr_name}</div>
                                        </div>
                                        <div className="right-box">
                                            <div className="commodity-price">￥{content.price}</div>
                                            <div className="commodity-num">×{content.num}</div>
                                        </div>
                                    </div>
                                    <div className="bottom-wrapper">
                                        <div className="subtotal">小计：<span className="highlight-text">￥{content.price * content.num}</span></div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>

                <div className="submit">
                    <div className="summary">{`共 ${this.totalPieces} 件，`}</div>
                    <div className="total-price">合计：<span className="highlight-text-bottom">{`${this.totalPrice}`}</span></div>
                    <div className="submit-button">提交订单</div>
                </div>
            </div>);
    }
}

export default Settlement;