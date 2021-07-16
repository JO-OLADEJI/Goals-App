import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Input from './components/Input.js';
import GoalItem from './components/GoalItem.js';


const App = () => {
  const [goal, setGoal] = useState('');
  const [allGoals, setAllGoals] = useState([]);

  // event handlers
  const handleGoalChange = (text) => {
    setGoal(text);
  }

  const handleGoalSubmit = () => {
    if (goal !== '') {
      setAllGoals(currentGoals => [...currentGoals, { 'id': Math.random().toString(), 'value': goal }]);
      setGoal('');
    }
  }

  const handleGoalDelete = (goalId) => {
    setAllGoals(currentGoals => currentGoals.filter((goal) => goal.id !== goalId));
  }

  

  return (
    <View style={styles.screen}>

      <Text style={styles.title}>Goals App</Text>
      <Input 
        goal={goal}
        onChange={handleGoalChange}
        onAdd={handleGoalSubmit}
      />
      {(allGoals.length >= 1) && <Text style={styles.subTitle}>Goals</Text>}
      <FlatList 
        data={allGoals}
        keyExtractor={(goal, index) => goal.id}
        renderItem={goal => 
          <GoalItem 
            goalObject={goal.item} 
            onDelete={handleGoalDelete}
          />
        }
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  }, 

  subTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
    color: '#24a0ed',
  }
});



export default App;