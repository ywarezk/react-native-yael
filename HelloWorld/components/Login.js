import React from 'react';
import { TextInput, View, Button } from 'react-native';
import { Route } from 'react-router-native';

export default class Login extends React.Component {
    state = {
        email : '',
        password: 'hello'
    }

    somethingChanged = (text, field) => {
        this.setState({
            [field]: text
        })
    }

    emailChanged = (text) => {
        this.setState({
            email: text
        })
    }

    passwordChanged = (text) => {
        this.setState({
            password: text
        })
    }

    login = () => {
        alert(`email: ${this.state.email} password: ${this.state.password}`)
    }

    render() {
        return (
            <View>
                <TextInput 
                    style={ {borderColor: 'black', borderWidth: 2} }
                    value={this.state.email}
                    onChangeText={(text) => this.somethingChanged(text, 'email')}
                />
                <TextInput 
                    style={ {borderColor: 'black', borderWidth: 2} }
                    value={this.state.password}
                    onChangeText={(text) => this.somethingChanged(text, 'password')}
                />
                <Button title="Login" onPress={this.login} />

                {/* <Route>  */}
            </View>
        )
    }
}