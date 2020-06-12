import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Tabs } from 'element-react';
import { store } from '../../store';
import './index.less';
import CommodityTab from '../../components/CommodityTab';
import { doSearch, addAnchor } from '../../util';
import { getOrderList } from '../../cgi';

interface IProps extends RouteComponentProps {

}

interface IState {

}

class Process extends Component<IProps, IState> {
    private curDisplay: string = '1';
    private inputRef: React.RefObject<HTMLInputElement> = React.createRef();

    constructor(props: IProps) {
        super(props);
        this.curDisplay = window.location.hash.slice(1, window.location.hash.length);
        this.getOrder();
    }

    getOrder = async () => {
        const res = await getOrderList();
        if (res.data.errcode === 0) {
            store.order = res.data.data;
            this.setState({});
        }
    }

    changeTab = (tab: string) => {
        window.location.hash = tab;
    }

    handleReturn = () => {
        this.props.history.push('/profile');
    };

    handleSearch = async () => {
        const ref = this.inputRef.current;
        const param = {
            keyword: ref?.value,
            page: 1,
            page_num: 8
        }
        if (!param.keyword) {
            return;
        }
        this.props.history.push(addAnchor('/searchResult', param));
    };

    render() {
        return (<div className="process-page">
            <div className="process-header" style={{
                zIndex: 1
            }}>
                <div id="searchBox">
                    <div className="return-icon" onClick={this.handleReturn}>
                        <div className="icon"></div>
                    </div>
                    <input type="text" placeholder="想找点啥？" ref={this.inputRef} />
                    <div id="confirmSearch" onClick={this.handleSearch}>搜索</div>
                </div>
            </div>
            <div className="process-body">
                <Tabs activeName={this.curDisplay} onTabClick={(tab: any) => this.changeTab(tab.props.name)}>
                    <Tabs.Pane label="全部" name="1">
                        <div className="wrapper">
                            {
                                // @ts-ignore
                                store.order.map((item, index) => <CommodityTab key={item.id} {...item}></CommodityTab>)
                            }
                        </div>
                    </Tabs.Pane>
                    <Tabs.Pane label="待付款" name="2">
                        <div className="wrapper">
                            {
                                // @ts-ignore
                                store.order.filter(item => item.status === 0).map((item, index) => <CommodityTab key={item.id} {...item}></CommodityTab>)
                            }
                        </div>
                    </Tabs.Pane>
                    <Tabs.Pane label="待发货" name="3">
                        <div className="wrapper">
                            {
                                // @ts-ignore
                                store.order.filter(item => item.status === 1).map((item, index) => <CommodityTab key={item.id} {...item}></CommodityTab>)
                            }
                        </div>
                    </Tabs.Pane>
                    <Tabs.Pane label="待收货" name="4">
                        <div className="wrapper">
                            {
                                // @ts-ignore
                                store.order.filter(item => item.status === 2).map((item, index) => <CommodityTab key={item.id} {...item}></CommodityTab>)
                            }
                        </div>
                    </Tabs.Pane>
                    <Tabs.Pane label="待评价" name="5">
                        <div className="wrapper">
                            {
                                // @ts-ignore
                                store.order.filter(item => item.status === 3).map((item, index) => <CommodityTab key={item.id} {...item}></CommodityTab>)
                            }
                        </div>
                    </Tabs.Pane>
                </Tabs>
            </div>

        </div>);
    }
}

export default withRouter(Process);