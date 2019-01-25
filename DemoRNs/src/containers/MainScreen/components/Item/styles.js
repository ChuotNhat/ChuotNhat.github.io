import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  products: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    backgroundColor: 'white',
  },

  productImg: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: '#eeeeee',
  },

  productInfor: {
    paddingLeft: 15,
  },

  wrapProductTitle: {
    flexDirection: 'row',
  },

  productTitle: {
    fontWeight: '600',
    fontSize: 15,
  },

  provider: {
    fontSize: 12,
  },

  productTransport: {
    paddingTop: 8,
    paddingLeft: 0,
    flexDirection: 'row',
  },

  textItalic: {
    fontStyle: 'italic',
  },

  textSmall: {
    fontSize: 10,
  },

  wrapIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    width: 10,
    height: 10,
    marginRight: 3,
  },

  textSplit: {
    paddingHorizontal: 15,
  },
});
export default styles;
