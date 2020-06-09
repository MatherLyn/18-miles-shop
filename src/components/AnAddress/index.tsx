import React, { Component } from 'react'
import './index.less';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { addAnchor } from '../../util';
import { store, AddressInfo } from '../../store';

interface IProps extends RouteComponentProps {
    index: number;
};
interface IState {

};

class AnAddress extends Component<IProps, IState> {
    private address: AddressInfo = store.addresses[this.props.index];

    constructor(props: IProps) {
        super(props);
    };

    handleEdit = () => {
        const route: string = addAnchor('/addAddress', {
            index: this.props.index,
            ...this.address
        });
        this.props.history.push(route);
    };

    render() {
        // default: true,
        // province: '广东省',
        // city: '广州市',
        // county: '番禺区',
        // postal_code: 510006,
        // address: '华南理工大学(大学城校区)',
        // recipient: '林浩2',
        // phone: 12345678900,
        return (
            <div className="an-address">
                <div className="avatar">{this.address.recipient[0]}</div>
                <div className="text-box">
                    <div className="box1">
                        <span className="name">{this.address.recipient}</span>
                        <span className="number">{this.address.phone}</span>
                    </div>
                    <div className="box2">
                        <span style={{display:this.address.default?'inline':'none'}} className="default-span">
                            默认
                        </span>
                        {`${this.address.province}${this.address.city}${this.address.county}${this.address.address}`}
                    </div>
                </div>
                <div className="edit" onClick={this.handleEdit}>编辑</div>
            </div>
        )
    }
}

export default withRouter(AnAddress);