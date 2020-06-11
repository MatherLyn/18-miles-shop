import React, { Component } from 'react';
import { store } from '../../store';
import { observer } from 'mobx-react';
import './index.less';

interface IProps {
    focusIndex: number
    handleClick: Function
}

interface IState {
}

@observer
class Menu extends Component<IProps, IState> {

    render() {
        return (
            <div id="menuBox">
                <div id="menu">
                    {
                        store.tabs.map((content, index) => (
                            <span key={content.id} className={`tab${this.props.focusIndex === index ? ' tabFocus' : ''}`}
                            style={{color:this.props.focusIndex === index ? 'rgb(237, 71, 33)' : '#000'}}
                             onClick={() => this.props.handleClick(index, content.id)}>
                                {content.name}
                            </span>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Menu;