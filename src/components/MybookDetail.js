import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const MybookDetail = () => {
  return (
   <View style={styles.cardContainerStyle}>
    <Text style={styles.textstyle}> Hi :)</Text>
   </View>
  );
};

const styles = StyleSheet.create({
  cardContainerStyle: {
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    height:655,
    justifyContent:"center",
    alignItems:"center"
  },
  textstyle:{
fontSize:30,
  },
});

export default MybookDetail;
