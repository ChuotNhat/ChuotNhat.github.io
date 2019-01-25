import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
// data
import data from 'data/listFood';
import data1 from 'data/listJuice';

import assets from 'config/assets';
// component
import Footer from 'containers/MainScreen/components/Footer';
import ListItem from './components/ListItem';
import styles from './styles';

export default class Menu extends PureComponent {
  render() {
    return (
      <View style={styles.wrapMenu}>
        <View style={styles.container}>
          <Text style={styles.title}>{data.title}</Text>
          <ListItem
            dataSource={data.list}
            handleClickItem={this.setModalVisible}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>{data1.title}</Text>
          <ListItem
            dataSource={data1.list}
            handleClickItem={this.setModalVisible}
          />
        </View>
        <Footer
          icon={assets.category}
          title="category"
          info="All"
        />
      </View>
    );
  }
}
