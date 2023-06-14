import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image'

export default function DetailsPage({route, navigation}) {
  const { 
    position, 
    team_shield_url, 
    team_name, 
    team_points, 
    victories, 
    ties, 
    defeats
  } = route.params;
  console.log(route.params.team_name);
  return (
    <View style={styles.container}>
       <Image style={styles.shield} source={team_shield_url}/>
      <Text style={styles.name}>{team_name}</Text>
      <Text style={styles.position}> {position} Posição</Text>
      <Text style={styles.pontos}>{team_points} Pontos</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  pontos:{
    fontSize: 40,
    marginTop: 50,

  },
  
  shield: {
    width: 300,
    height: 300,
    top:50,
  },
  name: {
    fontSize: 80,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50,
  },
  position: {
    fontSize: 40,
    
  },

});