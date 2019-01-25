import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  footer: {
    padding: 8,
    backgroundColor: 'white',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
  },

  wrapTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },

  title: {
    color: 'red',
    fontSize: 12,
  },

  icon: {
    width: 12,
    height: 12,
    marginRight: 5,
  },

  info: {
    fontSize: 12,
    width: '75%',
  },
});
export default styles;
