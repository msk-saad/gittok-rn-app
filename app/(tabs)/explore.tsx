import { StyleSheet, Image, Platform } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
      <Image />
      <ThemedText type='title'>GitTok</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({  
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 70,
    padding: 20,
  },
});
