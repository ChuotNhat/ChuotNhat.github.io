import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapInfor: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  wrapList: {
    backgroundColor: '#eeeeee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },

  textLeft: {
    color: 'black',
    fontSize: 12,
  },

  textRight: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 12,
  },

  wrapDescription: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
  },

  inforMore: {
    padding: 10,
    fontSize: 13,
    lineHeight: 20,
  },

  icon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },

  infoLeft: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default styles;
