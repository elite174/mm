import * as React from 'react';
import { useState } from 'react';

import Button from '../../../elements/Button';
import { cnMapPage } from '../MapPage';

import './Input.scss';

interface IMapPageInputProps {
    addToMap: (value: string) => void;
}

function MapPageInput(props: IMapPageInputProps) {
    const [value, setValue] = useState('');

    return (
        <div className={cnMapPage('Input')}>
            <input type='text' placeholder='add word'
                className={cnMapPage('InputElem')}
                value={value}
                onChange={e => setValue(e.target.value)}></input>
            <Button onClick={() => props.addToMap(value)} icon='add' caption='Добавить' />
        </div>
    );
}

export default MapPageInput;