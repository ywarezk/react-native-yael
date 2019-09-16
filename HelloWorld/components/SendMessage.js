import React from 'react';
import { TextInput, Button } from 'react-native';
import {connect} from 'react-redux';
import {setMessage} from '../redux/actions';

class SendMessage extends React.Component {
    state = {
        messageInput : ''
    }

    // todo
    sendToRecieveComponent = () => {
        this.props.actionToChangeTheMessageInState(this.state.messageInput);
    }

    render() {
        return (
            <>
                <TextInput value={this.state.messageInput} onChangeText={(text) => this.setState({messageInput: text})} />
                <Button title="send message" onPress={this.sendToRecieveComponent} />
            </>
        )
    }
}

export default connect(
    null,
    {
        actionToChangeTheMessageInState: setMessage
    }
)(SendMessage);