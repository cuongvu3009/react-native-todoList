import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.id)}>
      <View style={styles.listItem}>
        <Text>{props.item}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
