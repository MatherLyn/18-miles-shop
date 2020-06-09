import React, { Component } from 'react'
import ISearchBar from '../../components/SearchBar'
import ICarousel from '../../components/Carousel'
import Categories from '../../components/Categories'
import CommodityShow2 from '../../components/CommodityShow2'
import ShowSellWell from '../../components/ShowSellWell'
import { store } from '../../store';
import './index.less'

export default class Home extends Component {

    buttonOnClick = () => {
        this.props.history.push('/sellwell');
    };

    render() {

        return (
            <div id="home">
                <ISearchBar />
                <ICarousel />
                <div id="wrapper">
                    <Categories />
                    <div id="sellWell">
                        <h2 className="sell-well-title">热卖TOP3</h2>
                        <ShowSellWell topThree={true} />
                        <button onClick={this.buttonOnClick} id="moreButton">
                            更多...
                        </button>
                    </div>
                    <div id="dailyRecommend">
                        <h2 className="recommendTitle">每日推荐</h2>
                        <ul id="recommendBox">
                            {
                                store.recommendCommodities.map((content, index) => {
                                    return (
                                        <li key={index} className="recommendItem">
                                            <CommodityShow2 index={index} tag={content.tag} name={content.name} price={content.price} />
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div id="bottomBox">
                        <h2>木有更多啦</h2>
                    </div>
                </div>
            </div>
        )
    }
}
