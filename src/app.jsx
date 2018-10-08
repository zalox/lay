import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

const app_div = document.getElementById('app');

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    app_div
);

if(module.hot){
    module.hot.accept('./App', () => {
        const NextApp = require('./App');
            ReactDOM.render(
            <AppContainer>
                <App />
            </AppContainer>,
            app_div
        );
    });
}
