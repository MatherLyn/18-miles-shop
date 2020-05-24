import React, { Component } from 'react';
import CommodityShow1 from '../CommodityShow1';
import { observer } from 'mobx-react';
import { commodity, store } from '../../store';
import Store from '../../store/store';
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
    
    handleOnClick = (id: number) => {
        this.setState({
            focusIndex: id
        })
    };

    render() {
        return (
            <div id="showSellWell">
                <div id="draggableBar">
                    {
                        store.categories.map((content, index) =>
                            <span className={`category${index === this.state.focusIndex ? ' category-focus' : ''}`} key={index} onClick={() => this.handleOnClick(index)}>
                                {content}
                            </span>
                        )
                    }

                </div>
                <ul>
                    {
                        store.commodities.map((content: commodity, index: number) => 
                            this.props.topThree ? (
                                index < 3 ? (
                                    <li key={index}>
                                        <CommodityShow1 index={index} tag={content.tag} name={content.name} price={`¥${content.price}`} />
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
