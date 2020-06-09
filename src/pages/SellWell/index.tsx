import React, { Component } from 'react';
import './index.less';
import ShowSellWell from '../../components/ShowSellWell';

class SellWell extends Component {

    render() {
        return (
            <div id="sellWell">
                <div id="wrapper">
                    <h1>十八里铺热卖榜</h1>
                    <ShowSellWell topThree={false} />
                    <div id="bottomBox">
                        <h2>木有更多啦</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default SellWell;