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
import 

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <NativeRouter>
                {/* <View>
                  <Link to="/login"><Text>Login</Text></Link>
                  <Link to="/"><Text>Home</Text></Link>
                </View> */}
                {/* <>
                  <Route exact path="/" component={FailingTodo} />
                  <Route path="/login" component={Login} />
                  {/* <FailingTodo /> */}
                  {/* <Hello message={"hello from the parent component"} /> */}
                // </> */}
        </NativeRouter>

      </Provider>
      
      
    );
  }
}


// export default class H1Alexandra extends Component {
//   render() {
//     return (
//       <Text style={ {fontSize: 20} }>{this.props.children}</Text>
//     )
//   }
// }

