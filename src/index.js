import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DailyList from './DailyList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DailyList />, document.getElementById('root'));
registerServiceWorker();
