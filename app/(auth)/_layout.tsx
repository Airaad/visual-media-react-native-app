import { Stack, Redirect } from "expo-router";
import { useAuth } from "@/context/AuthProvider";
export default function NavbarLayout() {
  const { isAuthenticated } = useAuth();
    if (isAuthenticated) {
      return <Redirect href="/"/>;
    }
  return (
    <Stack>
      <Stack.Screen
        name="authscreen"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
