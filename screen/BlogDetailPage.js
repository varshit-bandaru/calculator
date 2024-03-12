import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import CardComponent from "../components/CardComponent";
import { data } from "../data/BlogsData";

export default function BlogDetailPage({ route }) {
  const { id } = route.params;
  const [selectedBlog, setSelectedectedBlog] = React.useState([]);
  React.useEffect(() => {
    setSelectedectedBlog(data.filter((blog) => blog.id == id));
  }, [id]);
  return (
    <SafeAreaView style={style.blogsContainer}>
      {/* Your content goes here */}
      {selectedBlog.map((item) => {
        return <Text key={item.id}>{item.title}</Text>;
      })}
      <Text>Blogs Detail Page </Text>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  blogsContainer: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 10,
    paddingHorizontal: 15,
    // backgroundColor:"black"
  },
});
