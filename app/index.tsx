import { Text, ScrollView, View, FlatList, Platform } from "react-native";
import React from "react";
import { Card, CardContent, CardTitle } from "~/components/ui/card";
import TaskCard from "~/components/TaskCard";
import { todayTasks } from "~/data/tasks-data";
import { Button } from "~/components/ui/button";
import { ChevronRight } from "lucide-react-native";
import { STROKE_WIDTH } from "~/utils/number-data";
import clsx from "clsx";

const ViewAllButton = ({ title }: { title: string }) => {
  return (
    <Button variant={"outline"} className="flex-row mx-auto mt-3">
      <Text>View All {title}</Text>
      <ChevronRight strokeWidth={STROKE_WIDTH} />
    </Button>
  );
};

export default function Index() {
  return (
    <ScrollView
      className="h-full p-[4%] "
      contentContainerClassName={clsx("gap-8", {
        "pb-20": Platform.OS === "ios",
      })}
    >
      <Text className="text-2xl font-bold">Welcome User!</Text>
      <View>
        <Text className="mb-2 text-lg font-semibold">Today's Tasks</Text>
        <FlatList
          data={todayTasks}
          scrollEnabled={false}
          contentContainerClassName="gap-3"
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TaskCard item={item} />}
        />
        <ViewAllButton title="Today's Task" />
      </View>
      <View>
        <Text className="mb-2 text-lg font-semibold">Upcoming Tasks</Text>
        <FlatList
          data={todayTasks}
          scrollEnabled={false}
          contentContainerClassName="gap-3"
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TaskCard item={item} />}
        />
        <ViewAllButton title="Upcoming Tasks" />
      </View>
      <View>
        <Text className="mb-2 text-lg font-semibold">Completed Tasks</Text>
        <FlatList
          data={todayTasks}
          scrollEnabled={false}
          contentContainerClassName="gap-3"
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TaskCard item={item} />}
        />
        <ViewAllButton title="Completed Tasks" />
      </View>
    </ScrollView>
  );
}
