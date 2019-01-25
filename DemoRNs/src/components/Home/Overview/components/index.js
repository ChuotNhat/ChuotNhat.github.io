import React, { PureComponent } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	Image,
	FlatList,
	ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import assets from 'config/assets';
import styles from './styles';

const dataList = [
	{
		img: assets.iconDrink,
		key: '1',
		name: 'Xăng dầu',
		note: 'đổ xăng',
		price: '40.000 đ'
	},
	{
		img: assets.iconDrink,
		key: '2',
		name: 'Xăng dầu',
		note: 'đổ xăng',
		price: '40.000 đ'
	},
	{
		img: assets.iconDrink,
		key: '3',
		name: 'Xăng dầu',
		note: 'đổ xăng',
		price: '40.000 đ'
	},
	{
		img: assets.iconDrink,
		key: '4',
		name: 'Xăng dầu',
		note: 'đổ xăng',
		price: '40.000 đ'
	}
]

export default class ComponentBox extends PureComponent {
	static propTypes = {
		data: PropTypes.any,
		background: PropTypes.string
	};

	static defaultProps = {
		data: {},
		background: ""
	};

	render() {
		const { background } = this.props;
		return (
			<ScrollView style={{flex: 1, backgroundColor: background }}>
				<View style={styles.container}> 
					<TouchableHighlight>
						<View style={styles.overview}>
							<View>
								<Text style={styles.title}>Tổng quan</Text>
								<Text>Chạm để xem báo cáo đầy đủ</Text>
							</View>
							<Image source={assets.rightArrow} style={styles.imgArrow}/>
						</View>
					</TouchableHighlight>
					<View style={styles.layout}>
						<Text>Tiền vào</Text>
						<Text style={styles.colorBlue}>5.000.000 đ</Text>
					</View>
					<View style={styles.layout}>
						<Text>Tiền ra</Text>
						<Text style={styles.colorRed}>65.000 đ</Text>
					</View>
					<View style={styles.layoutRight}>
						<Text style={styles.textRight}>4.935.000 đ</Text>
					</View>
				</View>

				<View style={styles.container}> 
					<View style={styles.overview}>
						<View style={styles.contentTime}>
							<Text style={styles.textTime}>19</Text>
							<View>
								<Text style={styles.textSmall}>Hôm nay</Text>
								<Text style={styles.textSmall}>Tháng 5, 2018</Text>
							</View>
						</View>

						<View>
							<Text>- 65.000 đ</Text>
						</View>
					</View>
					<FlatList
						data={dataList}
						renderItem={({item}) => 
							<View style={styles.listItem}>
								<View style={styles.contentTime}>
									<Image source={item.img} style={styles.imgIcon}/>
									<View>
										<Text>{item.name}</Text>
										<Text style={styles.textSmall}>{item.note}</Text>
									</View>
								</View>

								<View>
									<Text>{item.price}</Text>
								</View>
							</View>
						}
						/>
				</View>

				<View style={styles.container}> 
					<View style={styles.overview}>
						<View style={styles.contentTime}>
							<Text style={styles.textTime}>19</Text>
							<View>
								<Text style={styles.textSmall}>Hôm nay</Text>
								<Text style={styles.textSmall}>Tháng 5, 2018</Text>
							</View>
						</View>

						<View>
							<Text>- 65.000 đ</Text>
						</View>
					</View>
					<FlatList
						data={dataList}
						renderItem={({item}) => 
							<View style={styles.listItem}>
								<View style={styles.contentTime}>
									<Image source={item.img} style={styles.imgIcon}/>
									<View>
										<Text>{item.name}</Text>
										<Text style={styles.textSmall}>{item.note}</Text>
									</View>
								</View>

								<View>
									<Text style={styles.colorRed}>{item.price}</Text>
								</View>
							</View>
						}
						/>
				</View>

			</ScrollView>
		);
	}
}
