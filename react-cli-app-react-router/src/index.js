import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import routes from './routes';
import { AppContainer } from 'react-hot-loader';

// ReactDOM.render(routes, document.getElementById('root'));
ReactDOM.render(
    <AppContainer>
        {routes}
    </AppContainer>,
    document.getElementById('root')
);
if (module.hot) module.hot.accept('./routes', () => {
    ReactDOM.render(
        <AppContainer>
            {routes}
        </AppContainer>,
        document.getElementById('root')
    );
});
registerServiceWorker();