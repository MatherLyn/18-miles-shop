import React, { Component } from 'react';
import "./index.less"
import detail from '../../assets/detail.svg'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { addAnchor } from '../../util';

interface IProps extends RouteComponentProps {
    spuId: number;
    name: string;
    spuPic: string;
    category: string;
    price: number;
}

interface IState {

}

//商品展示盒子2
class CommodityShow2 extends Component<IProps, IState> {

    handleRedirectToDetail = (spuId: number) => {
        this.props.history.push(addAnchor('/commoditydetail', { spuId }));
    }

    handleDetail() {
        //显示操作详情
        console.log("显示操作详情");
    }

    render() {
        return (
            <div className="commodityBox2" onClick={e => this.handleRedirectToDetail(this.props.spuId)}>
                <div className="commodityImage"
                    style={{
                        backgroundImage: `url(${this.props.spuPic})`
                    }}
                />
                <div className="commodityDetails">
                    <h1>{this.props.name}</h1>
                    <div className="tagBox">
                        <span className="spanBox">
                            {this.props.category}
                        </span>
                    </div>
                    <div className="bottomBox">
                        <h1 className="commodity-price">￥{this.props.price}</h1>
                        <img className="showDetail" onClick={this.handleDetail} src={detail} alt="加入购物车"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CommodityShow2);
