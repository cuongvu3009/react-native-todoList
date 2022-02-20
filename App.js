import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };

  const deleteHandler = (goalId) => {
    setGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== goalId)
    );
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />

      <FlatList
        data={goals}
        renderItem={(item) => (
          <GoalItem
            id={item.item.id}
            item={item.item.value}
            onDelete={deleteHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
});
