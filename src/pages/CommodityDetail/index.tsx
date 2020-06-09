import React, { Component } from 'react';
import { store } from '../../store';
import { Input } from 'element-react';
import './index.less';

interface IMapProps {

}

interface IMapState {
    showComments: boolean;
}

class CommodityDetail extends Component<IMapProps, IMapState> {
    constructor(props: IMapProps) {
        super(props);
        this.state = {
            showComments: false
        };
    }

    toggleComments = () => {
        if (this.state.showComments) {
            this.setState({
                showComments: false
            });
        } else {
            this.setState({
                showComments: true
            });
        }
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
            <div className="commodity-attribute">
                {item.attrs.map((item, index) => <div key={index}>

                </div>)}
            </div>
            <div className="commodity-comment" onClick={this.toggleComments}>
                <div className="commodity-comment-title">{`宝贝评价 ()`}</div>
                <div className="commodity-comment-show-all">查看全部</div>
            </div>
            <div className="commodity-description-image" style={{
                backgroundImage: ``
            }}></div>
            <div
                className="comments"
                style={{
                    bottom: this.state.showComments ? '0px' : '-300px'
                }}
            >
                {item.comments.map((item, index) => <div key={index}>

                </div>)}
                <div className="add-comment">
                    <Input />
                </div>
            </div>
        </>);
    }
}

export default CommodityDetail;