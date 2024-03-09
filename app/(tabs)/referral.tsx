import { Pressable, StyleSheet, View, Text } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default function Referral() {
  return (
    <View
      style={styles.container}
      // lightColor='rgb(85 89 148)'
      // darkColor='rgb(85 89 148)'
    >
      <View>
        <Text>Invite friends</Text>
      </View>
      <View>
        <Text>Image Here</Text>
      </View>
      <View>
        <Text>Invite friends and earn £10.0</Text>
        <Text>
          Invite a friend and you both get GBP 10.0 each when they send over GBP 100.0 to supported countries
        </Text>
      </View>
{/*   */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'rgb(65 66 96)',
        }}
        // lightColor='rgb(9 164 94)'
        // darkColor='rgb(65 66 96)'
      >
        <View>
          <Text>Your referral code</Text>
          <Text>CALEKXXS</Text>
        </View>
        <View>
          <Pressable style={styles.pressable}>
            <Text>Copy</Text>
          </Pressable>
        </View>
      </View>

      <View
      // lightColor='rgb(9 164 94)'
      >
        <Pressable>
          <Text>Invite friends <FontAwesome name='chevron-right' /></Text>
        </Pressable>
        <Text>*Terms and conditions apply</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  pressable: {
    borderRadius: 50,
    padding: 8,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'rgb(65 66 96)',
    color: 'white',
    paddingHorizontal: 24,
    justifyContent: 'space-around',
  },
});
