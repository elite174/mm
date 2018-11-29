import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/variables.css';
import App from './components/App';
import { HashRouter } from 'react-router-dom';

const Application = <HashRouter>
    <App />
</HashRouter>;

ReactDOM.render(Application, document.getElementById('root'));
