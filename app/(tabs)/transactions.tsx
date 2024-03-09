import { SectionList, StyleSheet, Text, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default function Transaction() {
  interface Transaction { }
  
  const transactions = [
    {
      title: '22 February 2024',
      data: [
        { to: "Caleb", status: "Successful", amount: '-100.00', amount_ngn: '-215,500.00' },
        { to: "Caleb", status: "Successful", amount: '-100.00', amount_ngn: '-215,500.00' }
      ]
    },
    {
      title: '21 February 2024',
      data: [
        { to: "Caleb", status: "Successful", amount: '-100.00', amount_ngn: '-215,500.00' },
        { to: "Caleb", status: "Successful", amount: '-100.00', amount_ngn: '-215,500.00' }
      ]
    }
  ]

  return (
    <View style={{ flex: 1 }}
    // lightColor='rgb(245 244 242)'
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30 }}>
        <View style={ styles.pill }><Text>Date range</Text></View>
        <View style={ styles.pill }><Text>Status</Text></View>
        <View style={ styles.pill }><Text>Currency</Text></View>
      </View>

      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', borderRadius: 30, paddingHorizontal: 35 }}>
        <SectionList
          sections={transactions}
          // keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 20 }}>
                <View>
                  <FontAwesome name="bank" size={25} color="grey" />
                </View>
                <View style={{ flexGrow: 2}}>
                  <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>To {item.to}</Text>
                    <Text>{item.amount} GBP</Text>
                  </View>
                  <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>{item.status}</Text>
                    <Text>{item.amount_ngn} NGN</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                  marginVertical: 10,
                  height: 1,
                }}
              />
            </>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: 'bold', color: 'grey', paddingVertical: 30 }}>{title}</Text>
          )}
        />
      </View>
    </View>
  );
}

// const Item = ({}) => ()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  pill: {
    backgroundColor: 'lightgrey',
    borderRadius: 50,
    padding: 8,
    paddingHorizontal: 24,
    justifyContent: 'space-around',
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
});
