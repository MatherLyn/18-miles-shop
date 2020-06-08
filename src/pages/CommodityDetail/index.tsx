import React, { Component } from 'react';
import { store } from '../../store';
import './index.less';

interface IMapProps {

}

interface IMapState {

}

class CommodityDetail extends Component<IMapProps, IMapState> {
    constructor(props: IMapProps) {
        super(props);
    }

    /**
     * @todo 到时候写上真实的数据
     */
    render() {
        const item = store.detailCache[0];
        return (<>
            <div className="commodity-image" style={{
                backgroundImage: ``
            }}></div>
            <div className="commodity-info">
                <div className="commodity-price">{`¥ ${item.price}`}</div>
                <div className="commodity-name">{item.name}</div>
            </div>
            <div className="user-info">{}</div>
            <div className="commodity-attribute">
                {item.attrs.map((item, index) => <div></div>)}
            </div>
            <div className="commodity-comment">
                {item.comments.map((item, index) => <div></div>)}
            </div>
            <div className="commodity-description-image" style={{
                backgroundImage: ``
            }}></div>
        </>);
    }
}

export default CommodityDetail;