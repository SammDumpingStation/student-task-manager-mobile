import React, { useEffect, useState } from "react";
import { View, Platform, Image, Text } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { tasks } from "~/data/tasks-data";
import { TaskTypes } from "~/types/tasks";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Info } from "~/lib/icons/Info";
import { Check } from "~/lib/icons/Check";
import { formatDate } from "~/utils/date-formatter";
import Animated, { FadeIn } from "react-native-reanimated";
import clsx from "clsx";
import { PencilLine } from "lucide-react-native";
import ConfirmationDialog from "~/components/ConfirmationDialog";

// Fallback icon for status if needed
const StatusIcon = ({ status }: { status?: string }) => {
  if (status === "today") return <PencilLine color="black" size={20} />;
  if (status === "completed") return <Check color="#22c55e" size={20} />;
  if (status === "upcoming") return <Info color="#eab308" size={20} />;
  return null;
};

export default function Task() {
  const { id } = useLocalSearchParams();
  const [task, setTask] = useState<TaskTypes>();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const task = tasks.find((task) => task.id === Number(id));
    setTask(task);
  }, [id]);

  if (!task) {
    return (
      <View className="flex-1 justify-center items-center bg-background">
        <Card className="p-8">
          <CardTitle>Task Not Found</CardTitle>
          <CardDescription>This task does not exist.</CardDescription>
        </Card>
      </View>
    );
  }

  return (
    <View className="flex-1 gap-8 px-4 bg-background">
      <Image
        source={require("~/assets/images/task.png")}
        className="w-full h-[300px] rounded-lg pt-4"
      />
      <Animated.View
        entering={FadeIn.duration(400)}
        className="w-full max-w-xl"
      >
        <Card className="bg-white rounded-2xl">
          <CardHeader className="pb-0">
            <CardTitle className="mb-2 text-3xl font-bold text-foreground">
              {task.title}
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              {task.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="items-start pt-2">
            <View className="flex-row items-center">
              {/* Date icon (Info used as fallback) */}
              <Info color="#0ea5e9" size={20} />
              <CardDescription className="ml-2">
                {formatDate(task.date)}
              </CardDescription>
            </View>

            <View className="flex-row items-center mt-3">
              <StatusIcon status={task.status} />
              <View className="ml-2">
                <CardDescription
                  className={clsx(
                    "capitalize",
                    task.status === "completed" && "text-green-500"
                  )}
                >
                  {task.status}
                </CardDescription>
              </View>
            </View>
          </CardContent>
        </Card>
      </Animated.View>
      {task.status !== "completed" && (
        <>
          <View className="absolute right-6 bottom-6 left-6 flex-1">
            <Button
              onPress={() => setDialogOpen(true)}
              accessibilityLabel="Edit Task"
              className="text-center rounded-full"
            >
              <Text className="text-background">Mark as Done</Text>
            </Button>
            <Button
              variant="ghost"
              onPress={() => router.push(`/edit-task/${task.id}`)}
              accessibilityLabel="Edit Task"
              className="text-center rounded-full"
            >
              <Text className="text-foreground">Edit Task</Text>
            </Button>
          </View>
          <ConfirmationDialog
            dialogOpen={dialogOpen}
            setDialogOpen={setDialogOpen}
            setChecked={setChecked}
          />
        </>
      )}
    </View>
  );
}
