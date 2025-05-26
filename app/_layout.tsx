import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { AuthProvider } from "@/contexts/auth-context";
import { ThemeContext, ThemeProvider } from "@/contexts/theme-context";
import "@/global.css";
import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";

const queryClient = new QueryClient();

export default function RootLayout() {
  const { colorMode }: any = useContext(ThemeContext);
  const [fontsLoaded] = useFonts({
    "dm-sans-regular": DMSans_400Regular,
    "dm-sans-medium": DMSans_500Medium,
    "dm-sans-bold": DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <GluestackUIProvider mode={colorMode}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <StatusBar translucent />
            <Stack>
              <Stack.Screen
                name="(protected)"
                options={{ headerShown: false }}
              />
            </Stack>
          </AuthProvider>
        </QueryClientProvider>
      </GluestackUIProvider>
    </ThemeProvider>
  );
}
