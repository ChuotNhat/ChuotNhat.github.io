import React, { PureComponent } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import assets from 'config/assets';
import styles from './styles';

export default class HeaderMain extends PureComponent {
  static propTypes = {
    location: PropTypes.string,
    address: PropTypes.string,
  };

  static defaultProps = {
    location: '',
    address: '',
  };
  render() {
    const { location, address } = this.props;
    return (
      <View style={styles.header_location}>
        <Image
          source={assets.location}
          style={styles.icon}
          resizeMode="cover"
        />
        <View style={styles.textCenter}>
          <Text style={styles.title}>{`${location}`.toUpperCase()}</Text>
          <Text numberOfLines={1} style={styles.info}>{`${address}`.toUpperCase()}</Text>
        </View>
        <Image
          source={assets.pen}
          style={styles.icon}
          resizeMode="cover"
        />
      </View>
    );
  }
}
