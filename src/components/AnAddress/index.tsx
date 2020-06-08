import React, { Component } from 'react'
import './index.less';

interface IProps {
    name: string,
    number: number,
    address: string,
    default:boolean,
};
interface IState {

};

class AnAddress extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    };
    handleEdit = () => {

    };
    render() {
        return (
            <div className="an-address">
                <div className="avatar">{this.props.name[0]}</div>
                <div className="text-box">
                    <div className="box1">
                        <span className="name">{this.props.name}</span>
                        <span className="number">{this.props.number}</span>
                    </div>
                    <div className="box2"><span style={{display:this.props.default?'inline':'none'}}>默认</span>{this.props.address}</div>
                </div>
                <div className="edit" onClick={this.handleEdit}>编辑</div>
            </div>
        )
    }
}

export default AnAddress;