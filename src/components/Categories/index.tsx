import React, { Component } from 'react'
import { Grid } from 'antd-mobile';
import { store, Category } from '../../store';
import { observer } from 'mobx-react';
import "./index.less"

@observer
class Categories extends Component {
    private data: any;

    constructor (props: any) {
        super(props);
        this.data = store.categories.map((_val, i) => (
            <li className="category-item" key={i}>
                <img className="category-icon" src={_val.iconUrl} alt={_val.name} />
                <div className="category-name">{_val.name}</div>
            </li>
        ));
    }



    render() {
        return (
            <ul className="categoryBox">
                {this.data}
            </ul>
        )
    }
}

export default Categories;
