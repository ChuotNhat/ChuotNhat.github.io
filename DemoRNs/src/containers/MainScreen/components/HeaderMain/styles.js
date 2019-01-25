import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header_location: {
    justifyContent: 'space-between',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    height: 50,
  },

  icon: {
    width: 20,
    height: 20,
  },

  textCenter: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  title: {
    fontSize: 11,
    color: 'red',
  },
  info: {
    color: 'black',
    fontSize: 13,
  },
});
