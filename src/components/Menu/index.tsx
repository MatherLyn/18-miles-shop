import React, { Component } from 'react';
import { store } from '../../store';
import { observer } from 'mobx-react';
import './index.less';

interface IMapProps {
    focusIndex: number
    handleClick: Function
}

interface IMapState {
}

@observer
class Menu extends Component<IMapProps, IMapState> {
    

    render() {
        return (
            <div id="menuBox">
                <div id="menu">
                    {
                        store.tabs.map((content, index) => (
                            <span key={index} className={`tab${this.props.focusIndex === index ? ' tabFocus' : ''}`} onClick={() => this.props.handleClick(index)}>
                                {content}
                            </span>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Menu;