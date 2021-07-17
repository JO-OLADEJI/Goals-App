import React from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const Input = (props) => {
  return (
    <Modal visible={props.visible} animationType="fade">
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
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textInput: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#000',
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 6,
    marginBottom: 10,
  }
});


export default Input;