import React, { Component } from 'react';
import "./index.less"
import detail from '../../assets/detail.svg';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps {
    spuId: number;
    name: string;
    spuPic: string;
    category: string;
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
    }

    render() {
        return (
            <div className="commodityBox" onClick={e => this.handleRedirectToDetail(this.props.spuId)}>
                <div className="images">
                    <img className="commodityImage" src={this.props.spuPic} alt="商品图片" />
                </div>
                <div className="commodityDetail">
                    <h2 className="commodityName">{this.props.name}</h2>
                    <div className="span-box-container">
                        <span className="spanBox" key={this.props.spuId}>
                            {this.props.category}
                        </span>
                    </div>
                    <div className="bottomBox">
                        <div className="commodityPrice">{`¥ ${this.props.price}`}</div>
                        <div className="commodityCollect"><img src={detail} alt="收藏"></img></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CommodityShow1);
