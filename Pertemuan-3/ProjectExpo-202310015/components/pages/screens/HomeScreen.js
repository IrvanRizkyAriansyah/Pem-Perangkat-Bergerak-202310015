import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text>HomeScreen</Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});