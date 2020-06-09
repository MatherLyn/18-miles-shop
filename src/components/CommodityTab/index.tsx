import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { addAnchor } from '../../util';

interface IProps extends RouteComponentProps {
    spu_id: number;
    id: number;
    name: string;
    sku_img: string;
    price: number;
    num: number;
    status: number;
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

    render() {
        return (<div className="commodity-tab">
            <div className="commodity-image">{this.props.sku_img}</div>
            <div className="commodity-info">
                <div className="commodity-name">{this.props.name}</div>
                <div className="commodity-number">{this.props.num}</div>
                <div className="buttons-container">
                    <div className="commodity-price">{this.props.price}</div>
                    <div className="comment" onClick={this.routeToComment}>评价</div>
                </div>
            </div>
        </div>);
    }
}

export default withRouter(CommodityTab);