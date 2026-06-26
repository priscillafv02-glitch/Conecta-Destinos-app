import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AboutScreen } from "./src/screens/AboutScreen";
import { DestinationDetailsScreen } from "./src/screens/DestinationDetailsScreen";
import { DestinationsScreen } from "./src/screens/DestinationsScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { PaymentScreen } from "./src/screens/PaymentScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { ShareTripScreen } from "./src/screens/ShareTripScreen";
import { TravelTipsScreen } from "./src/screens/TravelTipsScreen";
import { RootStackParamList } from "./src/types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Destinations" component={DestinationsScreen} />
          <Stack.Screen name="DestinationDetails" component={DestinationDetailsScreen} />
          <Stack.Screen
            name="Payment"
            component={PaymentScreen}
            options={{
              animation: "fade",
              contentStyle: { backgroundColor: "transparent" },
              presentation: "transparentModal"
            }}
          />
          <Stack.Screen name="ShareTrip" component={ShareTripScreen} />
          <Stack.Screen name="TravelTips" component={TravelTipsScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
