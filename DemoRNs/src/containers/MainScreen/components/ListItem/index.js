import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Item from '../Item';

export default class ListItem extends PureComponent {
  static propTypes = {
    dataSource: PropTypes.array,
    handleClickItem: PropTypes.any,
  };

  static defaultProps = {
    dataSource: [],
    handleClickItem: null,
  };
  render() {
    const { dataSource, handleClickItem } = this.props;
    return (
      <FlatList
        data={dataSource}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          (<Item
            id={item.id}
            handleClick={handleClickItem}
            name={item.name}
            img={item.img}
            time={item.time}
            price={item.price}
            providers={item.providers}
            transpot={item.transpot}
          />)
        }
      />
    );
  }
}
