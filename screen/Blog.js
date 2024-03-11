import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import CardComponent from "../components/CardComponent";
import { data } from "../data/BlogsData";

export default function BlogScreen() {
  return (
    <SafeAreaView style={style.blogsContainer}>
      {/* Your content goes here */}

      <CardComponent bolgsData={data}></CardComponent>

      {/* <Text style={{ fontSize: 16, fontWeight: "700" }}>Blog Screen</Text> */}
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  blogsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor:"black"
  },
});
