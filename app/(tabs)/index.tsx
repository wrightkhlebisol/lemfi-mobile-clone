import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default function TabOneScreen() {
  return (
    <ScrollView>
      <View style={[styles.container, {backgroundColor: '#fff'}]}>
        {/* PROFILE SECTION */}
        <ProfileSection/>
        {/* ACCOUNTS SECTION */}
        <AccountsSection/>
        {/* BALANCE SECTION */}
        <BalanceSection/>
        {/* ACTION BUTTONS */}
        <ActionButtons/>
      </View>
      <View style={styles.secondHalf}>
        {/* CTA */}
        <CTA/>
        {/* INVITE SECTION */}
        <InviteSection/>
        {/* RECIPIENT LIST SECTION */}
        <RecipientListSection/>
        {/* SERVICES SECTION */}
        <ServicesSection/>
        {/* ACCOUNT INFORMATION SECTION */}
        <AccountInformationSection/>
      </View>
    </ScrollView>
  );
}

function ProfileSection() {
  return (
    <View style={[styles.rowContainer, { justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }]}>
      <View style={[styles.rounded, { backgroundColor: 'none', borderWidth: 2, borderColor: '#bbb', width: 45, height: 45 }]}>
        <FontAwesome name="user-o" size={20} color="#555" />
      </View>
      <View style={[styles.rowContainer, {justifyContent: 'space-evenly'}]}>
        <View style={{
          backgroundColor: 'rgb(241 252 244)', borderRadius: 50, padding: 6, flexDirection: 'row', alignItems: 'center', gap: 2
        }}>
          <FontAwesome name="gift" size={22} color='rgb(0 164 95)' fontWeight='500'/>
          <Text style={{ color: 'rgb(0 164 95)', fontWeight: 'bold', fontSize: 12 }}>Get 10.0 GBP</Text>
        </View>
        {/* <View> */}
        {/* </View> */}
      </View>
      <FontAwesome name="bell-o" size={20} color="black" />
    </View>
  )
}

function AccountsSection() { 
  return (
    <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
      <Text style={{fontWeight: 'bold', fontSize: 16, color: '#555'}} >My Accounts</Text>
      <View style={[styles.rowContainer, {gap: 10}]}>
        <Text style={{fontSize: 16, fontWeight: '400', color: '#555'}}>Hide balance
          <FontAwesome name="eye-slash" size={16} color="#555" style={{paddingLeft: 5}}/>
        </Text>
      </View>
    </View>
  )
}

function BalanceSection() {
  return (
    <View style={[styles.rowContainer, {justifyContent: 'space-between', marginVertical: 20, gap: 20}]}>
      <View style={{gap: 15, borderRadius: 20, padding: 20, backgroundColor: '#ddd', width: '50%' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 7}}>
          <View style={[styles.rounded, styles.flagStyle, {width: 30, height: 30}]}>
            <Text>Flag</Text>
          </View>
          <Text style={{fontWeight: '500', fontSize: 15, color: '#777'}}>NGN</Text>
        </View>
        <Text style={{fontWeight: '500', fontSize: 20}}>N 0.00 </Text>
      </View>

      <View style={{ alignItems: 'center', gap: 20, borderStyle: 'dashed', borderColor: 'rgb(179 228 207)', borderWidth: 2, borderRadius: 20, padding: 20, backgroundColor: 'rgb(218, 242, 233)' }}>
        <View style={[styles.rounded, { borderRadius: 50, borderColor: 'rgb(179 228 207)', borderWidth: 1, height: 35, width: 35,backgroundColor: "#fff" }]}>
          <FontAwesome name="plus" size={20} color="rgb(0 164 95)" />
        </View>
        <Text style={{color: '#777', fontWeight: '500', fontSize: 14}}>Tap to add accou...</Text>
      </View>
    </View>
  )
}

function ActionButtons() {
  return (
    <View style={[styles.rowContainer, { justifyContent: 'space-between' }]}>
      <View style={[styles.button, {backgroundColor: 'rgb(0, 143, 83)'}]}>
        <Text style={{color: '#fff', fontWeight: '700'}}>Send money</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonColor}>Add money</Text>
      </View>
      <View style={styles.button}>
        <FontAwesome name='ellipsis-h' size={25}  style={styles.buttonColor}/>
      </View>
    </View>
  )
}
 
