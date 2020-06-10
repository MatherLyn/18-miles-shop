import React, { Component } from 'react';
import CommodityShow1 from '../CommodityShow1';
import { observer } from 'mobx-react';
import { TopCommodity, store, Commodity } from '../../store';
import "./index.less";
import { doSearch } from '../../util';

interface IProps {
    topThree: boolean;
}

interface IState {
    focusIndex: number;
}

@observer
class ShowSellWell extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            focusIndex: 0
        }
    }

    componentDidMount() {
        if (!(store.topCommodities.length < 10)) {
            const param = {
                top: 10
            }
            doSearch(param, 'topCommodities');
        }
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
