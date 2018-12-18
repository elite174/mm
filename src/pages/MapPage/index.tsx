import * as React from 'react';
import './mapPage.css';
import vis from 'vis';
import { EMPTY_OBJECT } from '../../constants';

class MapPage extends React.PureComponent {

    map: any
    container: HTMLElement | null = null;

    EMPTY_DATA = {
        edges: [{ from: 1, to: 1 }],
        nodes: [{ id: 1, label: '2' }]
    }

    componentDidMount() {
        this.map = new vis.Network(this.container, this.EMPTY_DATA, EMPTY_OBJECT);
    }

    componentWillUnmount() {
        this.map = null;
    }

    render() {
        return (<div className='map-page'>
            <div className='map-page__left'>
                <div className='map-page__map' ref={container => this.container = container}></div>
            </div>
            <div className='map-page__toolbar'></div>
        </div>)
    }
}

export default MapPage;