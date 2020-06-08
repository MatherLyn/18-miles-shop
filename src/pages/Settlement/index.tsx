import React, { Component } from 'react';

interface IMapProps {
    
}

interface IMapState {
    
}

class Settlement extends Component<IMapProps, IMapState> {
    constructor (props: IMapProps) {
        super(props);
    }

    render () {
        return (<div>
            Settlement page. Hello world.
        </div>);
    }
}

export default Settlement;