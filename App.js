import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Composant
import CocktailList from "./components/CocktailList";
import Profile from "./components/Profile";
import CocktailDetails from "./components/CocktailDetails";

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={CocktailList} />
      <Stack.Screen name="Detail" component={CocktailDetails} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Cocktails">
      <Tab.Screen
        name="Cocktails"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="cocktail" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="favorite" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
});
