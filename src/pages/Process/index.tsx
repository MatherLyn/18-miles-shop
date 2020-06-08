import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Tabs } from 'element-react';
import './index.less';

interface IProps extends RouteComponentProps {

}

interface IState {

}

class Process extends Component<IProps, IState> {
    private curDisplay: string = '1';

    constructor(props: IProps) {
        super(props);
        this.curDisplay = window.location.hash.slice(1, window.location.hash.length);
    }

    changeTab = (tab: string) => {
        window.location.hash = tab;
    }

    handleReturn = () => {
        this.props.history.push('/profile');
    };

    handleSearch = () => {
        //获取输入框中的内容后进行发送查询请求
        console.log("查询");
    };

    render() {
        return (<div className="process-page">
            <div className="process-header">
                <div id="searchBox">
                    <div className="return-icon" onClick={this.handleReturn}>
                        <div className="icon"></div>
                    </div>
                    <input type="text" placeholder="想找点啥？"/>
                    <div id="confirmSearch" onClick={this.handleSearch}>搜索</div>
                </div>
            </div>
            <div className="process-body">
                <Tabs activeName={this.curDisplay} onTabClick={(tab: any) => this.changeTab(tab.props.name)}>
                    <Tabs.Pane label="待付款" name="1">待付款</Tabs.Pane>
                    <Tabs.Pane label="待发货" name="2">待发货</Tabs.Pane>
                    <Tabs.Pane label="待收货" name="3">待收货</Tabs.Pane>
                    <Tabs.Pane label="待评价" name="4">待评价</Tabs.Pane>
                </Tabs>
            </div>

        </div>);
    }
}

export default withRouter(Process);