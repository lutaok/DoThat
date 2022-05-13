import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  homepage: {
    backgroundColor: '#002C3E',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
  },
  loadingData: {
    flex: 1,
    alignSelf: 'center',
  },
  plusContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 5,
    borderWidth: 1,
    borderColor: '#002C3E',
  },
  plusIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
});

export default globalStyles;
