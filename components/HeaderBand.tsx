import { View, Text, StyleSheet } from 'react-native';

const HeaderBand = () => {
  return (
    <View style={headerband.container}>
      <Text style={headerband.title}>Do That!</Text>
    </View>
  );
};

export default HeaderBand;

const headerband = StyleSheet.create({
  container: {
    backgroundColor: '#F7444E',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
  },
  title: {
    color: '#002C3E',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
