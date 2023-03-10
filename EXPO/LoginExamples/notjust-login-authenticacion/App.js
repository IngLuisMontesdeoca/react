import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './context/AuthContext';
import Navigation from './src/navigation';

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.root}>
        <Navigation></Navigation>
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F0FBFC'
  },
});
