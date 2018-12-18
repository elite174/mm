import * as React from 'react';
import './icon.css';
import { EMPTY_OBJECT } from '../../constants';
import { cn } from 'recn';

const cnIcon = cn('Icon');

const Icon = ({ name, material = false, mods = EMPTY_OBJECT }) => {
    return <div className={cnIcon(mods)}>
        <ion-icon name={`${material ? 'md' : 'ios'}-${name}`} />
    </div>
}

export default Icon;