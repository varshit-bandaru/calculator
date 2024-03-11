import React from "react";
import { FlatList, SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
function CardComponent({ bolgsData }) {
  const navaigation=useNavigation()
 
  function cardRender( data ) {
    console.log(data)
    const blog=data.item
    return (
      <TouchableOpacity onPress={()=>{navaigation.navigate("Login")}}>
      <View
        style={[
          styles.cardContainer,
          { backgroundColor: getCategoryColor(blog.category) },
        ]}
      >
         <View style={styles.categoryContainer}>
          <Text style={styles.category}>{blog.category}</Text>
        </View>
         <Text
          style={[styles.title, { color: getTextColor(blog.category) }]}
        >
          {blog.title}
        </Text>
        <Text style={styles.content}>{blog.content}</Text>
        
      </View>
      </TouchableOpacity>
    );
  }
  return (
    <SafeAreaView>
     
     <FlatList
     data={bolgsData}
     keyExtractor={(item,index)=>item.id.toString()}
     renderItem={cardRender}></FlatList>
    </SafeAreaView>
  );
}

const getCategoryColor = (category) => {
  // Map each category to a unique color
  switch (category?.toLowerCase()) {
    case "technology":
      return "#3498db"; // Blue
    case "politics":
      return "#e74c3c"; // Red
    case "environment":
      return "#2ecc71"; // Green
    case "science":
      return "#f39c12"; // Yellow
    default:
      return "#34495e"; // Default color
  }
};

const getTextColor = (category) => {
  // Map each category to a unique color
  switch (category?.toLowerCase()) {
    case "technology":
      return "white"; // Blue
    case "politics":
      return "white"; // Red
    case "environment":
      return "white"; // Green
    case "science":
      return "black"; // Yellow
    default:
      return "#34495e"; // Default color
  }
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "System",
    borderRadius: 10,
    margin: 10,
    padding: 15,
    paddingHorizontal:25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
  category: {
    fontSize: 14,
    color: "white",
    backgroundColor: "black", // Set to black
    padding:7,
    // Increase padding for better visibility
    borderRadius: 15, // Rounded edges
    alignSelf: "flex-start",
    marginVertical: 5,
  },
  author: {
    fontSize: 14,
    color: "#555",
  },
  date: {
    fontSize: 14,
    color: "#555",
  },

});

export default CardComponent;
