import React, { PureComponent } from 'react';
import {
	Alert,
	View,
	Button
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class ListFood extends PureComponent {
	static propTypes = {
		handleClick: PropTypes.any,
		clickSave: PropTypes.func,
	};

	static defaultProps = {
		handleClick: null,
		clickSave: () => {},
	};

	handleClick() {
		const { clickSave } = this.props;
		clickSave();
	}

	render() {
		return (
			<View style={styles.wrapList}>
				<Button
					onPress={this.handleClick}
					title="Save with me"
					color="#3F729B"
				/>
			</View>
		);
	}
}
