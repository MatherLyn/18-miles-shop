import React, { Component } from 'react';
import "./index.less"
import commodity1 from './images/commodity1.png'
import shoppingCart from './images/shoppingCart.svg'
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps {
    index: number;
    tag: Array<string>;
    name: string;
    price: number;
}

interface IState {
}


//商品展示盒子1
class CommodityShow1 extends Component<IProps, IState> {
    handleRedirectToDetail = (index: number) => {
        this.props.history.push(`/commoditydetail/${index}`);
    }

    handleAddToCart = () => {
        //将对应的商品加入购物车
        console.log("加入购物车")
    };

    renderSpan = this.props.tag.map((content, index) => {
        return (
            <span className="spanBox" key={index}>
                {content}
            </span>
        );
    });

    render() {
        return (
            <div className="commodityBox" onClick={e => this.handleRedirectToDetail(this.props.index)}>
                <div className="images">
                    <img className="commodityImage" src={commodity1} alt="商品图片" />
                    {/* <div className="serialNumber">{this.props.index + 1}</div> */}
                </div>
                <div className="commodityDetail">
                    <div className="span-box-container">{this.renderSpan}</div>
                    <h2 className="commodityName">{this.props.name}</h2>
                    <div className="bottomBox">
                        <h2 className="commodityPrice">{`¥ ${this.props.price}`}</h2>
                        <div className="commodityCollect" onClick={this.handleAddToCart}><img src={shoppingCart} alt="收藏"></img></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CommodityShow1);
