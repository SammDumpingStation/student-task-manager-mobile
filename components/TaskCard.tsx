import { View, Text, useColorScheme } from "react-native";
import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import { CalendarClock } from "lucide-react-native";
import { formatDate } from "~/utils/date-formatter";
import { STROKE_WIDTH } from "~/utils/number-data";
import { Button } from "./ui/button";
import { router } from "expo-router";
import clsx from "clsx";
import ConfirmationDialog from "./ConfirmationDialog";

export default function TaskCard({ item }: { item: any }) {
  const darkMode = useColorScheme() === "dark";
  const [checked, setChecked] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <Button
      asChild
      size={"custom"}
      variant={"ghost"}
      onPress={() => router.push(`/task/${item.id}`)}
    >
      <Card
        className={clsx("w-full", {
          "border-green-500": item.status === "today",
          "border-yellow-500": item.status === "upcoming",
        })}
      >
        <CardTitle className="p-4 pb-2 text-base font-light">
          {item.headTitle}
        </CardTitle>
        <CardContent className="flex-row gap-2 items-start">
          <Checkbox
            checked={checked || item.status === "completed"}
            disabled={item.status === "completed"}
            onCheckedChange={(checked) => {
              checked ? setDialogOpen(true) : setChecked(false);
            }}
            className="z-50 mt-1"
          />
          <View className="flex-1 w-full">
            <Text
              className={clsx(
                "text-lg font-semibold text-foreground",
                checked || (item.status === "completed" && "line-through")
              )}
            >
              {item.title}
            </Text>
            <Text
              className={clsx(
                "text-sm text-justify text-muted-foreground line-clamp-1",
                checked || (item.status === "completed" && "line-through")
              )}
            >
              {item.description}
            </Text>
            <View className="flex-row gap-2 justify-end items-center mt-3">
              <CalendarClock
                strokeWidth={STROKE_WIDTH}
                color={
                  darkMode
                    ? "#fff"
                    : item.status === "completed"
                    ? "gray"
                    : "#000"
                }
              />
              <Text
                className={clsx(
                  "text-foreground",
                  item.status === "completed" && "text-muted-foreground"
                )}
              >
                {formatDate(item.date)}
              </Text>
            </View>
          </View>
        </CardContent>
      </Card>
      <ConfirmationDialog
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        setChecked={setChecked}
      />
    </Button>
  );
}
