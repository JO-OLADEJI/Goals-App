import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';
import Input from './components/Input.js';
import GoalItem from './components/GoalItem.js';
import ListImg from './assets/list.png';


const App = () => {
  const [goal, setGoal] = useState('');
  const [allGoals, setAllGoals] = useState([]);
  const [modalInput, setModalInput] = useState(false);

  // event handlers
  const handleGoalChange = (text) => {
    setGoal(text);
  }

  const handleGoalSubmit = () => {
    if (goal !== '') {
      setAllGoals(currentGoals => [...currentGoals, { 'id': Math.random().toString(), 'value': goal }]);
      setGoal('');
      setModalInput(false);
    }
  }

  const handleGoalDelete = (goalId) => {
    setAllGoals(currentGoals => currentGoals.filter((goal) => goal.id !== goalId));
  }



  return (
    <View style={styles.screen}>

      <View>
        <View style={styles.heading}>
          <Image source={ListImg} style={styles.icon} />
          <Text style={styles.title}>Todo-List</Text>
        </View>
        <Input 
          goal={goal}
          onChange={handleGoalChange}
          onAdd={handleGoalSubmit}
          onCancel={() => setModalInput(false)}
          visible={modalInput}
        />
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
      </View>
      <Button
        title="add task"
        color="#24a0ed"
        onPress={() => setModalInput(true)}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
    justifyContent: 'space-between',
  },

  heading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 30,
  }, 

  subTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
    color: '#24a0ed',
  },

  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  }
});



export default App;