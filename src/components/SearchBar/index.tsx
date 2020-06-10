import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import searchIcon from './images/search.svg';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import "./index.less";

interface IProps extends RouteComponentProps {

}

interface IState {
    selectedTab: string;
    hidden: boolean;
}


class ISearchBar extends Component<IProps, IState> {
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
                    icon={<img src={searchIcon} alt="" />}>
                </Button>
            </div>
        );
    }
}

export default withRouter(ISearchBar);
