/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, {Component} from 'react';
import {Hello} from './components/Hello';

export default class App extends Component {
  render() {
    return (
      <Hello message={"hello from the parent component"} />
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

