import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TabBar from './components/TabBar';
import { Provider } from 'mobx-react';
import { store } from './store';
import routes from './routes';
import { renderRoutes } from 'react-router-config';
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
            <Provider store={store}>
                <BrowserRouter>
                    {renderRoutes(routes)}
                    <TabBar />
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;