import React from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Text } from 'react-native';

const Input = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputBox}>
        <Text style={styles.title}>Add new task</Text>
        <TextInput 
          style={styles.textInput}
          placeholder="Enter a goal..."
          value={props.goal}
          onChangeText={props.onChange}
          keyboardType="default"
        />
        <View style={styles.btnBox}>
          <View style={styles.btn}>
            <Button
              title="cancel"
              color="#ED5E68"
              onPress={props.onCancel}
              accessibilityLabel="close"
            />
          </View>
          <View style={styles.btn}>
            <Button 
              title="add"
              color="#24a0ed"
              onPress={props.onAdd}
              accessibilityLabel="add new task"
            />
          </View>
        </View>
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

  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 15,
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
  },

  btnBox: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btn: {
    flex: 1,
    alignItems: 'stretch',
    overflow: 'hidden',
    borderRadius: 6,
    marginHorizontal: 3
  }
});


export default Input;