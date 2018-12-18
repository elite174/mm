import * as React from 'react';
import { EMPTY_FUNC, EMPTY_OBJECT } from '../../constants';
import { withMods } from '../../utils';
import './button.css';
import Icon from '../Icon';

interface IButtonProps {
    onClick?: React.MouseEventHandler<HTMLElement>,
    mods?: object,
    icon?: null | String,
    iconIsMaterial?: boolean,
    iconMods?: object,
    caption: String
}

const Button: React.SFC<IButtonProps> = ({
    onClick = EMPTY_FUNC,
    mods = EMPTY_OBJECT,
    icon = null,
    iconIsMaterial = false,
    iconMods = EMPTY_OBJECT,
    caption = ''
}) => {
    return <div
        className={withMods('button', mods)}
        onClick={onClick}>
        {icon && <Icon name={icon} mods={iconMods} material={iconIsMaterial} />}
        {caption}
    </div>
}

export default Button