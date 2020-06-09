import React, { Component } from 'react';
import CommodityShow1 from '../CommodityShow1';
import { observer } from 'mobx-react';
import { TopCommodity, store, Commodity } from '../../store';
import "./index.less";

interface IProps {
    topThree: boolean;
}

interface IState {
    focusIndex: number;
}

@observer
class ShowSellWell extends Component<IProps, IState> {
    public state: IState = {
        focusIndex: 0
    }
    
    handleClick = (id: number) => {
        this.setState({
            focusIndex: id
        })
    };

    render() {
        return (
            <div id="showSellWell">
                <ul>
                    {
                        store.topCommodities.map((content: Commodity, index: number) => 
                            this.props.topThree ? (
                                index < 3 ? (
                                    <li key={content.spu_id}>
                                        <CommodityShow1 spuId={content.spu_id} spuPic={content.spu_pic} name={content.name} price={content.price} category={content.category} />
                                    </li>
                                ) : ''
                            ) : (
                                <li key={content.spu_id}>
                                    <CommodityShow1 spuId={content.spu_id} spuPic={content.spu_pic} name={content.name} price={content.price} category={content.category} />
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default ShowSellWell;
