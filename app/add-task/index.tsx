import { View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { TaskTypes } from "../../types/tasks";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";

export default function AddTask() {
  const [task, setTask] = useState<Omit<TaskTypes, "id">>({
    headTitle: "",
    title: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
    status: "pending",
  });

  const handleInputChange = (field: keyof typeof task, value: string) => {
    setTask((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Here you would typically save the task to your state management or API
    // Navigate back after submission
    router.back();
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={90}
    >
      <Text className="p-4 text-xl font-semibold">
        Input Your Details Here!
      </Text>
      <View className="p-4">
        <View className="mb-4">
          <View>
            <Label htmlFor="title">Task Title</Label>
            <Input
              id="title"
              value={task.title}
              onChangeText={(text: string) => handleInputChange("title", text)}
              className="mb-4"
              placeholder="Task Title"
            />
          </View>

          <View>
            <Label htmlFor="headTitle">Short Description</Label>
            <Input
              id="headTitle"
              value={task.headTitle}
              onChangeText={(text: string) =>
                handleInputChange("headTitle", text)
              }
              className="mb-4"
              placeholder="Short Description"
            />
          </View>

          <View>
            <Label htmlFor="description">Detailed Description</Label>
            <Textarea
              id="description"
              value={task.description}
              onChangeText={(text: string) =>
                handleInputChange("description", text)
              }
              className="mb-4 min-h-[100px]"
              placeholder="Detailed Description"
              numberOfLines={4}
            />
          </View>

          <View>
            <Label htmlFor="date">Due Date</Label>
            <Input
              id="date"
              value={task.date}
              onChangeText={(text: string) => handleInputChange("date", text)}
              className="mb-6"
              placeholder="Due Date"
            />
          </View>
        </View>
      </View>
      <Button
        onPress={handleSubmit}
        className="absolute right-6 bottom-6 left-6 text-center rounded-full"
      >
        <Text className="text-background">Add Task</Text>
      </Button>
    </KeyboardAvoidingView>
  );
}
