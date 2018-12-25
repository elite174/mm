import * as React from 'react';
import vis from 'vis';
import { cn } from 'recn';
import { useEffect } from 'react';

import { EMPTY_OBJECT } from '../../constants';

import './MapPage.scss';
import MapPageInput from './Input/Input';

export const cnMapPage = cn('MapPage');

export function MapPage() {

    let map;
    const container = React.createRef<HTMLDivElement>();
    const EMPTY_DATA = {
        edges: [{ from: 1, to: 1 }],
        nodes: [{ id: 1, label: '2' }]
    }

    useEffect(() => {
        if (container.current) {
            map = new vis.Network(container.current, EMPTY_DATA, EMPTY_OBJECT);
        }
        return () => {
            map = null;
        }
    });

    return (
        <div className={cnMapPage()}>
            <div className={cnMapPage('Left')}>
                <MapPageInput addToMap={() => { }} />
                <div className={cnMapPage('Map')} ref={container}></div>
            </div>
            <div className={cnMapPage('Toolbar')}></div>
        </div>
    );
}