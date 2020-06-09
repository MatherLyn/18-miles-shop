import React, { Component } from 'react';
import { store } from '../../store';
import CommodityShow3 from '../../components/CommodityShow3';
import './index.less';

interface IProps{
    history:any,

};
interface IState{

};
class SearchResult extends Component<IProps,IState> {
    constructor(props:IProps){
        super(props);
    }

    handleReturn = () => {
        this.props.history.goBack();

    };
    handleSearch = () => {

    };
    render() {
        return (
            <div className="search-result">
                <div className="search-box">
                    <div className="return-icon" onClick={this.handleReturn}>
                        <div className="icon"></div>
                    </div>
                    <input type="text" placeholder="想找点啥？" />
                    <div className="confirm-search" onClick={this.handleSearch}>搜索</div>
                </div>
                <div className="wrapper">
                    {
                        store.searchResult.map((content,index)=>(
                            <CommodityShow3 key={index} index={index} tag={content.tag} name={content.name} price={content.price} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default SearchResult;