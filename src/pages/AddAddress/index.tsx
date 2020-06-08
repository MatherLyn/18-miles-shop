import React, { Component } from 'react'
import returnIcon from './images/return.png'
import avatar from './images/avatar.jpeg'
import './index.less';

interface IProps {
    history:any,

};
interface IState {

};

class AddAddress extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    };
    handleAdd=()=>{

    };
    handleReturn=()=>{
        this.props.history.goBack();
    };
    render() {
        return (
            <div className="add-address">
                <div className="add-address-head">
                    <img src={returnIcon} alt="" onClick={this.handleReturn}/>
                    <h1>添加收货地址</h1>
                    <div className="add-address" onClick={this.handleAdd}>保存</div>
                </div>
                <div className="add-address-main-box">
                    
                </div>
            </div>
        )
    }
}

export default AddAddress;