import React, { PureComponent } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Item extends PureComponent {
  static propTypes = {
    img: PropTypes.number,
    title: PropTypes.string,
  };

  static defaultProps = {
    img: null,
    title: '',
  };
  render() {
    const {
      img,
      title,
    } = this.props;
    return (
      <View style={styles.listLocation}>
        <Image
          source={img}
          style={styles.img}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}
