import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import homeIcon from './images/home.svg'
import homeSelectedIcon from './images/homeSelected.svg'
import sortIcon from './images/sort.svg'
import sortSelectedIcon from './images/sortSelected.svg'
import shoppingCartIcon from './images/shoppingCart.svg'
import shoppingCartSelectedIcon from './images/shoppingCartSelected.svg'
import profileIcon from './images/profile.svg'
import profileSelectedIcon from './images/profileSelected.svg'
import { getRoute } from '../../util';
import './index.css'


interface IProps extends RouteComponentProps {
    
}

interface IState {
    selectedTab: string;
    hidden: boolean;
}

class ITabBar extends Component<IProps, IState> {
    private show: Array<string> = ['home', 'sort', 'shoppingCart', 'profile'];
    constructor(props: IProps) {
        super(props);
        const route: string = getRoute();
        if (!route) {
            this.state = {
                selectedTab: route,
                hidden: true
            }
            return;
        }
        this.state = {
            selectedTab: route,
            hidden: this.show.indexOf(route) === -1 ? true : false,
        };
    }

    componentWillReceiveProps(nextProps: any) {
        const route: string = getRoute();
        if (!route) {
            this.setState({
                selectedTab: route,
                hidden: true
            });
            return;
        }
        this.setState({
            hidden: this.show.indexOf(route) === -1 ? true : false
        })
    }

    renderTab = (route: string) => {
        this.props.history.push(`/${route}`);
        route = route ? route : 'home';
        this.setState({
            selectedTab: route,
            hidden: this.show.indexOf(route) === -1 ? true : false
        })
    }

    render() {
        return (
            <div className="tabBar">
                <TabBar
                    unselectedTintColor="#bfbfbf"
                    tintColor="#C65624"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={{ uri: homeIcon }}
                        selectedIcon={{ uri: homeSelectedIcon }}
                        selected={this.state.selectedTab === 'home'}
                        onPress={() => this.renderTab('')}
                    ></TabBar.Item>
                    <TabBar.Item
                        title="分类"
                        key="sort"
                        icon={{ uri: sortIcon }}
                        selected={this.state.selectedTab === 'sort'}
                        selectedIcon={{ uri: sortSelectedIcon }}
                        onPress={() => this.renderTab('sort')}
                    ></TabBar.Item>
                    <TabBar.Item
                        title="购物车"
                        key="shoppingCart"
                        icon={{ uri: shoppingCartIcon }}
                        selectedIcon={{ uri: shoppingCartSelectedIcon }}
                        selected={this.state.selectedTab === 'shoppingCart'}
                        onPress={() => this.renderTab('shoppingCart')}
                    ></TabBar.Item>
                    <TabBar.Item
                        title="我的"
                        key="profile"
                        icon={{ uri: profileIcon }}
                        selectedIcon={{ uri: profileSelectedIcon }}
                        selected={this.state.selectedTab === 'profile'}
                        onPress={() => this.renderTab('profile')}
                    ></TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default withRouter(ITabBar);