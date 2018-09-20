import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Import Semantic UI and Font-awesome
import 'semantic-ui-css/semantic.min.css';
import 'font-awesome/css/font-awesome.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
