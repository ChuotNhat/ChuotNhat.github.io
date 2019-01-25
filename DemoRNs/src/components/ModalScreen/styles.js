import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
    backgroundColor: 'white',
  },

  exitButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },

  imgSmall: {
    height: 20,
    width: 20,
  },

  headerPopup: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },

  textCenter: {
    textAlign: 'center',
  },

  wrapFooter: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
  },
  textRed: {
    color: 'red',
    marginTop: 5,
  },

  btnSubmit: {
    color: 'white',
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  containerItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    paddingVertical: 5,
  },

  wrapInfo: {
    flexDirection: 'column',
  },

  wrapLeft: {
    flexDirection: 'row',
  },

  wrapControl: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn: {
    padding: 10,
  },

  imgCart: {
    height: 40,
    width: 40,
    marginHorizontal: 10,
    marginVertical: 5,
  },

  textNumber: {
    color: 'black',
    fontSize: 13,
  },
});
