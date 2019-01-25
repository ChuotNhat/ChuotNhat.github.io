import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import assets from 'config/assets';
import data from 'data/listMainScreen';
// component
import Header from 'components/Header';
import ListItem from './components/ListItem';
import HeaderMain from './components/HeaderMain';
import Footer from './components/Footer';

export default class MainScreen extends React.Component {
  static navigationOptions = {
    header: ({ navigation }) =>
      (<Header
        onMenu={() => navigation.navigate('modal')}
        onToCart={() => navigation.navigate('modal')}
      />),
  };
  static propTypes = {
    navigation: PropTypes.any,
  };

  static defaultProps = {
    navigation: null,
  };

  openScreen = (id, name) => {
    this.props.navigation.navigate('detail', { id, name });
  };

  render() {
    const { navigation } = this.props;
    const location = navigation.getParam('location', '');
    const address = navigation.getParam('address', '');
    return (
      <View style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        marginTop: 65,
        }}
      >
        <HeaderMain
          location={location}
          address={address}
        />
        <ListItem
          handleClickItem={this.openScreen}
          dataSource={data.list}
        />
        <Footer
          icon={assets.category}
          title="kitchen"
          info="Italian, Japanese, Healthy food Italian, Japanese, Healthy food Italian, Japanese, Healthy food"
        />
      </View>
    );
  }
}
