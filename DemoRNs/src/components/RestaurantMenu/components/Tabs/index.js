import React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.array,
  };

  static defaultProps = {
    children: {},
  };
  state={
    activeTab: 0,
  }
  render() {
    const { children } = this.props;
    const { activeTab } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.tabView}>
          { children.map((items, index) =>
            (
              <TouchableHighlight
                key={items.props.title}
                onPress={() => this.setState({ activeTab: index })}
                style={[
                  styles.tabContainer,
                  index === activeTab ? styles.tabActive : [],
                  index !== 2 ? styles.tabBorderRight : [],
                  (index === 0 && activeTab === 0) ? styles.tabRadiusLeft : [],
                  (index === 2 && activeTab === 2) ? styles.tabRadiusRight : [],
                ]}
              >
                <Text style={[
                    styles.text,
                    index === activeTab ? styles.textActive : [],
                  ]}
                >
                  {items.props.title}
                </Text>
              </TouchableHighlight>
            ))}
        </View>
        <View style={styles.content}>{children[this.state.activeTab]}</View>
      </View>
    );
  }
}
