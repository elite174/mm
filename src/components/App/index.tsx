import * as React from 'react';
import { Route } from 'react-router';
import Navigation from '../Navigation';
import MenuPage from '../../pages/MenuPage';
import MapPage from '../../pages/MapPage';
import './app.css';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <div className='content'>
                    <Route path='/' exact component={MenuPage} />
                    <Route path='/map' exact component={MapPage} />
                </div>
            </React.Fragment>
        );
    }
}

export default App;