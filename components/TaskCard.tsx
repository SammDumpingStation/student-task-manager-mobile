import { View, Text } from "react-native";
import React from "react";
import { Card, CardContent, CardTitle } from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import { Calendar, CalendarClock } from "lucide-react-native";
import { formatDate } from "~/utils/date-formatter";
import { STROKE_WIDTH } from "~/utils/number-data";

export default function TaskCard({ item }: { item: any }) {
  return (
    <Card className="">
      <CardTitle className="p-4 pb-2 text-base font-light">
        {item.headTitle}
      </CardTitle>
      <CardContent className="flex-row gap-2 items-start">
        <Checkbox
          checked={false}
          onCheckedChange={(checked) => console.log(checked)}
          className="mt-1"
        />
        <View className="flex-1 w-full">
          <Text className="text-lg font-semibold">{item.title}</Text>
          <Text className="text-sm text-justify text-muted-foreground line-clamp-1">
            {item.description}
          </Text>
          <View className="flex-row gap-2 justify-end items-center mt-3">
            <CalendarClock strokeWidth={STROKE_WIDTH} />
            <Text className="">{formatDate(item.date)}</Text>
          </View>
        </View>
      </CardContent>
    </Card>
  );
}
