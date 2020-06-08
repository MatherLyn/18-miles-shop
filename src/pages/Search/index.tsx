import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import returnIcon from './images/return.svg';
import discardIcon from './images/discard.svg';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps {
    
}

interface IState {

}

class Search extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

    }

    handleDiscard=()=>{
        //清空最近搜索的内容
        console.log("清空最近搜索的内容");
    };

    handleSearch=()=>{
        //获取输入框中的内容后进行发送查询请求
        console.log("查询");
    };

    handleReturn=()=>{
        this.props.history.goBack();
    };

    render() {

        const arr1 = ['关键词1', '关键词2', '关键词3', 'asdasdfasdfasdfasdff', 'asdfas', 'asdfa', 'fasdfa'];
        const renderHistorySpan = arr1.map((content, index) => {
            return (
                <span className="tagBox" key={index}>{content}</span>
            );
        });

        const arr2 = ['铺子三周年人气热销榜', '电动牙刷', '阿阿阿阿阿阿', '沐浴露', '笔记本电脑', '鼠标', '家用电器', '抽油烟机', '推荐9', '推荐10'];
        const renderRecommendSpan = arr2.map((content, index) => {
            return (
                <div className="tagBox" key={index}>{content}</div>
            );
        });

        return (
            <div id="search">
                <div id="searchBox">
                    <div className="return-icon" onClick={this.handleReturn}>
                        <div className="icon"></div>
                    </div>
                    <input type="text" placeholder="想找点啥？"/>
                    <div id="confirmSearch" onClick={this.handleSearch}>搜索</div>
                </div>
                <div id="displayBox">
                    <div id="recentlySearch">
                        <div id="titleBox">
                            <div className="title">最近搜索</div>
                            <img id="discard" src={discardIcon} alt="丢弃" onClick={this.handleDiscard} />
                        </div>
                        <div className="spanBox">
                            {renderHistorySpan}
                        </div>
                    </div>
                    <div id="searchFound">
                        <div className="title">搜索发现</div>
                        <div className="spanBox">
                            {renderRecommendSpan}
                        </div>
                    </div>
                </div>
                <div className="transition"></div>
            </div>
        )
    }
}

export default withRouter(Search);