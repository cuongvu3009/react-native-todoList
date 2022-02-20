import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const textInputHandler = (textInput) => {
    setEnteredGoal(textInput);
  };

  return (
    <>
      <TextInput
        onChangeText={textInputHandler}
        value={enteredGoal}
        placeholder='Add your goal'
        style={styles.InputContainer}
      />
      <Button title='ADD' onPress={() => props.onAddGoal(enteredGoal)} />
    </>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  InputContainer: {
    borderBottomColor: 'black',
    borderWidth: 2,
    padding: 5,
  },
});
