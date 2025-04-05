import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Profile() {
  return (
    <ThemedView style={styles.NavContainer}>
      <ThemedText type='title'>Hi, Saad <HelloWave /></ThemedText>
      
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  NavContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 70,
    padding: 20,
    backgroundColor: 'transparent',
    position: 'fixed',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
