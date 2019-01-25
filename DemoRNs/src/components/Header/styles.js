import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2196f3',
    position: 'absolute',
    top: 25,
    right: 0,
    left: 0,
    height: 40,
  },

  icon: {
    width: 20,
    height: 20,
  },

  iconMenu: {
    marginLeft: 10,
  },

  iconCart: {
    marginRight: 10,
    marginLeft: 5,
  },

  iconLogo: {
    width: 25,
    height: 25,
  },

  iconBack: {
    width: 10,
    height: 20,
    margin: 10,
  },

  wrapBack: {
    display: 'flex',
    flexDirection: 'row',
  },

  wrapCart: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textBack: {
    paddingLeft: 0,
    paddingRight: 10,
    paddingVertical: 10,
  },

  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  textWhite: {
    color: 'white',
  },

  textBig: {
    fontSize: 18,
  },

  textLeft: {
    padding: 10,
  },

  textRight: {
    paddingRight: 10,
  },

  wrapNumberCart: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textCart: {
    color: 'red',
    fontSize: 8,
  },

  hidden: {
    display: 'none',
  },

  blockContainer: {
    display: 'flex',
  },
});
export default styles;
