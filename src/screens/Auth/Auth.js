import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <View style={styles.container}>
        <HeadingText>Please Log In</HeadingText>
        <Button title='Switch to Login' />
        <View style={styles.inputContainer}>
          <DefaultInput
            placeholder='Your E-mail Address'
            style={styles.input}
          />
          <DefaultInput placeholder='Password' style={styles.input} />
          <DefaultInput placeholder='Confirm Password' style={styles.input} />
        </View>
        <Button title='Submit' onPress={this.loginHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#bbb'
  }
});

export default AuthScreen;
