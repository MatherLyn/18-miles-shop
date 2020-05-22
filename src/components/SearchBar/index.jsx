import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import searchIcon from './images/search.svg'
import "./index.less"

class ISearchBar extends Component {
  render() {
    return (
      <div id="searchBar">
        <div className="name">十八里铺</div>
        <Button 
        className="searchBox" onClick={()=>this.props.jumpTo()}
        icon={<img src={searchIcon} alt="" />}></Button>
      </div>
    );
  }
}

export default ISearchBar;
