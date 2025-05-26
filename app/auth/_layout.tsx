import { useAuth } from "@/contexts/auth-context";
import { Redirect, Slot } from "expo-router";

export default function Layout() {
  const { session } = useAuth();
  return !session ? <Slot /> : <Redirect href="/" />;
}
