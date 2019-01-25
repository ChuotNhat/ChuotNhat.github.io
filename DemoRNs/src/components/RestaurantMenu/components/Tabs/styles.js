import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  tabView: {
    flexDirection: 'row',
    width: '94%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
  },

  tabContainer: {
    flex: 1,
  },

  tabBorderRight: {
    borderRightWidth: 1,
    borderRightColor: 'red',
  },

  tabRadiusLeft: {
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },

  tabRadiusRight: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },

  tabActive: {
    backgroundColor: 'red',
  },

  text: {
    color: 'red',
    paddingVertical: 10,
    textAlign: 'center',
  },

  textActive: {
    color: 'white',
  },

  content: {
    flex: 1,
  },
});
