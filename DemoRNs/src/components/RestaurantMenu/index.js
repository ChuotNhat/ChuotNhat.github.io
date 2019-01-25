import React, { PureComponent } from 'react';
import {
  View,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import assets from 'config/assets';
// component
import Banner from './components/Banner';
import Menu from './components/Menu';
import FeedBack from './components/FeedBack';
import Information from './components/Information';
// styles
import styles from './styles';
import Tabs from './components/Tabs';

export default class RestaurantMenu extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
  };

  static defaultProps = {
    name: '',
    description: '',
  };
  render() {
    const { name, description } = this.props;
    return (
      <ImageBackground
        source={assets.bannerDetail}
        resizeMode="cover"
        style={styles.wrapBackground}
      >
        <View style={styles.wrapOverlay}>
          <Banner
            style={styles.wrapBanner}
            name={name}
            description={description}
          />
          <View style={styles.wrapTabView}>
            <Tabs>
              <Menu title="Menu" />
              <FeedBack title="Feedback" />
              <Information title="Information" />
            </Tabs>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
