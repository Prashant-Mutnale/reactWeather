import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View
  } from 'react-native';

  class Searchinput extends Component {
      constructor(props) {
          super(props);
          this.state = {  }
      }
      render() { 
          return ( 
            <TextInput
           onChangeText={this.props.onchangecity}
           onSubmitEditing= {this.props.city}
            style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 0}}
/>
           )
      }
  }
   
  export default Searchinput;