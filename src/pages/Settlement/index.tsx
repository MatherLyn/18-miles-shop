import React, { Component } from 'react';

interface IMapProps {

}

interface IMapState {

}

class Settlement extends Component<IMapProps, IMapState> {
    constructor(props: IMapProps) {
        super(props);
    }

    render() {
        return (<div className="settlement-page">
            <div className="user-addr"></div>
            <div className="commodity">
                
            </div>
            <div className="submit">
                <div className="summary">{`共${'aaa'}件`}</div>
                <div className="total-price">{`合计：${'aaa'}`}</div>
                <div className="submit-button">提交订单</div>
            </div>
        </div>);
    }
}

export default Settlement;