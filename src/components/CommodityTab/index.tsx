import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { addAnchor } from '../../util';
import './index.less'

interface IProps extends RouteComponentProps {
    spu_id: number;
    id: number;
    name: string;
    sku_img: string;
    price: number;
    num: number;
    status: number;
    attrs: Array<string>,
    v: Array<string>
}

interface IState {

}

class CommodityTab extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    routeToComment = () => {
        const route: string = addAnchor('/comment', { index: this.props.id });
        this.props.history.push(route);
    }

    showAttrs = () => {
        let str = '';
        let i = 0;
        for (; i < this.props.attrs.length - 1; i++) {
            str = str + this.props.attrs[i] + '：' + this.props.v[i] + '，'
        }
        str = str + this.props.attrs[i] + '：' + this.props.v[i];
        return str
    }

    render() {
        return (<div className="commodity-tab">
            <div className="head-box">
                <div className="commodity-image"
                    style={{
                        backgroundImage: this.props.sku_img
                    }}
                />
                <div className="commodity-info">
                    <div className="commodity-name">{this.props.name}</div>
                    <div className="commodity-detail">{this.showAttrs()}</div>
                </div>
                <div className="order-info">
                    <div className="commodity-price">￥ {this.props.price}</div>
                    <div className="commodity-number">× {this.props.num}</div>
                </div>
            </div>
            <div className="bottom-box">
                <div className="price-sum">总价 ￥{this.props.price * this.props.num}，优惠 ¥ 0，实付款 ¥{this.props.price * this.props.num}</div>
                <div className="buttons-container">
                    <div
                        className="comment"
                        style={{
                            borderColor: '#888',
                            color: '#888',
                            marginRight: '16px'
                        }}
                        onClick={this.routeToComment}
                    >卖了换钱</div>
                    <div className="comment" onClick={this.routeToComment}>评价</div>
                </div>
            </div>
        </div>);
    }
}

export default withRouter(CommodityTab);