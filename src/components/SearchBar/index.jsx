import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import searchIcon from './images/search.svg'

import "./index.less"
import { withRouter } from 'react-router-dom';

class ISearchBar extends Component {
    backHome = () => {
        return this.props.history.push('/');
    }

    jumpTo = () => {
        return this.props.history.push('/search');
    }

    render() {
        return (
            <div id="searchBar">
                <div className="name" onClick={this.backHome}>十八里铺</div>
                <Button
                    className="searchBox" onClick={this.jumpTo}
                    icon={<img src={searchIcon} alt="" />}></Button>
            </div>
        );
    }
}

export default withRouter(ISearchBar);
