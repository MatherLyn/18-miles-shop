import React, { Component } from 'react';
import AddAddress from '../../components/AnAddress';
import returnIcon from './images/return.png';
import {store,AddressInfo} from '../../store';
import './index.less';

interface IProps {
    history:any

};
interface IState {

};

class Address extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    };
    handleAddAddress = () => {
        this.props.history.push('/addaddress');
    };
    handleReturn=()=>{
        this.props.history.goBack();
    };
    render() {
        return (
            <div className="address">
                <div className="address-head">
                    <img src={returnIcon} alt="" onClick={this.handleReturn}/>
                    <h1>我的收货地址</h1>
                    <div className="add-address" onClick={this.handleAddAddress}>添加新地址</div>
                </div>
                <div className="address-main-box">
                    {
                        store.addresses.map((content:AddressInfo, index:number) => {
                            return (<AddAddress key={index} name={content.recipient} number={content.phone} address={content.province+''+content.city+''+content.county+''+content.address} default={content.default}/>);
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Address;