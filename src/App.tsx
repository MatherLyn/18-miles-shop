import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import ITabBar from './components/TabBar';
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
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login} />
                    <ITabBar />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;