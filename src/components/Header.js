import React from "react";
import { StyleSheet, Text, View,Image} from "react-native";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
         <Image style={styles.thumbnailStyle}
         source={{
            uri: "https://github.com/yuumaker/wk4hw2img/blob/master/image/2x/baseline_menu_white_18dp.png?raw=true"
         }}
         />
                 <Text style={styles.textStyle}>My Book</Text>
                  <Image style={styles.searchStyle}
         source={{
            uri: "https://github.com/yuumaker/wk4hw2img/blob/master/image/drawable-xxxhdpi/btn_search.png?raw=true"
         }}
         />
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#00b49f",
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"row",
    justifyContent:"space-between",
    height: 108,
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2
  },
  thumbnailStyle:{
    height:30,
    width:30,
    marginTop:12,
    marginLeft:22
  },
  searchStyle:{
    height:50,
    width:50,
    marginTop:12,
    marginRight:12
  },
  textStyle: {
    fontSize: 25,
    color:"#FFFFFF",
    marginTop:10,
    fontWeight:"500"
  },
});

export default Header;
