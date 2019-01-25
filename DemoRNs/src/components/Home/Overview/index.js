import React, { PureComponent } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import PropTypes from 'prop-types';
import styles from './styles';
import ComponentBox from './components';

const FirstRoute = () => (
	<ComponentBox background='transparent' />
);
const SecondRoute = () => (
	<ComponentBox background='transparent' />
);
const ThirdRoute = () => (
	<ComponentBox background='transparent' />
);

const initialLayout = {
	height: 0,
	width: Dimensions.get('window').width,
	backgroundColor: 'red'
  };
export default class Overview extends PureComponent {
	static propTypes = {
	};

	static defaultProps = {
	};
	state = {
		index: 0,
		routes: [
			{ key: 'one', title: 'Tháng trước' },
			{ key: 'two', title: 'Tháng này' },
			{ key: 'three', title: 'Tương lai' }
		],
	};

	render() {
		return (
			<TabView
				style={styles.tabview}
				navigationState={this.state}
				renderScene={SceneMap({
					one: FirstRoute,
					two: SecondRoute,
					three: ThirdRoute
				})}
				onIndexChange={index => this.setState({ index })}
				initialLayout={initialLayout}
			/>
		);
	}
}


