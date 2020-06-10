import React, { Component } from 'react';
import { withRouter,RouteComponentProps } from 'react-router-dom';
import ShowSellWell from '../../components/ShowSellWell';
import './index.less';

interface IProps extends RouteComponentProps{
    history:any,
};

class SellWell extends Component<IProps> {

    handleReturn=()=>{
        this.props.history.goBack();
    };

    render() {
        return (
            <div id="sellWell">
                <div className="head">
                    <div className="return-icon" onClick={this.handleReturn}>
                        <div className="icon"></div>
                    </div>
                    <h1 className="title">十八里铺热卖榜</h1>
                </div>
                <div id="wrapper">
                    <ShowSellWell topThree={false} />
                    <div id="bottomBox">
                        <h2>木有更多啦</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SellWell);