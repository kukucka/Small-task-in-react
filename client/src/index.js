import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './main.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
