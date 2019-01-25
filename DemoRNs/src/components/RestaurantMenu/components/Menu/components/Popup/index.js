import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import assets from 'config/assets';
import styles from './styles';

export default class Popup extends Component {
  static propTypes = {
    title: PropTypes.string,
    img: PropTypes.number,
    description: PropTypes.any,
    visible: PropTypes.bool,
    hideModal: PropTypes.func,
    priceInital: PropTypes.any,
  };

  static defaultProps = {
    title: '',
    img: null,
    description: '',
    visible: false,
    priceInital: 0,
    hideModal: () => {},
  };

  state = {
    number: 1,
    price: this.props.priceInital,
  }

  onDecrease = () => {
    const { number } = this.state;
    const { priceInital } = this.props;

    if (number <= 1) {
      this.setState({ number: 1 });
      this.setState({ price: priceInital });
    } else {
      const newNumber = this.state.number - 1;
      this.setState({
        number: newNumber,
        price: (priceInital * newNumber).toFixed(2),
      });
    }
  }

  onIncrease = () => {
    const { priceInital } = this.props;
    const newNumber = this.state.number + 1;
    this.setState({
      number: newNumber,
      price: (priceInital * newNumber).toFixed(2),
    });
  }

  hideModal = () => {
    const { hideModal, visible, priceInital } = this.props;
    this.setState({ price: priceInital, number: 1 });
    hideModal(!visible);
  }

  render() {
    const {
      title, img, description, visible,
    } = this.props;
    const { number, price } = this.state;
    return (
      <View style={{ opacity: visible ? 1 : 0 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={visible}
          onRequestClose={() => {}}
        >
          <View style={styles.container}>
            <View style={styles.exitButton}>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={this.hideModal}
              >
                <Image source={assets.exit} style={styles.imgSmall} />
              </TouchableHighlight>

            </View>
            <View style={styles.headerPopup} >
              <Text style={styles.textCenter}>{title}</Text>
            </View>
            <View style={styles.banner}>
              <Image source={img} style={styles.imgBanner} resizeMode="cover" />
            </View>
            <View style={styles.description}>
              <Text style={styles.textDes}>{description}</Text>
            </View>
            <View style={styles.footerPopup}>
              <View style={styles.control}>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={this.onDecrease}
                  style={styles.btn}
                >
                  <Text style={styles.textRed}>-</Text>
                </TouchableHighlight>
                <Text style={styles.textNumber}>{number}</Text>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={this.onIncrease}
                  style={styles.btn}
                >
                  <Text style={styles.textRed}>+</Text>
                </TouchableHighlight>

              </View>
              <View style={styles.cart}>
                <Image source={assets.cart} style={styles.imgCart} />
                <Text style={[styles.textRed, styles.textPadding]} >{price}</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
