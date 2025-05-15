import { View, Text, FlatList, useColorScheme } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { TaskTypes } from "~/types/tasks";
import HeaderTitle from "~/components/HeaderTitle";
import TaskCard from "~/components/TaskCard";
import { Plane } from "react-native-animated-spinkit";
import { filterTasks } from "~/utils/filter-tasks";

export default function Tasks() {
  const { id } = useLocalSearchParams();
  const [task, setTask] = useState<TaskTypes[]>([]);
  const [loading, setLoading] = useState(true);

  //FILTER by status
  useEffect(() => {
    const timer = setTimeout(() => {
      if (id === "1") {
        setTask(filterTasks("today"));
      } else if (id === "2") {
        setTask(filterTasks("upcoming"));
      } else if (id === "3") {
        setTask(filterTasks("completed"));
      }
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [id]);

  const darkMode = useColorScheme() === "dark";

  return (
    <View className="h-full p-[4%] ">
      <HeaderTitle
        title={
          id === "1"
            ? "Today's Tasks"
            : id === "2"
            ? "Upcoming Tasks"
            : "Completed Tasks"
        }
      />
      {loading ? (
        <View className="gap-3 justify-center items-center m-auto h-full">
          <Plane size={50} color={darkMode ? "#fff" : "gray"} className="" />
          <Text className="text-lg font-semibold text-center text-muted-foreground">
            Loading....
          </Text>
        </View>
      ) : (
        <FlatList
          data={task}
          contentContainerClassName="gap-3"
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TaskCard item={item} />}
        />
      )}
    </View>
  );
}
