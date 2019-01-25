import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: '#ffffff',
		marginBottom: 15
	},
	overview: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 0.5,
		borderBottomColor: '#808080',
		paddingBottom: 10
	},
	title: {
		fontSize: 16,
		color: '#000000'
	},
	imgArrow: {
		width: 15,
		height: 20
	},
	layout: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 5
	},
	colorBlue: {
		color: '#2ee4ef'
	},
	colorRed: {
		color: '#ea0538'
	},
	layoutRight: {
		justifyContent: 'flex-end',
		flexDirection: 'row',
	},
	textRight: {
		borderTopWidth: 0.5,
		borderTopColor: '#808080',
		paddingTop: 5,
		marginTop: 5,
		fontSize: 16,
		color: '#000000'
	},
	contentTime: {
		flexDirection: 'row',
	},
	textTime: {
		fontSize: 24,
		color: '#000',
		paddingRight: 5
	},
	textSmall: {
		fontSize: 12
	},
	listItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 5
	},
	contentTime: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	imgIcon: {
		marginRight: 5
	}
});
export default styles;
