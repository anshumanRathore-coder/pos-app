import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
export default function Layout() {
  return (
    <LinearGradient
      colors={["#7C3AED", "#334155", "#0F172A"]} // Gradient colors
      start={{ x: 0, y: 0 }} // Top-left corner
      end={{ x: 1, y: 1 }} // Bottom-right corner
      style={{ flex: 1 }}
    >
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </LinearGradient>
  );
}
