import React from 'react';
import { connect } from 'react-redux';

import style from './style.css';

let openConnection = () => {
    return dispatch => {
        dispatch(() => connectionOpened(new WebSocket("ws://localhost:3000")));
        return {
            type: 'WS_OPEN_CONNECTION'
        }
    }
};

let connectionOpened = ws => {
    return {
        type: 'WS_CONNECTION_OPENED',
        ws
    }
};


let closenOpened = () => {
    return {
        type: 'WS_CLOSE_CONNECTION',
    }
};


class component_ extends React.Component {

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(openConnection);
    }

    componentWillUnmount(){
        const dispatch = this.props;
        dispatch(closeConnection);
    }

    render() {
        const { state, attempts } = this.props;
        const connection_style = (() => {
            switch(state) {
            case "Connecting":
                return style.status + " " + style.pending;
            case "Connected":
                return style.status + " " + style.success;
            case "Disconnected":
                return style.status + " " + style.error;
            default:
                return "";
            }
        })();
        return (
            <div>
                <p>Status: <span className={connection_style} >{ state }</span></p>
                <p>Connection attempts: <span className={style.status} >{ attempts }</span></p>
            </div>
        );
  }
};

export const component = connect(state => state.websocket)(component_);
