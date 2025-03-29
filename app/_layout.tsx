import { Stack } from "expo-router";
import "./global.css";
import { StatusBar, View } from "react-native";

export default function RootLayout() {
  return (
    <View className="flex-1">
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="(navbar)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="movie-details/[id]"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="tv-details/[id]"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
}
