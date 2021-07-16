import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import DeleteImg from '../assets/delete.png';


const GoalItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{props.goalObject.value}</Text>
      <TouchableOpacity 
        activeOpacity={0.5} 
        onPress={() => props.onDelete(props.goalObject.id)}>
        <Image style={styles.icon} source={DeleteImg} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#24a0ed',
    backgroundColor: '#24a0ed',
    marginVertical: 7,
    padding: 7,
  },

  text: {
    color: '#fff',
    fontSize: 16,
  },

  icon: {
    width: 20,
    height: 20,
  }
});


export default GoalItem;