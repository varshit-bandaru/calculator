// import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import CalculatorScreen from "./screen/CalculatorScreen";
import LoginScreen from "./screen/LoginScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
const Drawer = createDrawerNavigator();

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator drawerType="front" initialRouteName="Login">
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
