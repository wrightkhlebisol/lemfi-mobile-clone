import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default function TabOneScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* PROFILE SECTION */}
        <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
          <FontAwesome name="user-circle-o" size={25} color="grey" />
          <View style={styles.rowContainer}>
            <FontAwesome name="gift" size={25} color="grey" />
            <Text>Get 10.0 GBP</Text>
            <View>
              <FontAwesome name="bell-o" size={25} color="black" />
            </View>
          </View>
        </View>

        {/* ACCOUNTS SECTION */}
        <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
          <Text>My Accounts</Text>
          <View style={styles.rowContainer}>
            <Text>Hide balance
              <FontAwesome name="eye-slash" color="black"/>
            </Text>
          </View>
        </View>
        {/* BALANCE SECTION */}
        <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
          <View>
            <Text>Flag</Text>
            <Text>NGN</Text>
            <Text>N 0.00 </Text>
          </View>
          <View>
            <FontAwesome name="plus" size={25} color="black" />
            <Text>Tap to add account</Text>
          </View>
        </View>
        {/* ACTION BUTTONS */}
        <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
          <View>
            <Text>Send money</Text>
          </View>
          <View>
            <Text>Add money</Text>
          </View>
            <FontAwesome name='ellipsis-h' size={25}/>
        </View>
      </View>
      <View style={styles.secondHalf}>
        {/* CTA */}
        <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
          <Text>Get started</Text>
          <Text>View all steps</Text>
        </View>
        {/* INVITE SECTION */}
        <View>
          <View style={[styles.rowContainer, { justifyContent: 'space-between' }]}>
            <View>
              <Text>Invite a friend and get £10.00</Text>
              <Text style={{ width: 300}}>
                They sign up and verify their identity.
                They send up to £100.00 and you both get £10.00
              </Text>
            </View>
            <View>
              <FontAwesome name="user-circle-o" size={25} color="black" />
            </View>
          </View>
          <View style={[styles.rowContainer, { justifyContent: 'space-between' }]}>
            <View>
              <Text>Invite Friends</Text>
            </View>
            <View>
              <Text>Dismiss</Text>
            </View>
          </View>
        </View>
        {/* RECIPIENT LIST SECTION */}
        <View style={styles.marginTop}>
          <Text>Send To</Text>
          <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
            <View>
              <View style={styles.rounded}>
                <Text>COO</Text>
                <View style={[styles.rounded, styles.flagStyle]}><Text>Flag</Text></View>
              </View>
              <Text>Caleb O</Text>
              <Text>kuda</Text>
            </View>
            <View>
              <View></View>
              <Text>Caleb O</Text>
              <Text>kuda</Text>
            </View>
            <View>
              <View></View>
              <Text>Caleb O</Text>
              <Text>kuda</Text>
            </View>
          </View>
        </View>
        {/* SERVICES SECTION */}
        <View style={styles.marginTop}>
          <Text>Services</Text>
          <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
            <View>
              <View></View>
              <Text>Caleb O</Text>
              <Text>kuda</Text>
            </View>
            <View>
              <View></View>
              <Text>Caleb O</Text>
              <Text>kuda</Text>
            </View>
            <View>
              <View></View>
              <Text>Caleb O</Text>
              <Text>kuda</Text>
            </View>
          </View>
        </View>
        {/* ACCOUNT INFORMATION SECTION */}
        <View style={styles.marginTop}>
          <Text>Account Information</Text>
          <View style={[styles.rowContainer, {justifyContent: 'space-between', overflow: 'scroll', columnGap: 40}]}>
            <View>
              <View>
                <Text>COO</Text>
              </View>
              <Text>Caleb O</Text>
              <Text>kuda</Text>
            </View>
            <View>
              <View></View>
              <Text>Caleb O</Text>
              <Text>kuda</Text>
            </View>
            <View>
              <View></View>
              <Text>Caleb O</Text>
              <Text>kuda</Text>
            </View>
            <View>
              <View>
                <Text>COO</Text>
              </View>
              <Text>Caleb O</Text>
              <Text>kuda</Text>
            </View>
            <View>
              <View></View>
              <Text>Caleb O</Text>
              <Text>kuda</Text>
            </View>
            <View>
              <View></View>
              <Text>Caleb O</Text>
              <Text>kuda</Text>
            </View>
            <View>
              <View>
                <Text>COO</Text>
              </View>
              <Text>Caleb O</Text>
              <Text>kuda</Text>
            </View>
            <View>
              <View></View>
              <Text>Caleb O</Text>
              <Text>kuda</Text>
            </View>
            <View>
              <View></View>
              <Text>Caleb O</Text>
              <Text>kuda</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  secondHalf: {
    backgroundColor: 'rgb(245 244 242)',
    padding: 20,
  },
  marginTop: {
    marginTop: 20,
  },
  rounded: {
    borderRadius: 50,
    backgroundColor: 'grey',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flagStyle: {
    width: 20,
    height: 20,
    backgroundColor: 'green',
    left: 20,
    top: 10
  },
  rowContainer: {
    flexDirection: 'row',
  },
  textWidth: {
    width: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
