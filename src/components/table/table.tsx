import react, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import TeamComponent from '../teams'
import { Image } from 'expo-image'


export default function Table() {
  const [teams, setTeam] = useState<TeamComponent[]>([]);


  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer test_2d6a35cfcb7c41a923e4146efe9cce");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders
    };

    let teamsPosition: TeamComponent[] = [];

    fetch("https://api.api-futebol.com.br/v1/campeonatos/10/tabela", requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then(dataJson => {
        dataJson.map((team) => {

          const dataTeam = {
            id: team['time']['time_id'],
            position: team['posicao'],
            team_shield_url: team['time']['escudo'],
            team_name: team['time']['nome_popular'],
            team_points: team['pontos'],
            victories:team['vitorias'] ,
            ties: team['empates'],
            defeats: team['derrotas']

          };

          teamsPosition.push(dataTeam);
        });
        setTeam(teamsPosition);
        console.log(teamsPosition);
      })
      .catch(error => console.log('error', error));
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BRASILEIRÃO</Text>
      <View style={styles.table}>
        <FlatList
          data={teams}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(team) =>
            <View style={styles.item}>
              <Image style={styles.team_shield} source={team.item.team_shield_url} />
              <Text style={styles.team_position}>{team.item.position}</Text>
              <Text style={styles.team_name}>{team.item.team_name}</Text>
              <Text style={styles.team_position}>{team.item.team_points}</Text>
              <Text style={styles.team_position}>{team.item.victories}</Text>
              <Text style={styles.team_position}>{team.item.ties}</Text>
              <Text style={styles.team_position}>{team.item.defeats}</Text>

            </View>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 10
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 16,
    color: '#df9000'
  },
  table: {
    flex: 1,
    width: "95%",
    margin: 30

  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 5,
    paddingTop: 8,
    height: 50
  },
  team_shield: {
    width: 30,
    height: 30,
    marginRight:15
  },
  team_name: {
    fontSize: 20,
    width: 150,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  team_position: {
    width: 30,
    fontSize: 20,
  }

});