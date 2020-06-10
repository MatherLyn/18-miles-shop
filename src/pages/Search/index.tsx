import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import returnIcon from './images/return.svg';
import discardIcon from './images/discard.svg';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { doSearch, addAnchor } from '../../util';
import { store } from '../../store';
import { observer } from 'mobx-react';

interface IProps extends RouteComponentProps {

}

interface IState {

}

@observer
class Search extends Component<IProps, IState> {
    private inputRef: React.RefObject<HTMLInputElement> = React.createRef();
    constructor(props: IProps) {
        super(props);
    }

    componentDidMount () {
        this.inputRef.current?.focus();
    }

    handleDiscard = () => {
        store.recentSearch = [];
        window.localStorage.setItem('recentSearch', JSON.stringify(store.recentSearch));
    };

    handleSearch = (value?: string) => {
        if (!value) {
            return;
        }
        const param = {
            keyword: value,
            page: 1,
            page_num: 8
        }
        this.props.history.push(addAnchor('/searchResult', param));
        doSearch(param);
    };

    handleReturn = () => {
        this.props.history.push('/');
    };

    render() {
        const renderHistorySpan = store.recentSearch.map((content, index) => 
            <span className="tagBox" key={index} onClick={e => this.handleSearch(content)}>{content}</span>
        );

        // const arr2 = ['铺子三周年人气热销榜', '电动牙刷', '阿阿阿阿阿阿', '沐浴露', '笔记本电脑', '鼠标', '家用电器', '抽油烟机', '推荐9', '推荐10'];
        // const renderRecommendSpan = arr2.map((content, index) => {
        //     return (
        //         <div className="tagBox" key={index}>{content}</div>
        //     );
        // });

        return (
            <div id="search">
                <div id="searchBox">
                    <div className="return-icon" onClick={this.handleReturn}>
                        <div className="icon"></div>
                    </div>
                    <input type="text" placeholder="想找点啥？" ref={this.inputRef}/>
                    <div id="confirmSearch" onClick={e => this.handleSearch(this.inputRef.current?.value)}>搜索</div>
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
                    {/* <div id="searchFound">
                        <div className="title">搜索发现</div>
                        <div className="spanBox">
                            {renderRecommendSpan}
                        </div>
                    </div> */}
                </div>
                <div className="transition"></div>
            </div>
        )
    }
}

export default withRouter(Search);