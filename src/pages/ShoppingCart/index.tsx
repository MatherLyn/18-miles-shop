import React, { Component } from 'react';
import { Checkbox } from 'antd-mobile';
import { store } from '../../store';
import './index.less';
import { observer } from 'mobx-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getCartList, addOrderFromCart, getAddressList } from '../../cgi';
import { Message } from 'element-react';

interface IProps extends RouteComponentProps {

}

interface IState {
    managing: boolean;
    selectAll: boolean;
}

@observer
class ShoppingCart extends Component<IProps, IState> {

    private selected: number = 0;

    private defaultAddress = "";
    constructor(props: IProps) {
        super(props);
        for (let i: number = 0; i < store.cart.length; i++) {
            if (store.cart[i].isChecked) {
                this.selected++;
            }
        }
        this.state = {
            managing: false,
            selectAll: ((this.selected === store.cart.length) && (store.cart.length !== 0)),
        }
        for (let i: number = 0; i < store.addresses.length; i++) {
            if (store.addresses[i].default) {
                this.defaultAddress = `${store.addresses[i].province}${store.addresses[i].city}${store.addresses[i].county}${store.addresses[i].address}`;
            }
        }
    }

    async componentDidMount() {
        const cartRes = await getCartList();
        if (cartRes.data.errcode === 0) {
            store.cart = cartRes.data.data;
        }
    }

    handleManage = () => {
        if (this.state.managing) {
            this.setState({
                managing: false
            })
        } else {
            this.setState({
                managing: true
            })
        }
    }

    handleCheck = (index: number) => {
        const ary = store.cart;
        const curCheck: boolean = ary[index].isChecked;
        if (curCheck) {
            ary[index].isChecked = false;
            this.selected--;
            if (this.state.selectAll) {
                this.setState({
                    selectAll: false
                });
            }
        } else {
            ary[index].isChecked = true;
            this.selected++;
            if (this.selected === ary.length) {
                this.setState({
                    selectAll: true && store.cart.length !== 0
                });
            }
        }
    }

    handleSelectAll = () => {
        if (this.selected < store.cart.length) {
            for (let i: number = 0; i < store.cart.length; i++) {
                const checked: boolean = store.cart[i].isChecked;
                if (!checked) {
                    store.cart[i].isChecked = true;
                }
            }
            this.selected = store.cart.length;
            this.setState({
                selectAll: true && store.cart.length !== 0
            })
        } else {
            for (let i: number = 0; i < store.cart.length; i++) {
                const checked: boolean = store.cart[i].isChecked;
                if (checked) {
                    store.cart[i].isChecked = false;
                }
            }
            this.selected = 0;
            this.setState({
                selectAll: false
            })
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

    handleClear = async () => {
        if (this.state.managing) {
            for (let i: number = store.cart.length - 1; i >= 0; i--) {
                if (store.cart[i].isChecked) {
                    store.cart.splice(i, 1);
                    this.selected--;
                }
            }
        } else {
            if (this.selected) {
                const payload: any = {
                    anonymous: true,
                };
                const list = [];
                for (let i: number = 0; i < store.cart.length; i++) {
                    if (store.cart[0].isChecked) {
                        list.push(store.cart[0].id);
                    }
                }
                let addressId = 0;
                for (let i: number = 0; i < store.addresses.length; i++) {
                    if (store.addresses[i].default) {
                        addressId = store.addresses[i].id as number;
                    }
                }
                payload.cart_id_list = list;
                payload.address_id = addressId;
                const res = await addOrderFromCart(payload);
                if (res.data.errcode === 0) {
                    Message.success('成功下单');
                    this.routeTo('/process', '1');
                } else {
                    Message.error('网络出现问题，请稍后重试');
                }
            }
        }
    }

    modifyGoodCount = (change: number, currentNum: number, itemIndex: number) => {
        if (change === -1) {
            if (currentNum === 1) {
                return;
            }
        } else if (change === 1) {
            if (currentNum === 999) {
                return;
            }
        }
        store.cart[itemIndex].num += change;
    }

    render() {
        const addr = store.addresses.filter(item => item.default === true)[0];
        let total = 0;
        for (let i = 0; i < store.cart.length; i++) {
            // @ts-ignore
            total += store.cart[i].isChecked ? store.cart[i].sku.price * store.cart[i].num : 0;
        }
        return (
            <div className="shoppingCart">
                <div className="wrapper">
                    <div className="caption">
                        <div className="cart-title">
                            <div className="title">购物车</div>
                            <div className="manage" onClick={this.handleManage}>{this.state.managing ? '完成' : '管理'}</div>
                        </div>
                        <div className="cart-info">
                            <div className="good-count">{`共${store.cart.length}件宝贝`}</div>
                            <div className="user-address">{`收货地址：${addr.province}${addr.city}${addr.county}...`}</div>
                        </div>
                    </div>
                    <div className="entry-wrapper">
                        {store.cart.map((item, index) => {
                            return (
                                <div className="commodityEntry" key={index}>
                                    <div className="checkBox">
                                        <Checkbox checked={item.isChecked} onChange={e => this.handleCheck(index)} />
                                    </div>
                                    <div className="pic">
                                        <img src={item.sku.sku_pic} alt="#" />
                                    </div>
                                    <div className="info">
                                        <div className="txt">
                                            <h3>{item.sku.name.slice(0, 6)}...</h3>
                                            <p>{item.attr_name}</p>
                                            <p>剩余库存：{item.sku.stock}</p>
                                        </div>
                                        <div className="num">
                                            <p>{`¥ ${item.sku.price}`}</p>
                                            <div className="modify">
                                                <div className="minus" onClick={() => this.modifyGoodCount(-1, item.num, index)}>-</div>
                                                <div className="count">{item.num}</div>
                                                <div className="plus" onClick={() => this.modifyGoodCount(1, item.num, index)}>+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="manage-bar">
                    <div className="select-all">
                        <Checkbox onChange={this.handleSelectAll} checked={this.state.selectAll} />
                        <div className="select-all-word">全选</div>
                    </div>
                    <div className="manage-bar-right">
                        {
                            this.state.managing ? null : (
                                <div className="total-price">
                                    <div className="total-price-title">合计：</div>
                                    <div className="total-price-content">{`¥ ${total}`}</div>
                                </div>
                            )
                        }
                        <div className="clear" onClick={this.handleClear}>{`${this.state.managing ? '删除' : `结算 (${this.selected})`}`}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ShoppingCart);