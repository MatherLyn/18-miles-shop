import React, { Component } from 'react';
import { store } from '../../store';
import './index.less';
import { collectAnchor } from '../../util';
import { addOrder } from '../../cgi';
import { Message } from 'element-react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface IProps extends RouteComponentProps {};

interface IState {};

class Settlement extends Component<IProps, IState> {
    private skuIds: Array<number> = [];
    private nums: Array<number> = [];
    private totalPieces = 0;
    private totalPrice = 0;
    private attr: number;
    private val: number;

    constructor(props: IProps) {
        super(props);
        const paramMap: Map<string, string> = collectAnchor(window.location.href);
        const skuIdFromRouter: number = parseInt(paramMap.get('skuId') as string) as number;
        const numFromRouter: number = parseInt(paramMap.get('num') as string) as number;
        this.attr = parseInt(paramMap.get('attr') as string) as number;
        this.val = parseInt(paramMap.get('val') as string) as number;
        if (skuIdFromRouter && numFromRouter) {
            this.skuIds.push(skuIdFromRouter);
            this.nums.push(numFromRouter);
            this.totalPieces = this.nums[0];
            this.totalPrice = (parseInt(store.buySku?.price as string) as number) * this.totalPieces;
        } else {
            for (let i: number = 0; i < store.cart.length; i++) {
                if (store.cart[i].isChecked) {
                    this.totalPrice += store.cart[i].price * store.cart[i].num;
                    this.totalPieces += store.cart[i].num;
                }
            }
        }
    }

    handleReturn = () => {
        this.props.history.goBack();
    };

    private routeTo = (target: string, tab?: string) => {
        const route: string = `${target}${tab ? `#${tab}` : ''}`
        if (store.isLogin) {
            this.props.history.push(route);
        } else {
            this.props.history.push(`/login#redirect_url=${encodeURIComponent(route)}`);
        }
    }

    handleGoToAddress = () => {
        this.props.history.push('/address');
    };

    submitOrder = async () => {
        const payload = {
            id: this.skuIds[0],
            address_id: store.addresses.filter(item => item.default === true)[0].id,
            num: this.nums[0],
            anonymous: true
        }
        const res = await addOrder(payload);
        if (res.data.errcode === 0) {
            Message.success('下单成功');
            setTimeout(() => {
                this.routeTo('/process', '1');
            }, 3000);
        }
    }

    render() {
        const sku: any = this.skuIds.length ? store.detailCache?.skus.filter(sku => sku.id === this.skuIds[0])[0] : null;
        const attr: any = this.skuIds.length ? store.detailCache?.attrs.filter((item: any) => item.id === this.attr)[0] : null;
        const val: any = this.skuIds.length ? attr.values.filter((item: any) => item.id === this.val)[0].name : null;
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
                            <div className="left-icon">
                                <div className="go-icon" onClick={this.handleGoToAddress}>
                                    <div className="g-icon"></div>
                                </div>
                            </div>
                            <div className="address"></div>
                        </div>
                    </div>
                    <div className="commodities">
                        {
                            this.skuIds.length ? (
                                <div className="commodity">
                                    <div className="top-wrapper">
                                        <div className="commodity-image" style={{ backgroundImage: `url(${sku.sku_pic})` }}></div>
                                        <div className="middle-box">
                                            <div className="commodity-name">{store.detailCache?.name}</div>
                                            <div className="commodity-attrs">{val}</div>
                                        </div>
                                        <div className="right-box">
                                            <div className="commodity-price">￥ {parseInt(sku.price)}</div>
                                            <div className="commodity-num">× {this.nums[0]}</div>
                                        </div>
                                    </div>
                                    <div className="bottom-wrapper">
                                        <div className="subtotal">小计：<span className="highlight-text">￥{sku.price * this.nums[0]}</span></div>
                                    </div>
                                </div>
                            ) : (
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
                                            <div className="subtotal">小计：<span className="highlight-text">￥ {content.price * content.num}</span></div>
                                        </div>
                                    </div>
                                ))
                            )
                        }


                    </div>
                </div>

                <div className="submit">
                    <div className="summary">{`共 ${this.totalPieces} 件，`}</div>
                    <div className="total-price">合计：<span className="highlight-text-bottom">¥ {this.totalPrice}</span></div>
                    <div className="submit-button" onClick={this.submitOrder}>提交订单</div>
                </div>
            </div>);
    }
}

export default withRouter(Settlement);