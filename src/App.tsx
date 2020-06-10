import React, { Component } from 'react';
import { BrowserRouter, withRouter, RouteComponentProps } from 'react-router-dom';

import TabBar from './components/TabBar';
import { Provider } from 'mobx-react';
import { store } from './store';
import routes from './routes';
import { renderRoutes } from 'react-router-config';
import './App.css';

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