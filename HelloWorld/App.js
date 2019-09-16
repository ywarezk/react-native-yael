/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, {Component} from 'react';
import {Hello} from './components/Hello';
import FailingTodo from './components/Todo';
import Login from './components/Login';
import { NativeRouter, Route, Link } from 'react-router-native';
import { View, Text} from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import SendMessage from './components/SendMessage';
import RecieveMessage from './components/RecieveMessage';



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SendMessage />

        <RecieveMessage />
        

      </Provider>
    );
  }
}