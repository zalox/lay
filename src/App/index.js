import React from 'react';

import { component as Ws } from '../WebSocket';

export class component extends React.Component {
    render(props){
        return  <div>
            <h1> lay - toREST </h1>
            <Ws />
            </div>
    }
};

export const reducer = state => {
    return {
        message: "Hello, World",
        title:  "LayToRest"
    };
};
