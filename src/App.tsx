import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';

interface IMapProps {
    
}

interface IMapState {
    
}

class App extends Component<IMapProps, IMapState> {
    constructor (props: IMapProps) {
      super(props);
    }

    render () {
        return (
            <BrowserRouter> 
                <Switch>
                    <Route path='/login' component={Login}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;