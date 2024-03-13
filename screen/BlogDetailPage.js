import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet,Image, ScrollView } from "react-native";
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
      <ScrollView>
      {selectedBlog.map((item,index) => {
        return (
          <View key={item.id}>
            <Text  style={style.blogsTitle}>
              {item.title}
            </Text>
            <Image
              source={require('../assets/blog.jpg')} // Replace with the actual path or URL of your image
              style={style.imageStyles}
            />
            <View style={style.moreContentView}>
            <Text style={style.moreContent}>
              {item.moreContent}
            </Text>
            </View>
          </View>
        );
      })}
      </ScrollView>
      <Text>Blogs Detail Page </Text>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  blogsContainer: {
    flex: 1,
    // justifyContent: "center",
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor:"white"
  },
  blogsTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  imageStyles:{width:"100%",height:250},
  moreContent:{ lineHeight:20,letterSpacing:2,fontWeight:"bold",fontSize:15},
  moreContentView:{paddingTop:20}
  
});
