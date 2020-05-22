import React, { Component } from 'react'
import './index.less'
import returnIcon from './images/return.svg'
import discardIcon from './images/discard.svg'

export default class Search extends Component {

    handleDiscard=()=>{
        //清空最近搜索的内容
        console.log("清空最近搜索的内容");
    };

    handleSearch=()=>{
        //获取输入框中的内容后进行发送查询请求
        console.log("查询");
    };

    handleReturn=()=>{
        this.props.history.push('/home');
    };

    render() {
        const arr1 = ['关键词1', '关键词2', '关键词3'];
        const renderHistorySpan = arr1.map((content) => {
            return (
                <span className="tagBox">{content}</span>
            );
        });

        const arr2 = ['铺子三周年人气热销榜', '电动牙刷', '阿阿阿阿阿阿', '沐浴露', '笔记本电脑', '鼠标', '家用电器', '抽油烟机', '推荐9', '推荐10'];
        const renderRecommendSpan = arr2.map((content) => {
            return (
                <div className="tagBox">{content}</div>
            );
        });

        return (
            <div id="search">
                <div id="searchBox">
                    <img src={returnIcon} alt="" onClick={this.handleReturn}/>
                    <input type="text" placeholder="想找点啥？"/>
                    <div id="confirmSearch" onClick={this.handleSearch}>搜索</div>
                </div>
                <div id="displayBox">
                    <div id="recentlySearch">
                        <div id="titleBox">
                            <h1>最近搜索</h1>
                            <img id="discard" src={discardIcon} alt="丢弃" onClick={this.handleDiscard} />
                        </div>
                        <div className="spanBox">
                            {renderHistorySpan}
                        </div>
                    </div>
                    <div id="searchFound">
                        <h1>搜索发现</h1>
                        <div className="spanBox">
                            {renderRecommendSpan}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
