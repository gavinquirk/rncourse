import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

class PlaceInput extends Component {
  state = {
    placeName: ''
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = place => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder='An awesome place'
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
        <Button
          title='Add'
          style={styles.button}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    width: '70%'
  },
  button: {
    width: '30%'
  }
});

export default PlaceInput;
