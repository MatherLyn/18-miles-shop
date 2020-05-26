import React, { Component } from 'react'
import TabBar from '../../components/TabBar'
import './index.less';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [
                {
                    "sku_pic": "",
                    "name": "aaaaaaaaaaaaaaa",
                    "attr_name": "bbbbbb",
                    "price": 123,
                    "num": 2,
                    "stock": 100,
                    "isChecked": false,
                },
                {
                    "sku_pic": "",
                    "name": "aaaaaaaaaaaaaaa",
                    "attr_name": "bbbbbb",
                    "price": 123,
                    "num": 2,
                    "stock": 100,
                    "isChecked": false,
                },
            ],
            allChecked: false,
        }
    }

    render() {
        return (
            <div className="shoppingCart">
                <div className="wrapper">
                    <div className="caption">
                        购物车
                        <span>编辑</span>
                    </div>
                    {this.state.cart.map((item, index) => {
                        return (
                            <div className="commodityEntry" key={index}>
                                <div className="checkBox">
                                    <input className="check" type="checkbox" checked={this.state.cart[index].isChecked} />
                                </div>
                                <div className="pic">
                                    <img src={this.state.cart[index].sku_pic} alt="#" />
                                </div>
                                <div className="info">
                                    <div className="txt">
                                        <h3>{this.state.cart[index].name}</h3>
                                        <p>{this.state.cart[index].attr_name}</p>
                                        <p>剩余库存：{this.state.cart[index].stock}</p>
                                    </div>
                                    <div className="num">
                                        <p>￥<span>{this.state.cart[index].price}</span></p>
                                        <div className="modify">
                                            <button >-</button>
                                            <input ref="refNum" type="text" value={this.state.cart[index].num} />
                                            <button >+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <TabBar />
            </div>
        );
    }
}

export default ShoppingCart;