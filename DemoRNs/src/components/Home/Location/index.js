import React from 'react';
import { View, Text, Picker, TextInput, TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types';
import assets from 'config/assets';
import styles from './styles';

export default class Location extends React.Component {
  static propTypes = {
    clickSearch: PropTypes.func,
    handleOpen: PropTypes.func,
  };

  static defaultProps = {
    clickSearch: () => {},
    handleOpen: () => {},
  };

  state = {
    location: 'London',
    text: '',
  };

  changeText = (text) => {
    this.setState({ text });
  }

  updateLocation = (location) => {
    this.setState({ location });
  };

  handleClick = () => {
    const { clickSearch } = this.props;
    const { location } = this.state;
    clickSearch(location);
  };
  handleFocus = () => {
    const { handleOpen } = this.props;
    const { location } = this.state;
    handleOpen(location);
  };
  render() {
    return (
      <View
        style={styles.overlay}
      >
        <View style={styles.wrapPin}>
          <Image source={assets.pin} style={styles.pin} />
        </View>
        <View style={styles.wrappForm}>
          <Picker
            selectedValue={this.state.location}
            onValueChange={this.updateLocation}
            style={styles.dropdown}
            itemStyle={styles.textDropDown}
            pickerStyleType={{ fontsize: 10 }}
          >
            <Picker.Item label="London" value="london" />
            <Picker.Item label="Singapore" value="singapore" />
            <Picker.Item label="England" value="england" />
          </Picker>
          <TextInput
            style={styles.wrapInput}
            placeholder="Your address"
            underlineColorAndroid="transparent"
            onChangeText={text => this.changeText(text)}
            onFocus={this.handleFocus}
            value={this.state.text}
          />
        </View>
        <TouchableHighlight onPress={this.handleClick}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Search money</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
