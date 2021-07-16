import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Input = (props) => {
  return (
    <View style={styles.inputBox}>
      <TextInput 
        style={styles.textInput}
        placeholder="Enter a goal..."
        value={props.goal}
        onChangeText={props.onChange}
        keyboardType="default"
      />
      <Button 
        title="Add"
        onPress={props.onAdd}
        accessibilityLabel="add new goal"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
  }
});


export default Input;