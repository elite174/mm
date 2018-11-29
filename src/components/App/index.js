import React from 'react';
import { Route } from 'react-router';
import Navigation from '../Navigation';
import MenuPage from '../../pages/MenuPage';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <React.Fragment>
                    <Route path='/' exact component={MenuPage} />
                </React.Fragment>
            </React.Fragment>
        );
    }
}

export default App;