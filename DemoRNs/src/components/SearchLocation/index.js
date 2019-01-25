import * as React from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  FlatList,
} from 'react-native';

import PropTypes from 'prop-types';
// data
import data from 'data/listAvailable';
import dataLocation from 'data/listAddress';
// asset
import assets from 'config/assets';
// component
import Header from 'components/Header';
import ListItem from './components/ListItem';
import AddressItem from './components/AddressItem';
// styles
import styles from './styles';

export default class SearchLocation extends React.Component {
  static navigationOptions = {
    header: ({ navigation }) =>
      (<Header
        isSearch={true}
        isBack={false}
        onCancel={() => navigation.goBack(null)}
      />),
  };

  static propTypes = {
    navigation: PropTypes.any,
  };

  static defaultProps = {
    navigation: null,
  };

  state = {
    text: '',
  }

  openScreen = (address, location) => {
    this.props.navigation.navigate('main', { address, location });
  };

  render() {
    return (
      <View style={styles.wrapSearch}>
        <ImageBackground
          source={assets.banner}
          style={styles.backGround}
        >
          <TextInput
            style={styles.wrapInput}
            placeholder="Your address"
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </ImageBackground>

        <View style={styles.wrapList}>
          <ListItem
            dataSource={data}
          />
          <FlatList
            data={dataLocation}
            keyExtractor={item => item.key}
            renderItem={({ item }) =>
              (<AddressItem
                handleClick={this.openScreen}
                address={item.address}
                location={item.location}
              />)
            }
          />
        </View>
      </View>
    );
  }
}
