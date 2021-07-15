import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';



const App = () => {
  const [goal, setGoal] = useState('');
  const [allGoals, setAllGoals] = useState([]);

  // event handlers
  const handleGoalSubmit = () => {
    if (goal !== '') {
      setAllGoals(currentGoals => [...currentGoals, { 'id': Math.random().toString(), 'value': goal }]);
      setGoal('');
    }
  }


  return (
    <View style={styles.screen}>

      <Text style={styles.title}>Goals App</Text>
      <View style={styles.inputBox}>
        <TextInput 
          style={styles.textInput}
          placeholder="Enter a goal..."
          value={goal}
          onChangeText={setGoal}
          keyboardType="default"
        />
        <Button 
          title="Add"
          onPress={handleGoalSubmit}
          accessibilityLabel="add new goal"
        />
      </View>
      {(allGoals.length >= 1) && <Text style={styles.subTitle}>Goals</Text>}
      <FlatList 
        data={allGoals}
        keyExtractor={(goal, index) => goal.id}
        renderItem={goal => 
          <View style={styles.listItem}>
            <Text>{goal.item.value}</Text>
          </View>
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

  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 6,
    marginRight: 10,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  }, 

  subTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 15,
    color: '#24a0ed',
  },

  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  listItem: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#24a0ed',
    marginVertical: 5,
    padding: 5,
  }
});



export default App;