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
        renderItem={
          ({ item }) =>
            (<Item
              title={item.title}
              description={item.description}
              img={item.img}
              imgCart={item.imgCart}
              priceInital={item.price}
              handleClick={handleClickItem}
              id={item.id}
            />)
            }
      />
    );
  }
}
