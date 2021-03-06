import React, { Component } from 'react';
import { store } from '../../store';
import CommodityShow2 from '../../components/CommodityShow2';
import { doSearch, collectAnchor, addAnchor, throttle } from '../../util';
import './index.less';
import { observer } from 'mobx-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps {};

interface IState {
    more: string;
    page: number;
};

@observer
class SearchResult extends Component<IProps, IState> {
    private inputRef: React.RefObject<HTMLInputElement> = React.createRef();
    private listRef: React.RefObject<HTMLUListElement> = React.createRef();
    private map: Map<string, string>;

    constructor(props: IProps) {
        super(props);
        this.state = {
            more: store.searchResult.length < 8 ? '没有更多了' : '下滑查看更多商品',
            page: 1
        }
        this.map = collectAnchor(window.location.href);
        const param: any = {};
        this.map.forEach((value: string, key: string) => {
            param[key] = value;
        });
        doSearch(param, param.arrInStore);
    }

    componentDidMount() {
        const listRef = this.listRef.current as HTMLUListElement;
        if (listRef.onscroll === null) {
            listRef.onscroll = throttle(this.handleUpdate, 500);
        }
    }

    componentWillUnmount() {
        const listRef = this.listRef.current as HTMLUListElement;
        listRef.onscroll = null;
    }

    handleReturn = () => {
        const listRef = this.listRef.current as HTMLUListElement;
        listRef.onscroll = null;
        store.searchResult = [];
        this.props.history.push('/search');
    };

    handleSearch = async () => {
        const ref = this.inputRef.current;
        if (ref?.value === this.map.get('keyword')) {
            return;
        }
        const param = {
            keyword: ref?.value,
            page: 1,
            page_num: 8
        }
        if (!param.keyword) {
            return;
        }
        this.setState({
            more: '搜索中'
        })
        this.props.history.push(addAnchor('/searchResult', param));
        this.setState({
            more: '下滑查看更多',
            page: 1
        })
        doSearch(param);
    };

    handleUpdate = async () => {
        const param = {
            keyword: this.map.get('keyword'),
            page: this.state.page + 1,
            page_num: 8
        }
        if (!param.keyword) {
            return;
        }
        const prevLength: number = store.searchResult.length;
        this.setState({
            more: '搜索中'
        })
        doSearch(param);
        if (store.searchResult.length < prevLength + 8) {
            return this.setState({
                more: '没有更多了'
            })
        }
        this.setState({
            more: '下滑查看更多',
            page: this.state.page + 1
        });
    }

    render() {
        return (
            <div className="search-result">
                <div className="search-box">
                    <div className="return-icon" onClick={this.handleReturn}>
                        <div className="icon"></div>
                    </div>
                    <input type="text" placeholder="想找点啥？" ref={this.inputRef} />
                    <div className="confirm-search" onClick={this.handleSearch}>搜索</div>
                </div>
                <div className="wrapper">
                    <ul className="content" ref={this.listRef}>
                        {
                            store.searchResult.map((content, index) => 
                                <li className="item" key={content.spu_id}>
                                    <CommodityShow2 spuId={content.spu_id} name={content.name} spuPic={content.spu_pic} category={content.category} price={content.price} />
                                </li>
                            )
                        }
                    </ul>
                    <div className="more">{this.state.more}</div>
                </div>
            </div>
        )
    }
}

export default withRouter(SearchResult);