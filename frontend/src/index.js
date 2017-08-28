import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import Store from './store';
import 'bootstrap/dist/css/bootstrap.css';

const StoreInstance = Store();

ReactDOM.render(
<Provider store={StoreInstance}>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
