import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapFeed: {
    flex: 1,
    backgroundColor: '#eeeeee',
    padding: 10,
    marginTop: 10,
  },

  wrapComment: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
    borderRadius: 10,
    minHeight: 60,
  },

  img: {
    flex: 1,
    width: 20,
    height: 20,
    marginRight: 10,
  },

  content: {
    flex: 8,
    fontSize: 12,
    padding: 10,
  },
});

export default styles;
