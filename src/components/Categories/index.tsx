import React, { Component } from 'react';
import { store } from '../../store';
import icon1 from './image/1.png';
import icon2 from './image/2.png';
import icon3 from './image/3.png';
import icon4 from './image/4.png';
import icon5 from './image/5.png';
import icon6 from './image/6.png';
import icon7 from './image/7.png';
import icon8 from './image/8.png';
import { doSearch, addAnchor } from '../../util';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import "./index.less";

interface IProps extends RouteComponentProps {

}

interface IState {

}

class Categories extends Component<IProps, IState> {
    private iconUrl: Array<string> = [
        icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8
    ]
    
    private handleClick = async (categoryId: number) => {
        const param = {
            category_id: categoryId
        }
        await doSearch(param);
        this.props.history.push(addAnchor('/searchResult', param));
    }

    render() {
        return (
            <ul className="categoryBox">
                {store.tabs.slice(0, 8).map((content, index) => (
                    <li className="category-item" key={content.id} onClick={e => this.handleClick(content.id)}>
                        <img className="category-icon" src={this.iconUrl[index]} alt={content.name} />
                        <div className="category-name">{content.name}</div>
                    </li>
                ))}
            </ul>
        )
    }
}

export default withRouter(Categories);
