import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { tasks } from "~/data/tasks-data";
import { TaskTypes } from "~/types/tasks";

export default function Task() {
  const { id } = useLocalSearchParams();
  const [task, setTask] = useState<TaskTypes>();
  useEffect(() => {
    const task = tasks.find((task) => task.id === Number(id));
    setTask(task);
  }, [id]);
  return (
    <View>
      <Text>{task?.title}</Text>
      <Text>{task?.description}</Text>
      <Text>{task?.date}</Text>
      <Text>{task?.status}</Text>
    </View>
  );
}
