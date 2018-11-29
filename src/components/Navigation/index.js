import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const Navigation = React.memo(
    withRouter(({ props }) => {
        return (<div>
            <Link to='/'>
                Home
            </Link>
        </div>);
    })
);

export default Navigation;