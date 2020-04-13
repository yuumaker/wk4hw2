import React from "react";
import { StyleSheet, Text, View,Image} from "react-native";

const Black = () => {
  return (
    <View style={styles.blackStyle}>
        
    </View>
  );
};

const styles = StyleSheet.create({
    blackStyle:{
        position:"absolute",
        width:430,
        height:860,
        backgroundColor:"#666666",
        opacity:0.7
    },
});

export default Black;
