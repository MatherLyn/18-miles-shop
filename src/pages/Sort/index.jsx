import React, { Component } from 'react'
import SearchBar from '../../components/SearchBar'
import TabBar from '../../components/TabBar'
import './index.less';

class Sort extends Component {

    render() {
        return (
            <div id="sort">
                <SearchBar />
                <div id="wrapper">
                    
                </div>
                <TabBar />
            </div>
        );
    }
}

export default Sort;