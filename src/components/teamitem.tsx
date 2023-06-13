// TeamItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Team } from './teamentity'

interface TeamItemProps {
  team: Team;
  onPress: () => void;
}

const TeamItem: React.FC<TeamItemProps> = ({ team, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={{ uri: team.crestUrl }} style={{ width: 100, height: 100 }} />
        <Text>{team.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TeamItem;
