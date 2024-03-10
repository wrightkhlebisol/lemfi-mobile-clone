import { StyleSheet, Text, View } from 'react-native';
import Separator from '@/components/Separator';

import { FontAwesome } from '@expo/vector-icons';
type IconName = keyof typeof FontAwesome.glyphMap;
import { IconProps } from '@expo/vector-icons/build/createIconSet';

export default function Help() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help and Support</Text>
      <View style={styles.helpSupport}>
        <HelpSection
          leftIcon='book'
          rightIcon='chevron-right'
          heading='Help Center'
          lightText='Fast answers to all of the most common questions.' />
        
        <Separator />
        
        <HelpSection
          leftIcon='user'
          rightIcon='chevron-right'
          heading='Report general account issues'
          lightText='Chat with our team of experts' />
      </View>
    </View>
  );
}

function HelpSection({
    leftIcon, rightIcon, heading, lightText }: {
    leftIcon: IconProps<IconName>['name'],
    rightIcon: IconProps<IconName>['name'],
    heading: string,
    lightText: string
  }) {
  return (
    <View style={{ flexDirection: 'row', gap: 15 }}>
      <FontAwesome name={leftIcon} size={20} color="grey" />
      <View style={styles.content}>
        <Text style={styles.heading3}>{heading}</Text>
        <Text style={styles.lightText}>{lightText}</Text>
      </View>
      <FontAwesome name={rightIcon} style={styles.chevron} />
    </View>
  )
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

  helpSupport: {
    padding: 20,
    margin: 5,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  heading3: {
    fontSize: 16,
    fontWeight: '600',
  },

  lightText: {
    fontSize: 16,
    color: 'grey',
  },

  chevron: {
    alignSelf: 'center',
    fontSize: 15,
    color: "#bbb",
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 5,
  },
});
