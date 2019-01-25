import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import assets from 'config/assets';
import data from 'data/information';
import styles from './styles';

const Information = () => (
  <View style={styles.wrapInfor}>
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          (
            <View style={styles.wrapList}>
              <View style={styles.infoLeft}>
                <Image source={assets.info} style={styles.icon} />
                <Text style={styles.textLeft}>{item.infor}</Text>
              </View>
              <Text style={styles.textRight}>{item.content}</Text>
            </View>
          )
        }
      />
    </View>
    <View>
      <Text style={styles.inforMore}>FlatList
        More performant compared to ListView.
        ListView rendering can get slow once the number of items grows larger.
        FlatList significantly improves memory usage and efficiency
        especially for large or complex lists
        while also significantly simplifying the props — no
        more dataSource necessary!
      </Text>
    </View>
  </View>
);
export default Information;
