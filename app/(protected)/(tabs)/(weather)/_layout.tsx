import { Slot } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeLayout() {
  return (
    <SafeAreaView className="flex-1  bg-background-0">
      <Slot />
    </SafeAreaView>
  );
}
