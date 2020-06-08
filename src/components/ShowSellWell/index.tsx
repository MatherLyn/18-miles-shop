import React, { Component } from 'react';
import CommodityShow1 from '../CommodityShow1';
import { observer } from 'mobx-react';
import { TopCommodity, store } from '../../store';
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
                <div id="draggableBar">
                    {
                        // store.categories.map((content, index) =>
                        //     <span className={`category${index === this.state.focusIndex ? ' category-focus' : ''}`} key={index} onClick={() => this.handleClick(index)}>
                        //         {content}
                        //     </span>
                        // )
                    }

                </div>
                <ul>
                    {
                        store.topCommodities.map((content: TopCommodity, index: number) => 
                            this.props.topThree ? (
                                index < 3 ? (
                                    <li key={index}>
                                        <CommodityShow1 index={index} tag={content.tag} name={content.name} price={content.price} />
                                    </li>
                                ) : ''
                            ) : (
                                <li key={index}>
                                    <CommodityShow1 index={index} tag={content.tag} name={content.name} price={content.price} />
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
