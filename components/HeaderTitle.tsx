import { View, Text } from "react-native";
import React from "react";

export default function HeaderTitle({ title }: { title: string }) {
  return (
    <Text className="mb-2 text-lg font-semibold text-foreground">{title}</Text>
  );
}
