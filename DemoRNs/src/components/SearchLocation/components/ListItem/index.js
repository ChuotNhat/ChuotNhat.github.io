import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import Item from '../Item';

export default class ListItem extends PureComponent {
  static propTypes = {
    dataSource: PropTypes.array,
  };

  static defaultProps = {
    dataSource: [],
  };
  render() {
    const { dataSource } = this.props;
    return (
      <FlatList
        data={dataSource}
        keyExtractor={item => item.title}
        renderItem={
          ({ item }) =>
            (<Item
              img={item.img}
              title={item.title}
            />)
            }
      />
    );
  }
}
