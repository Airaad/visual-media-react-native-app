import { Stack } from "expo-router";
export default function NavbarLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="onlymovie"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="onlytv"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
