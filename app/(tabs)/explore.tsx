import { StyleSheet, Image, Platform } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { FontAwesome } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function Explore() {

  const theme = useColorScheme() ?? 'light';
  const iconColor = theme === 'dark' ? '#ffffff' : '#000000';

  return (
    <ThemedView style={styles.NavContainer}>
      <FontAwesome name='github' size={35} color={iconColor} style={styles.gittokImage} />
      <ThemedText type='title'>GitTok</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({  
  NavContainer: {         // Navbar
    flexDirection: 'row',
    gap: 8,
    marginTop: 70,
    padding: 20,
    backgroundColor: 'transparent',
    position: 'fixed',
  },
  gittokImage: {
    tintColor: '#000000',
    marginTop: -7,
    marginRight: 3,
    backgroundColor: 'transparent',
  }
});
