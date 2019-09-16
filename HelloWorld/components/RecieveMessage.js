import React from 'react';
import { Text } from 'react-native';
import {connect} from 'react-redux';

class RecieveMessage extends React.Component {

    render() {
        return (<Text>{this.props.messageFromRedux}</Text>)
    }
}

export default connect(
    (state) => {
        return {
            messageFromRedux : state.message
        }
    }

)(RecieveMessage);