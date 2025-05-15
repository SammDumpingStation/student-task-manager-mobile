import { Text, ScrollView, View, FlatList, Platform } from "react-native";
import React from "react";
import TaskCard from "~/components/TaskCard";
import { Button } from "~/components/ui/button";
import { ChevronRight, PlusIcon } from "lucide-react-native";
import { STROKE_WIDTH } from "~/utils/number-data";
import clsx from "clsx";
import { router } from "expo-router";
import HeaderTitle from "~/components/HeaderTitle";
import { filterTasks } from "~/utils/filter-tasks";
import { useColorScheme } from "~/lib/useColorScheme";

const ViewAllButton = ({ title, id }: { title: string; id: number }) => {
  const darkMode = useColorScheme().isDarkColorScheme;

  return (
    <Button
      variant={"outline"}
      className="flex-row mx-auto mt-3"
      onPress={() => router.push(`/tasks/${id}`)}
    >
      <View className="flex-row gap-2 items-center">
        <Text className="text-foreground">View All {title}</Text>
        <ChevronRight
          strokeWidth={STROKE_WIDTH}
          color={darkMode ? "#fff" : "gray"}
        />
      </View>
    </Button>
  );
};

export default function Index() {
  const darkMode = useColorScheme().isDarkColorScheme;
  return (
    <View className="relative flex-1">
      <Text className="p-4 text-2xl font-bold text-foreground">
        Welcome User!
      </Text>
      <ScrollView
        className="h-full p-[4%] relative"
        contentContainerClassName={clsx("gap-8", {
          "pb-20": Platform.OS === "ios",
        })}
      >
        <View>
          <HeaderTitle title="Today's Tasks" />
          <FlatList
            data={filterTasks("today")}
            scrollEnabled={false}
            contentContainerClassName="gap-3"
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <TaskCard item={item} />}
          />
          <ViewAllButton title="Today's Task" id={1} />
        </View>
        <View>
          <HeaderTitle title="Upcoming Tasks" />
          <FlatList
            data={filterTasks("upcoming")}
            scrollEnabled={false}
            contentContainerClassName="gap-3"
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <TaskCard item={item} />}
          />
          <ViewAllButton title="Upcoming Tasks" id={2} />
        </View>
        <View>
          <HeaderTitle title="Completed Tasks" />
          <FlatList
            data={filterTasks("completed")}
            scrollEnabled={false}
            contentContainerClassName="gap-3"
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <TaskCard item={item} />}
          />
          <ViewAllButton title="Completed Tasks" id={3} />
        </View>
      </ScrollView>
      <Button
        className="absolute right-6 bottom-6 justify-center items-center p-4 rounded-full elevation-lg"
        size={"custom"}
        onPress={() => router.push("/add-task")}
      >
        <Text>
          <PlusIcon
            strokeWidth={STROKE_WIDTH}
            color={darkMode ? "#000" : "#fff"}
          />
        </Text>
      </Button>
    </View>
  );
}
