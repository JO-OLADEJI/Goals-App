import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const GoalItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.goal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#24a0ed',
    marginVertical: 5,
    padding: 5,
  }
});


export default GoalItem;