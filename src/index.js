import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import store from './store';
import Root from './root';

const render = Component => {
    ReactDOM.render(
            <AppContainer>
              <Component store={store} />
            </AppContainer>
            , document.getElementById(document_node)
    );
}

const document_node = 'lay';

render(Root);

if(module.hot){
    module.hot.accept('./root', () => {
        render(Root);
    });
}
