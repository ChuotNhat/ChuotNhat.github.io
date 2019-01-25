import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Banner extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
  };

  static defaultProps = {
    name: '',
    description: '',
  };
  render() {
    const { name, description } = this.props;
    return (
      <View style={styles.wrapBanner}>
        <Text style={[styles.white, styles.textBig]}>{`${name}`.toUpperCase()}</Text>
        <Text style={styles.white}>{description}</Text>
      </View>
    );
  }
}
