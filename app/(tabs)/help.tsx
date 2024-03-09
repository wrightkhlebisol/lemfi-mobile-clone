import { StyleSheet, Text, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default function Help() {
  return (
    <View style={styles.container}
    // lightColor='rgb(245 244 242)'
    >
      <Text style={styles.title}>Help and Support</Text>
      <View style={styles.helpSupport}>
        <View style={{ flexDirection: 'row', gap: 15 }}>
          <FontAwesome name="book" size={20} color="grey" />
          <View>
            <Text>Help Center</Text>
            <Text>Fast answers to all of the most common questions.</Text>
          </View>
        </View>
        <View style={styles.separator}
          // lightColor="#eee"
          // darkColor="rgba(255,255,255,0.1)"
        ></View>
        <View style={{ flexDirection: 'row', gap: 15 }}>
          <FontAwesome name="book" size={20} color="grey" />
          <View>
            <Text>Help Center</Text>
            <Text>Fast answers to all of the most common questions.</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
  },
  helpSupport: {
    padding: 20,
    margin: 5,
    marginVertical: 20,
    borderRadius: 10,
  },
});
