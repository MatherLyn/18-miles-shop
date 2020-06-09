import React, { Component } from 'react';
import { store } from '../../store';
import CommodityShow2 from '../../components/CommodityShow2';
import { doSearch, collectAnchor, addAnchor } from '../../util';
import './index.less';

interface IProps {
    history: any,

};
interface IState {
    page: number;
};
class SearchResult extends Component<IProps, IState> {
    private inputRef: React.RefObject<HTMLInputElement> = React.createRef();
    private map: Map<string, string>;
    constructor(props: IProps) {
        super(props);
        this.state = {
            page: 1
        }
        this.map = collectAnchor(window.location.href);
    }

    handleReturn = () => {
        this.props.history.push('/search');
    };

    handleSearch = async () => {
        const ref = this.inputRef.current;
        const param = {
            keyword: ref?.value,
            page: 1,
            page_num: 4,
        }
        await doSearch(param);
        this.props.history.push(addAnchor('/searchResult', param));
        this.setState({
            page: 1
        })
    };

    handleUpdate = async () => {
        const param = {
            keyword: this.map.get('keyword'),
            page: this.state.page + 1,
            page_num: 4,
        }
        await doSearch(param);
        this.setState({
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
                    <ul className="content">
                        {
                            store.searchResult.map((content, index) => 
                                <li className="item" key={content.spu_id}>
                                    <CommodityShow2 spuId={content.spu_id} name={content.name} spuPic={content.spu_pic} category={content.category} price={content.price} />
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default SearchResult;