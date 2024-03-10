import { SectionList, StyleSheet, Text, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default function Transaction() {
  interface Transaction { }
  
  const transactions = [
    {
      date: '22 February 2024',
      data: [
        { to: "Caleb Ogundiya Olus...", status: "Successful", amount: '-100.00', amount_ngn: '-215,500.00' },
        { to: "Caleb", status: "Successful", amount: '-100.00', amount_ngn: '-215,500.00' }
      ]
    },
    {
      date: '21 February 2024',
      data: [
        { to: "Caleb Ogundiya Olus...", status: "Successful", amount: '-100.00', amount_ngn: '-215,500.00' },
        { to: "Caleb Ogundiya Olus...", status: "Failed", amount: '-100.00', amount_ngn: '-215,500.00' }
      ]
    },
    {
      date: '21 February 2024',
      data: [
        { to: "Caleb Ogundiya Olus...", status: "Successful", amount: '-100.00', amount_ngn: '-215,500.00' },
        { to: "Caleb Ogundiya Olus...", status: "Successful", amount: '-100.00', amount_ngn: '-215,500.00' }
      ]
    },
    {
      date: '21 February 2024',
      data: [
        { to: "Caleb Ogundiya Olus...", status: "Failed", amount: '-100.00', amount_ngn: '-215,500.00' },
        { to: "Caleb Ogundiya Olus...", status: "Successful", amount: '-100.00', amount_ngn: '-215,500.00' }
      ]
    },
    {
      date: '21 February 2024',
      data: [
        { to: "Caleb Ogundiya Olus...", status: "Successful", amount: '-100.00', amount_ngn: '-215,500.00' },
        { to: "Caleb Ogundiya Olus...", status: "Failed", amount: '-100.00', amount_ngn: '-215,500.00' }
      ]
    },
    {
      date: '21 February 2024',
      data: [
        { to: "Caleb Ogundiya Olus...", status: "Successful", amount: '-100.00', amount_ngn: '-215,500.00' },
        { to: "Caleb Ogundiya Olus...", status: "Successful", amount: '-100.00', amount_ngn: '-215,500.00' }
      ]
    }
  ]

  return (
    <View style={{ flex: 1 }}
    // lightColor='rgb(245 244 242)'
    >
      <View style={styles.pills}>
        <View style={ styles.pill }><Text style={{ fontWeight: '400', fontSize: 16 }}>Date range</Text></View>
        <View style={ styles.pill }><Text style={{ fontWeight: '400', fontSize: 16 }}>Status</Text></View>
        <View style={ styles.pill }><Text style={{ fontWeight: '400', fontSize: 16 }}>Currency</Text></View>
      </View>

      <View style={styles.transactions}>
        <SectionList
          sections={transactions}
          // keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 20 }}>
                <View style={styles.cirleContainer}>
                  <FontAwesome name="bank" size={15} color="rgb(49 177 115)" />
                </View>
                <View style={{ flexGrow: 2, gap: 12}}>
                  <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16}}>To {item.to}</Text>
                    <Text style={{ fontWeight: '500', fontSize: 16}}>{item.amount} GBP</Text>
                  </View>
                  <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {/* rgb(255 76 73), rgb(245 223 223) -> red*/}
                    <View style={[{ backgroundColor: 'rgb(241 252 244)', borderRadius: 3, padding: 3}]}>
                      <Text style={{ color: "rgb(49 177 115)", fontSize: 14}}>{item.status}</Text>
                    </View>
                    <Text style={{ color: '#999' }}>{item.amount_ngn} NGN</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: '#ddd',
                  borderBottomWidth: 1,
                  marginVertical: 10,
                  height: 1,
                }}
              />
            </>
          )}
          renderSectionHeader={({ section: { date } }) => (
            <Text style={styles.date}>{date}</Text>
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
  pills: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
  pill: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 8,
    paddingHorizontal: 24,
    justifyContent: 'space-around',
  },
  date: {
    fontSize: 17,
    fontWeight: '400',
    paddingTop: 30,
    paddingBottom: 10,
    paddingVertical: 30,
    color: '#aaa',
    backgroundColor: '#fff',
  },
  transactions: {
    flex: 1,
    paddingHorizontal: 35,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
  },
  cirleContainer: {
    backgroundColor: 'rgb(241 252 244)',
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 36,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
