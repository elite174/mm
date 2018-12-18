import * as React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import './navigation.css';
import { withMods } from '../../utils';

const Navigation = withRouter(({ location }) => {
    return <div className='navigation'>
        {[
            {
                path: '/',
                text: 'Home'
            },
            {
                path: '/map',
                text: 'Map'
            }
        ].map(route => <Link key={route.path}
            className={withMods('navigation__item', { active: location.pathname === route.path })}
            to={route.path}>
            {route.text}</Link>)}
    </div>
});

export default Navigation;