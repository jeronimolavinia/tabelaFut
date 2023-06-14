import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Table from '../components/table';


export default function HomePage({navigation}) {
  return (
    <View style={styles.container}>
      <Table navigation={navigation}/>
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
