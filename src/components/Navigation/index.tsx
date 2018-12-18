import * as React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import './navigation.scss';
import { cn } from 'recn';

const cnNavigation = cn('Navigation');

const Navigation = withRouter(({ location }) => {
    return <div className={cnNavigation()}>
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
            className={cnNavigation('Item', { active: location.pathname === route.path })}
            to={route.path}>
            {route.text}</Link>)}
    </div>
});

export default Navigation;