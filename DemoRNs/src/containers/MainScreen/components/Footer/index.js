import React, { PureComponent } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Header extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.number,
    info: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    icon: null,
    info: '',
  };
  render() {
    const { icon, title, info } = this.props;
    return (
      <View style={styles.footer}>
        <View style={styles.wrapTitle}>
          <Image
            source={icon}
            style={styles.icon}
          />
          <Text style={styles.title}>{`${title}`.toUpperCase()}</Text>
        </View>
        <Text numberOfLines={1} style={styles.info}>{info}</Text>
      </View>
    );
  }
}
