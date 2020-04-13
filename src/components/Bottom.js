import React from "react";
import { StyleSheet, Text, View,Image} from "react-native";

const Bottom = () => {
  return (
    <View style={styles.underbox}>
        <View style={styles.naf}>
          <View style={styles.homebox}>
            <Image style={styles.homestyle} source={{
                        uri:"https://github.com/yuumaker/wk4hw2img/blob/master/image/drawable-xxxhdpi/icon_bottomnav_home.png?raw=true"
                    }}/>
            <Text style={styles.homestexttyle}>Home</Text>
          </View>
          <View style={styles.mybookbox}>
            <Image style={styles.homestyle} source={{
                        uri:"https://github.com/yuumaker/wk4hw2img/blob/master/image/drawable-xxxhdpi/icon_bottomnav_mybook_selected.png?raw=true"
                    }}/>
            <Text style={styles.mybooktexttyle}>My Book</Text>
          </View>
          <View style={styles.favobox}>
            <Image style={styles.homestyle} source={{
                        uri:"https://github.com/yuumaker/wk4hw2img/blob/master/image/drawable-xxxhdpi/icon_bottomnav_favorites.png?raw=true"
                    }}/>
            <Text style={styles.homestexttyle}>Favorites</Text>
          </View>
        </View>
        <Image
                style={styles.imageStyle}
                source={{
                    uri:
                    "https://github.com/yuumaker/wk4hw2img/blob/master/image/navbar.png?raw=true"
                }}
                />
    </View>
  );
};

const styles = StyleSheet.create({
    underbox:{
        width:null,
        height:100,
        backgroundColor:"#FFFFFF",
        
      },
      naf:{
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"row",
        justifyContent:"space-between",
        height:80,
        width:null,
      },
      imageStyle:{
          height:63,
          width:null
      },
      homebox:{
      justifyContent:"center",
      alignItems:"center",
      marginLeft:35
      },
      favobox:{
      justifyContent:"center",
      alignItems:"center",
        marginRight:35
      },
      mybookbox:{
        justifyContent:"center",
        alignItems:"center",
      },
      homestyle:{
        height:28,
        width:28,
      },
      homestexttyle:{
        fontSize:13,
        color:"#666666"
      },
      mybooktexttyle:{
        fontSize:16,
        color:"#00b49f",
        fontWeight:"600"
      }
});

export default Bottom;
