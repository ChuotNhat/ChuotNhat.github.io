import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import RestaurantMenu from 'components/RestaurantMenu';
import Header from 'components/Header';

export default class DetailsScreen extends PureComponent {
  static navigationOptions = {
    header: ({ navigation }) =>
      (<Header
        isSearch={false}
        isBack={true}
        onBack={() => navigation.goBack(null)}
        onToCart={() => navigation.navigate('modal')}
      />),
  };

  static propTypes = {
    navigation: PropTypes.any,
  };

  static defaultProps = {
    navigation: null,
  }

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', '');
    return (
      <View style={{ flex: 1 }}>
        <RestaurantMenu
          name={name}
          description="Healthy food"
        />
      </View>
    );
  }
}
