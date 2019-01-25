import React from 'react';
import { StatusBar, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
// image
import assets from 'config/assets';
// Data
import data from 'data/listMainScreen';
// Component
import Header from 'components/Header';
import ListFood from './ListFood';
import Location from './Location';
import Overview from './Overview';
// Style

import styles from './styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: ({ navigation }) =>
      (<Header
        isSearch={false}
        isBack={false}
        onMenu={() => navigation.navigate('modal')}
        onToCart={() => navigation.navigate('modal')}
      />),
  };

  static propTypes = {
    navigation: PropTypes.any,
  };

  static defaultProps = {
    navigation: {},
  };

  openScreen = (name) => {
    this.props.navigation.navigate('detail', { name });
  };

  openScreenSearch = (location) => {
    this.props.navigation.navigate('search', { location });
  };
  render() {
    return (
      <ImageBackground
        source={assets.banner}
        style={styles.wrapBackground}
      >
        <StatusBar
          backgroundColor="#2196f3"
          translucent={true}
          style={styles.wrapOverlay}
        />
		<Overview/>
      </ImageBackground>
    );
  }
}
