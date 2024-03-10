import { View, StyleSheet } from 'react-native';

export default function Separator() {
  {/* // lightColor="#eee"
      // darkColor="rgba(255,255,255,0.1)" */}
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 20,
    height: 1,
    backgroundColor: '#ddd',
    width: '100%',
  },
});