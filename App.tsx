import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TeamEntity from './src/components/teamentity';
import Table from './src/components/table';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tabela do Brasileirão</Text>
      <Table/>
      <StatusBar style="auto" />
    </View>
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
