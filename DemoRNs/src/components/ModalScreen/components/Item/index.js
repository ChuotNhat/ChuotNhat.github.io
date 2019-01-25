import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object,
    onDecrease: PropTypes.func,
    onIncrease: PropTypes.func,
  };

  static defaultProps = {
    item: {},
    onDecrease: () => {},
    onIncrease: () => {},
  };

  onDecrease = () => {
    const { onDecrease, item } = this.props;
    onDecrease(item);
  }

  onIncrease = () => {
    const { onIncrease, item } = this.props;
    onIncrease(item);
  }

  render() {
    const {
      item,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.wrapLeft}>
          <Image style={styles.imgCart} source={item.img} />
          <View style={styles.wrapInfo}>
            <Text>{item.title}</Text>
            <Text style={styles.textRed}>{item.price} $</Text>
          </View>
        </View>

        <View style={styles.wrapControl}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={this.onDecrease}
            style={styles.btn}
          >
            <Text style={styles.textRed}>-</Text>
          </TouchableHighlight>

          <Text style={styles.textNumber}>{item.number}</Text>

          <TouchableHighlight
            underlayColor="transparent"
            onPress={this.onIncrease}
            style={styles.btn}
          >
            <Text style={styles.textRed}>+</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
