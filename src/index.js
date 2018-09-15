import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './app/layout/App'


const root = document.getElementById('root');
let render = () => {
    ReactDOM.render({hello}, root );
}

if ( module.hot ){
    module.hot.accept('./app/layout/App',() => {
        setTimeout(render)
    })
}

render();

registerServiceWorker();
