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
        <Text style={[styles.textColor, {fontWeight: '700', fontSize: 25}]}>Invite friends</Text>
      </View>
      <View>
        <Text style={styles.textColor}>Image Here</Text>
      </View>
      <View style={{alignItems: 'center', gap: 20}}>
        <Text style={[styles.textColor, {fontWeight: '600', fontSize: 25}]}>Invite friends and earn £10.0</Text>
        <Text style={[styles.textColor, {textAlign: 'center', fontSize: 17}]}>
          Invite a friend and you both get GBP 10.0 each when they send over GBP 100.0 to supported countries
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'rgb(65 66 96)',
            padding: 20,
            borderRadius: 10,
            width: '100%',
            alignItems: 'center',
            margin: 10,
          }}
          // lightColor='rgb(9 164 94)'
          // darkColor='rgb(65 66 96)'
        >
          <View style={{gap: 4}}>
            <Text style={[styles.textColor, {fontSize: 17}]}>Your referral code</Text>
            <Text style={[styles.textColor, {fontSize: 25}]}>CALEKXXS</Text>
          </View>
          <View>
            <Pressable style={styles.pressable}>
              <Text style={styles.textColor}>Copy</Text>
            </Pressable>
          </View>
        </View>
        <View
          // lightColor='rgb(9 164 94)'
          style={{width: '100%', gap: 5, alignItems: 'center'}}
        >
          <Pressable style={{justifyContent: 'space-around', backgroundColor: 'rgb(9 164 94)', padding: 25, borderRadius: 20, width: '100%', }}>
            <Text style={[styles.textColor, {fontSize: 20, fontWeight: '600'}]}>Invite friends <FontAwesome name='chevron-right' /></Text>
          </Pressable>
          <Text style={styles.textColor}>*Terms and conditions apply</Text>
        </View>
      </View>
{/*   */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(85 89 148)',
    padding: 30,
    gap: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textColor: {
    color: 'white',
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
