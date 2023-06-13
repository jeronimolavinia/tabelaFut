// Table.tsx
import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import axios from 'axios';
import TeamEntity, { Team } from './teamentity'

interface TableData extends Team {
  position: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;

}

const api = axios.create({
  baseURL: 'https://api.football-data.org/v2/',
  headers: {
    'X-Auth-Token': 'test_2d6a35cfcb7c41a923e4146efe9cce' //KEY API
  }
});

const Table: React.FC = () => {
  const [tableData, setTableData] = useState<TableData[]>([]);

  useEffect(() => {
    getTableData();
  }, []);

  const getTableData = async () => {
    try {
      const response = await api.get('https://api.api-futebol.com.br/v1/campeonatos/10');
      setTableData(response.data.standings[0].table);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTeamPress = (team: TableData) => {
    // Navega para a tela de detalhes do time
  };

  const renderTeamItem = ({ item }: { item: TableData }) => (
    <TeamEntity team={item} onPress={() => handleTeamPress(item)} />
  );

  return (
    <View>
      <FlatList
        data={tableData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTeamItem}
      />
    </View>
  );
};

export default Table;
