import * as React from 'react';
import { EMPTY_FUNC, EMPTY_OBJECT } from '../../constants';
import './button.scss';
import Icon from '../Icon';
import { cn } from 'recn';

const cnButton = cn('Button');

interface IButtonProps {
    onClick?: React.MouseEventHandler<HTMLElement>,
    mods?: any,
    icon?: null | String,
    iconIsMaterial?: boolean,
    iconMods?: object,
    caption: String
}

const Button: React.SFC<IButtonProps> = ({
    onClick = EMPTY_FUNC,
    mods = EMPTY_OBJECT,
    iconMods = EMPTY_OBJECT,
    icon,
    iconIsMaterial = false,
    caption
}) => {
    return (
        <div
            className={cnButton(Object.assign(mods, { withIcon: !!icon }))}
            onClick={onClick}>
            {icon && <Icon name={icon} mods={iconMods} material={iconIsMaterial} />}
            {caption}
        </div>
    );
}

export default Button