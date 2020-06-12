import React, { Component } from 'react'
import ISearchBar from '../../components/SearchBar'
import ICarousel from '../../components/Carousel'
import Categories from '../../components/Categories'
import CommodityShow2 from '../../components/CommodityShow2';
import ShowSellWell from '../../components/ShowSellWell';
import { store } from '../../store';
import './index.less';
import { getCommodityList } from '../../cgi';

export default class Home extends Component {

    async componentDidMount () {
        const topSell = await getCommodityList({
            top: 10,
            page_num: 10
        });
        if (topSell.data.errcode === 0) {
            store.topCommodities = topSell.data.data;
        }

        const recommend = await getCommodityList({
            category_id: ((Math.random() * 7) >> 0) + 1
        });
        if (recommend.data.errcode === 0) {
            store.recommendCommodities = recommend.data.data;
        }
        this.setState({});
    }

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
                                        <li key={content.spu_id} className="recommendItem">
                                            <CommodityShow2 spuId={content.spu_id} spuPic={content.spu_pic} name={content.name} price={content.price} category={content.category} />
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
