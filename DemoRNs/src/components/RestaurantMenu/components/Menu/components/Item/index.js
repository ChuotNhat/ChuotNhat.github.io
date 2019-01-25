import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import assets from 'config/assets';
import Popup from '../Popup';
import styles from './styles';

export default class Item extends Component {
  static propTypes = {
    title: PropTypes.string,
    img: PropTypes.number,
    priceInital: PropTypes.any,
    description: PropTypes.string,
    id: PropTypes.any,
  };

  static defaultProps = {
    title: '',
    img: null,
    priceInital: null,
    description: '',
    id: null,
  };

  state = {
    modalVisible: false,
  };

  setModelDisplay = (notVisible) => {
    this.setState({ modalVisible: notVisible });
  }

  handleClick = () => {
    this.setState({ modalVisible: true });
  };

  render() {
    const {
      title,
      img,
      priceInital,
      description,
      id,
    } = this.props;

    const { modalVisible } = this.state;
    return (
      <View style={styles.products}>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={this.handleClick}
        >
          <Image
            source={img}
            style={styles.productImg}
          />
        </TouchableHighlight>
        <View style={styles.productInfor}>

          <TouchableHighlight
            style={styles.wrapProductTitle}
            underlayColor="transparent"
            onPress={this.handleClick}
          >
            <Text style={styles.productIitle} id={id}>{title}</Text>
          </TouchableHighlight>

          <Text style={styles.textSmall}>{description}</Text>
        </View>
        <View style={styles.addCart}>
          <Text style={[styles.textRed, styles.textPrice]}>{priceInital} $</Text>
          <Image source={assets.cart} style={styles.imgSmall} />
        </View>
        <Popup
          visible={modalVisible}
          hideModal={this.setModelDisplay}
          title={title}
          img={img}
          description={description}
          id={id}
          priceInital={priceInital}
        />
      </View>
    );
  }
}

