import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import TabBar from './components/TabBar';
import routes from './routes';
import { renderRoutes } from 'react-router-config';
import './App.css';
import { getUserProfile } from './cgi';
import { store } from './store';

interface IProps {

}

interface IState {

}

class App extends Component<IProps, IState> {

    render() {
        return (
            <BrowserRouter basename="18-miles-shop-bundle/build/">
                {renderRoutes(routes)}
                <TabBar />
            </BrowserRouter>
        )
    }
}

export default App;