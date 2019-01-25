import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class AddressItem extends React.Component {
  static propTypes = {
    location: PropTypes.string,
    address: PropTypes.string,
    handleClick: PropTypes.func,
  };

  static defaultProps = {
    location: '',
    address: '',
    handleClick: () => {},
  };
  handleClick = () => {
    const { location, address, handleClick } = this.props;
    handleClick(address, location);
  }
  render() {
    const { location, address } = this.props;
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={this.handleClick}
        style={styles.item}
      >
        <Text style={styles.textAddress}>{address}, {location}</Text>
      </TouchableHighlight>
    );
  }
}
