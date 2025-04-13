import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#673ab7");
    NavigationBar.setButtonStyleAsync("light");
  }, []);
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="+not-found" options={{}} />
      </Stack>
    </>
  );
}
