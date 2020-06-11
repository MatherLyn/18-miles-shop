import React, { Component } from 'react';
import AddAddress from '../../components/AnAddress';
import returnIcon from './images/return.png';
import { store, AddressInfo } from '../../store';
import './index.less';
import { addAnchor } from '../../util';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import { getAddressList } from '../../cgi';

interface IProps extends RouteComponentProps { };
interface IState { };

@observer
class Address extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        getAddressList().then(res => {
            if (res.data.errcode === 0) {
                store.addresses = res.data.data;
            }
        })
    }

    handleAddAddress = () => {
        this.props.history.push(addAnchor('/addaddress', {}));
    };

    handleReturn = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <div className="address">
                <div className="address-head">
                    <div className="return-icon" onClick={this.handleReturn}>
                        <div className="r-icon"></div>
                    </div>
                    <h1>我的收货地址</h1>
                    <div className="add-address" onClick={this.handleAddAddress}>添加新地址</div>
                </div>
                <div className="address-main-box">
                    {
                        store.addresses.map((content: AddressInfo, index: number) => {
                            return (<AddAddress key={index} index={index} />);
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Address);