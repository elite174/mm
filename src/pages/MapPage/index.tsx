import * as React from 'react';
import './mapPage.scss';
import vis from 'vis';
import { EMPTY_OBJECT } from '../../constants';
import { cn } from 'recn';

export const cnMapPage = cn('MapPage');

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
        return (<div className={cnMapPage()}>
            <div className={cnMapPage('Left')}>
                <div className={cnMapPage('Map')} ref={container => this.container = container}></div>
            </div>
            <div className={cnMapPage('Toolbar')}></div>
        </div>)
    }
}

export default MapPage;