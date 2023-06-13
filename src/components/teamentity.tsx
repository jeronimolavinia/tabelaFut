// TeamEntity.tsx
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export interface Team {
  id: number;
  name: string;
  crestUrl: string;
  
}

export interface TeamEntityProps {

  team: Team;
  position: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  onPress: () => void;
  

}

class TeamEntity extends Component<TeamEntityProps> {
  render() {
    const {
      team,
      position,
      points,
      goalsFor,
      goalsAgainst,
      goalDifference,
      onPress
    } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={{ uri: team.crestUrl }} style={{ width: 100, height: 100 }} />
        <Text>{team.name}</Text>
        <Text>Position: {position}</Text>
        <Text>Points: {points}</Text>
        <Text>Goals For: {goalsFor}</Text>
        <Text>Goals Against: {goalsAgainst}</Text>
        <Text>Goal Difference: {goalDifference}</Text>
      </View>
    );
  }
}

export default TeamEntity;
