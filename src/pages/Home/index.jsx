import React, { Component } from 'react'
import ISearchBar from '../../components/SearchBar'
import ICarousel from '../../components/Carousel'
import './index.less'
import Categories from '../../components/Categories'
import CommodityShow2 from '../../components/CommodityShow2'
import ShowSellWell from '../../components/ShowSellWell'

export default class Home extends Component {

    handleJumpToSearch = () => {
        this.props.history.push('/search');
    };

    buttonOnClick = () => {
        this.props.history.push('/sellwell');
    };

    render() {
        const commodities2 = [{
            'tag': ['标签1', '标签1', '标签1'],
            'name': '商品名称1',
            'price': '￥30'
        },
        {
            'tag': ['标签2', '标签2'],
            'name': '商品名称2',
            'price': '￥33'
        },
        {
            'tag': ['标签3', '标签3', '标签3'],
            'name': '商品名称3',
            'price': '￥45'
        },
        {
            'tag': ['标签3', '标签3'],
            'name': '商品名称3',
            'price': '￥45'
        },
        {
            'tag': ['标签3', '标签3', '标签3'],
            'name': '商品名称3',
            'price': '￥45'
        },
        {
            'tag': ['标签3', '标签3', '标签3'],
            'name': '商品名称3',
            'price': '￥45'
        },
        {
            'tag': ['标签3', '标签3'],
            'name': '商品名称3',
            'price': '￥45'
        },
        {
            'tag': ['标签3'],
            'name': '商品名称3',
            'price': '￥45'
        }];
        const renderRecommend = commodities2.map((content, index) => {
            return (
                <li key={index} className="recommendItem">
                    <CommodityShow2 tag={content.tag} name={content.name} price={content.price} />
                </li>
            );
        });

        return (
            <div id="home">
                <ISearchBar jumpTo={this.handleJumpToSearch} />
                <ICarousel />
                <div id="wrapper">
                    <Categories />
                    <div id="sellWell">
                        <h2>热卖TOP3</h2>
                        <ShowSellWell topThree={true} />
                        <button onClick={this.buttonOnClick} id="moreButton">
                            更多
                        </button>
                    </div>
                    <div id="dailyRecommend">
                        <h2>每日推荐</h2>
                        <ul id="recommendBox">
                            {renderRecommend}
                        </ul>
                    </div>
                    <div id="bottomBox">
                        <h2>木有更多拉</h2>
                    </div>
                </div>
            </div>
        )
    }
}
