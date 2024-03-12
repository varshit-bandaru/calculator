// import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import CalculatorScreen from "./screen/CalculatorScreen";
import LoginScreen from "./screen/LoginScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import BlogScreen from "./screen/Blog";
import BlogDetailPage from "./screen/BlogDetailPage";
import { createStackNavigator } from "@react-navigation/stack";
import CustomHeader from "./components/CustomHeader";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const BlogStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="BlogScreen"
          component={BlogDetailPage}
          options={{
            header: ({ navigation }) => (
              <CustomHeader title="Blog Screen" navigation={navigation} />
            ),
          }}
        />
      </Stack.Navigator>
    );
  };
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login">
          <Drawer.Screen
            name="Login"
            component={LoginScreen}
            options={
              {
                // drawerIcon={<></>}
              }
            }
          ></Drawer.Screen>
          <Drawer.Screen
            name="Calculator"
            component={CalculatorScreen}
          ></Drawer.Screen>

          <Drawer.Screen name="Blogs" component={BlogScreen}></Drawer.Screen>
          <Drawer.Screen name="Blog Detail Page" component={BlogStack}   options={{
            headerShown: false
          }} />
        </Drawer.Navigator>
      </NavigationContainer>
      {/* <LoginScreen></LoginScreen>
      <CalculatorScreen></CalculatorScreen> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});
