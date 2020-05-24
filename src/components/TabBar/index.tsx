import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import homeIcon from './images/home.svg'
import homeSelectedIcon from './images/homeSelected.svg'
import sortIcon from './images/sort.svg'
import sortSelectedIcon from './images/sortSelected.svg'
import shoppingCartIcon from './images/shoppingCart.svg'
import shoppingCartSelectedIcon from './images/shoppingCartSelected.svg'
import meIcon from './images/me.svg'
import meSelectedIcon from './images/meSelected.svg'
import './index.css'


interface IMapProps {

}

interface IMapState {
  selectedTab: string;
  hidden: boolean;
  fullScreen: boolean;
  homeBadge: string;
  sortBadge: string;
  shoppingCartBadge: string;
  meBadge: string;
  homeDot: boolean;
  sortDot: boolean;
  shoppingCartDot: boolean;
  meDot: boolean;

}

class ITabBar extends Component<IMapProps, IMapState> {
  constructor(props: IMapProps) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
      fullScreen: false,
      homeBadge: '1',
      sortBadge: 'new',
      shoppingCartBadge: '',
      meBadge: '',
      homeDot: false,
      sortDot: false,
      shoppingCartDot: true,
      meDot: false,
    };
  }

  renderTab = (router: string) => {
      window.location.href = `localhost:3000/${router}`;
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
            badge={this.state.homeBadge}
            dot={this.state.homeDot}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
            data-seed="logId"
          >
            {(e: Event) => this.renderTab('home')}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: sortIcon }}
            selectedIcon={{ uri: sortSelectedIcon }}
            title="分类"
            key="sort"
            badge={this.state.sortBadge}
            dot={this.state.sortDot}
            selected={this.state.selectedTab === 'sort'}
            onPress={() => {
              this.setState({
                selectedTab: 'sort',
              });
            }}
            data-seed="logId1"
          >
            {(e: Event) => this.renderTab('sort')}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: shoppingCartIcon }}
            selectedIcon={{ uri: shoppingCartSelectedIcon }}
            title="购物车"
            key="shoppingCart"
            badge={this.state.shoppingCartBadge}
            dot={this.state.shoppingCartDot}
            selected={this.state.selectedTab === 'shoppingCart'}
            onPress={() => {
              this.setState({
                selectedTab: 'shoppingCart',
              });
            }}
          >
            {(e: Event) => this.renderTab('Life')}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: meIcon }}
            selectedIcon={{ uri: meSelectedIcon }}
            title="我的"
            key="me"
            badge={this.state.meBadge}
            dot={this.state.meDot}
            selected={this.state.selectedTab === 'me'}
            onPress={() => {
              this.setState({
                selectedTab: 'me',
              });
            }}
          >
            {(e: Event) => this.renderTab('Life')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default ITabBar;