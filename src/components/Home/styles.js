import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  textView: {flex: 1, flexDirection: 'row'},
  titleText: {fontSize: 18, fontWeight: 'bold'},
  valueText: {fontSize: 16},
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
  },
  separator: {height: 1, backgroundColor: 'grey'},
});