function CTA() {
  return (
    <View style={[styles.rowContainer, {justifyContent: 'space-between', paddingBottom: 15}]}>
      <Text style={styles.textContent}>Get started</Text>
      <Text style={[styles.textContent, styles.buttonColor, {fontWeight: '600'}]}>View all steps</Text>
    </View>
  )
}

function InviteSection() {
  return (
    <View style={styles.borderedSection}>
      <View style={[styles.rowContainer, { justifyContent: 'space-between'}]}>
        <View style={{width: '85%', paddingBottom: 2}}>
          <Text style={{ fontWeight: '500', fontSize: 16, paddingBottom: 8, color: "#000" }}>Invite a friend and get £10.00</Text>
          <Text style={{ fontSize: 16, fontWeight: '300', color: '#666', lineHeight: 20}}>
            They sign up and verify their identity.
            They send up to £100.00 and you both get £10.00
          </Text>
        </View>
        <View style={[styles.rounded, {backgroundColor: 'none', borderWidth: 3, borderColor: 'rgb(0, 143, 83)', width: 60, height: 60}]}>
          <FontAwesome name="user-plus" size={27} color="rgb(255, 225, 115)" />
        </View>
      </View>
      <View style={[styles.rowContainer, { justifyContent: 'space-between', marginTop: 10, alignItems: 'center' }]}>
        <Pressable style={[styles.button, { borderWidth: 0, backgroundColor: 'rgb(230, 247, 238)', borderRadius: 60}]} onPress={() => console.log('Invite')}>
          <Text style={[styles.buttonColor, { paddingVertical: 10, paddingHorizontal: 1, fontWeight: '600', fontSize: 15}]}>Invite Friends</Text>
        </Pressable>
        <Pressable>
          <Text style={{color: '#555', verticalAlign: 'middle'}}>Dismiss</Text>
        </Pressable>
      </View>
    </View>
  )
}

function RecipientListSection() {
  return (
    <View style={styles.marginTop}>
      <Text style={styles.textContent}>Send to</Text>
      <View style={[styles.rowContainer, {justifyContent: 'flex-start', paddingTop: 15, gap: 13, height: 135}]}>
        <ContactCard bgColor='rgb(255, 180, 148)'/>
        <ContactCard bgColor='rgb(171, 173, 201)'/>
        <ContactCard bgColor='rgb(146, 219, 232)'/>
        <ContactCard bgColor='rgb(255, 180, 148)'/>
        <ContactCard bgColor='rgb(255, 180, 148)'/>
      </View>
    </View>
  )
}

function ContactCard({bgColor}: {bgColor: string}) {
  return (
    <View style={{
      backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 25, paddingTop: 12, alignItems: 'center', height: '100%'
    }}>
      <View style={[styles.rounded, {backgroundColor: bgColor}]}>
        <Text>COO</Text>
      </View>
      <View style={[
        styles.rounded,
        styles.flagStyle,
        {
          left: 20,
          top: -20,
          width: 27,
          height: 27
        }
      ]}>
        <Text>Fla</Text>
      </View>
      <Text style={{ fontWeight: '500', fontSize: 13, top: -12 }}>Caleb O</Text>
      <Text style={{ fontWeight: '300', fontSize: 12, top: -8 }}>Kuda</Text>
    </View>
  )
}

function ServicesSection() {
  return (
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
  )
}

function AccountInformationSection() {
  return (
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
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  secondHalf: {
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
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(5, 163, 95)',
    padding: 6,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonColor: {
    color: 'rgb(0, 143, 83)',
    fontWeight: '700'
  },
  flagStyle: {
    width: 20,
    height: 20,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'white',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  textWidth: {
    width: 10,
  },
  borderedSection: {
    padding: 18,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  textContent: {
    fontSize: 13,
    fontWeight: '500',
    color: '#666',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
