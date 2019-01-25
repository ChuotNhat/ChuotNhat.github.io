import React, { PureComponent } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import assets from 'config/assets';
import dataCart from 'data/demoListProductCart';
import styles from './styles';
import Item from './components/Item';


export default class ModalScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.any,
  };

  static defaultProps = {
    navigation: {},

  };
  state = {
    totalPrice: 0,
    refresh: false,
    listItem: JSON.parse(JSON.stringify(dataCart)).map((item) => {
      item.number = 1; // eslint-disable-line no-param-reassign
      return item;
    }),
  }

  onIncrease = (item) => {
    const { listItem } = this.state;

    listItem.map((list) => {
      if (list.id === item.id) {
        list.number += 1; // eslint-disable-line no-param-reassign
      }
      return list;
    });
    this.setState({ listItem, refresh: !this.state.refresh });
  }
  onDecrease = (item) => {
    const { listItem } = this.state;
    listItem.map((list) => {
      if (list.id === item.id) {
        if (list.number === 1) {
          list.number = 1; // eslint-disable-line no-param-reassign
        } else {
          list.number -= 1; // eslint-disable-line no-param-reassign
        }
      }
      return list;
    });
    this.setState({ listItem, refresh: !this.state.refresh });
  }
  render() {
    const {
      totalPrice,
      listItem,
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerPopup} >
          <Text style={styles.textCenter}>Cart</Text>
        </View>

        <View style={styles.exitButton}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => this.props.navigation.goBack()}
          >
            <Image source={assets.exit} style={styles.imgSmall} />
          </TouchableHighlight>
        </View>

        <FlatList
          data={listItem}
          keyExtractor={item => item.id}
          extraData={this.state.refresh}
          renderItem={({ item }) => (
            <Item
              item={item}
              onIncrease={this.onIncrease}
              onDecrease={this.onDecrease}
            />
            )}
        />

        <View style={styles.wrapFooter}>
          <View>
            <Text>Total price</Text>
            <Text style={styles.textRed}>{totalPrice} $</Text>
          </View>

          <View>
            <TouchableHighlight>
              <Text style={styles.btnSubmit}>Order Now</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
