import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import data from 'data/feedback';
import styles from './styles';

const FeedBack = () => (
  <View style={styles.wrapFeed}>
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) =>
        (
          <View style={styles.wrapComment}>
            <Text style={styles.content}>{item.content}</Text>
            <Image source={item.img} style={styles.img} resizeMode="contain" />
          </View>
        )
      }
    />
  </View>
);

export default FeedBack;
