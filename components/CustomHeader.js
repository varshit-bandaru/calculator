// CustomHeader.js
import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={30} color="black" backgroundColor="white" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>adssdaasdsad</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white', // Set the background color to match your theme
      height: 60, // Set the height to match the default header height
    },
    backButton: {
      paddingHorizontal:6,
      paddingTop:25
    },
    headerTitle: {
      marginLeft: 10,
      fontSize: 18,
      color: 'white', // Set the text color to match your theme
    },
  });
  
export default CustomHeader;
