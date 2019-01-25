import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerPopup: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  exitButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },

  textCenter: {
    textAlign: 'center',
  },

  banner: {
    width: '100%',
    height: 200,
    backgroundColor: '#f2f2f2',
  },
  imgBanner: {
    width: '70%',
    height: 200,
    alignSelf: 'center',
  },

  description: {
    padding: 10,
  },

  textDes: {
    fontSize: 12,
    lineHeight: 18,
  },

  footerPopup: {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  control: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },

  btn: {
    padding: 10,
  },

  cart: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 10,
  },

  textRed: {
    fontWeight: 'bold',
    color: 'red',
  },

  imgSmall: {
    height: 20,
    width: 20,
  },

  imgCart: {
    height: 15,
    width: 15,
    margin: 5,
  },

  textPadding: {
    paddingRight: 10,
  },

  textNumber: {
    color: 'black',
    fontSize: 13,
  },
});
export default styles;
