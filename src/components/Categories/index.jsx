import React, { Component } from 'react'
import { Grid } from 'antd-mobile';
import "./index.less"




class Categories extends Component {

    data = Array.from(new Array(8)).map((_val, i) => ({
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `name${i}`,
    }));

    render() {
        return (
            <div className="categoryBox">
                <Grid data={this.data} hasLine={false} />
            </div>
        )
    }
}

export default Categories;
