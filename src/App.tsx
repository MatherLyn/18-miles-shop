import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Search from './pages/Search';
import SellWell from './pages/SellWell';
import Sort from './pages/Sort';
import ShoppingCart from './pages/ShoppingCart';
import Profile from './pages/Profile';
import TabBar from './components/TabBar';
import './App.css';

interface IMapProps {

}

interface IMapState {
    selectedTab: string;
    fullScreen: boolean;
}

class App extends Component<IMapProps, IMapState> {
    constructor(props: IMapProps) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            fullScreen: false,
        };
    }

    render() {
        return (
            <>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/login' component={Login} />
                        <Route path='/register' component={Register} />
                        <Route path='/search' component={Search} />
                        <Route path='/sellwell' component={SellWell} />
                        <Route path='/sort' component={Sort} />
                        <Route path='/shoppingcart' component={ShoppingCart} />
                        <Route path='/profile' component={Profile} />
                    </Switch>
                    <TabBar />
                </BrowserRouter>
            </>
        )
    }
}

export default App;