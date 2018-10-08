const init =  {
      ws: null,
      attempts: 0,
      state: "Disconnected",
      onopen: event => console.log(event),
      onclose: event => console.log(event),
      onmessage: event => console.log(event),
      onerror: event => console.log(event),
};

export const reducer = (state = init, action) => {
    switch(action.type) {
    case 'WS_OPEN_CONNECTION':
        action.ws.onmessage = state.onmessage;
        action.ws.close = state.onclose;
        action.ws.onopen = state.onopen;
        action.ws.onerror = state.onerror;
        return {
            state: "Connecting",
            attempts: attempts + 1,
            ws: action.ws,
            ...state
        };
    case 'WS_CONNECTION_OPENED':
        return {
            state: "Connected",
            ...state
        }
    case 'WS_CLOSE_CONNECTION':
        return {
            ws: null,
            state: "Disconnected",
            attempts: 0,
            ...state
        };
    default:        
        return state;
    };
    return state;
};
