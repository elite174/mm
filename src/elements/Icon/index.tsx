import * as React from 'react';
import './icon.css';
import { EMPTY_OBJECT } from '../../constants';
import { withMods } from '../../utils';

const Icon = ({ name, material = false, mods = EMPTY_OBJECT }) => {
    return <div className={withMods('icon', mods)}>
        <ion-icon name={`${material ? 'md' : 'ios'}-${name}`} />
    </div>
}

export default Icon;