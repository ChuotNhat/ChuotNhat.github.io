import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
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

  textRed: {
    color: 'red',
    marginTop: 5,
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
export default styles;
