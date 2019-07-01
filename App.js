import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place} />
    ));

    return (
      <View style={styles.container}>
        {/* INSIDE MAIN VIEW */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder='An awesome place'
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button
            title='Add'
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>{placesOutput}</View>
        <View />
        {/* END INSIDE MAIN VIEW */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});
