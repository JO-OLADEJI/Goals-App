import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import DeleteImg from '../assets/delete.png';
import ArrowRight from '../assets/arrow-right.png';


const GoalItem = (props) => {
  return (
    <View style={styles.line}>
      <Image style={styles.iconLeft} source={ArrowRight} />
      <View style={styles.listItem}>
        <Text style={styles.text}>{props.goalObject.value}</Text>
        <TouchableOpacity 
          activeOpacity={0.5} 
          onPress={() => props.onDelete(props.goalObject.id)}>
          <Image style={styles.icon} source={DeleteImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  listItem: {
    flex: 1,
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
  },

  iconLeft: {
    width: 20,
    height: 20,
    marginRight: 2,
  }
});


export default GoalItem;