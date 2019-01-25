import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import assets from 'config/assets';
import styles from './styles';

export default class Item extends Component {
  static propTypes = {
    name: PropTypes.string,
    img: PropTypes.number,
    time: PropTypes.string,
    price: PropTypes.number,
    providers: PropTypes.string,
    transpot: PropTypes.string,
    handleClick: PropTypes.func,
    id: PropTypes.string,
  };

  static defaultProps = {
    name: '',
    img: null,
    time: '',
    price: 0,
    providers: '',
    transpot: '',
    handleClick: () => {},
    id: '',
  };
  handleClick = () => {
    const { handleClick, id, name } = this.props;
    handleClick(id, name);
  }
  render() {
    const {
      name,
      img,
      time,
      price,
      providers,
      transpot,
    } = this.props;
    return (
      <View style={styles.products}>
        <TouchableHighlight
          onPress={this.handleClick}
          underlayColor="transparent"
        >
          <Image
            source={img}
            style={styles.productImg}
          />
        </TouchableHighlight>
        <View style={styles.productInfor}>

          <TouchableHighlight
            style={styles.wrapProductTitle}
            onPress={this.handleClick}
            underlayColor="transparent"
          >
            <Text style={styles.productTitle}>{name}</Text>
          </TouchableHighlight>

          <Text style={styles.provider}>{providers}</Text>

          <View style={styles.productTransport}>

            <View style={styles.wrapIcon}>
              <Image
                source={assets.delivery}
                style={styles.icon}
              />
              <Text style={styles.textItalic}>{transpot}</Text>
            </View>
            <Text style={styles.textSplit}>|</Text>
            <View style={styles.wrapIcon}>
              <Image
                source={assets.clock}
                style={styles.icon}
              />
              <Text style={styles.textItalic}> {time}</Text>
            </View>
            <Text style={styles.textSplit}>|</Text>
            <View style={styles.wrapIcon}>
              <Image
                source={assets.cartDetail}
                style={styles.icon}
              />
              <Text style={styles.textItalic}>
                <Text style={styles.textSmall}>MIN</Text>
                ${price}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
