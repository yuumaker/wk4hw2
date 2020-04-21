import React from "react";
import { StyleSheet, Text, View,Image} from "react-native";

const Drawer = () => {
  return (
    <View style={styles.navigationdrawerStyle}>
        <View style={styles.twoboxsStyle}>
        <View style={styles.topboxStyle}>
            <Image style={styles.topimgStyle}
            source={{
                uri: "https://github.com/yuumaker/wk4hw2img/blob/master/image/drawable-xhdpi/img_user_photo.png?raw=true"
            }}
            />
            <Text style={styles.toptext1Style}>GamexHCl</Text>
            <Text style={styles.toptex21Style}>gdlab2017@gmail.com</Text>
        </View>
        <View style={styles.arrowStyle}>
        <Image style={styles.arrowimgStyle}
            source={{
                uri: "https://github.com/yuumaker/wk4hw2img/blob/master/image/btn_down_arrow.png?raw=true"
            }}
            />
        </View>
        </View>
        <View style={styles.homeStyle}>
        <Image style={styles.homeimgStyle}
            source={{
                uri: "https://github.com/yuumaker/wk4hw2img/blob/master/image/drawable-xxxhdpi/icon_bottomnav_home.png?raw=true"
            }}
            />
        <Text style={styles.hometext1Style}>Home</Text>
        </View>

        <View style={styles.mybookStyle}>
        <Image style={styles.bookimgStyle}
            source={{
                uri: "https://github.com/yuumaker/wk4hw2img/blob/master/image/icon_drawer_mybook_pressed.png?raw=true"
            }}
            />
            <Text style={styles.mybooktextStyle}>My Book</Text>
        </View>

        <View style={styles.homeStyle}>
            <Image style={styles.homeimgStyle}
                source={{
                    uri: "https://github.com/yuumaker/wk4hw2img/blob/master/image/drawable-xxxhdpi/icon_bottomnav_favorites.png?raw=true"
                }}
                />
            <Text style={styles.hometext1Style}>Favorites</Text>
        </View>

        <View style={styles.homeStyle}>
        <Image style={styles.homeimgStyle}
            source={{
                uri: "https://github.com/yuumaker/wk4hw2img/blob/master/image/icon_drawer_setting.png?raw=true"
            }}
            />
        <Text style={styles.hometext1Style}>Settings</Text>
        </View>

        <View style={styles.homeStyle}>
        <Image style={styles.homeimgStyle}
            source={{
                uri: "https://github.com/yuumaker/wk4hw2img/blob/master/image/icon_drawer_aboutus.png?raw=true"
            }}
            />
        <Text style={styles.hometext1Style}>About us</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    navigationdrawerStyle:{
        position:"absolute",
        width:348,
        height:843.5,
        justifyContent:"flex-start",
        backgroundColor:"#DDDDDD",
        shadowColor:"#000",
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.5,
        shadowRadius:2,
      },
      twoboxsStyle:{
          flexDirection:"row",
      },
      arrowStyle:{
          height:265,
          width:48,
          backgroundColor:"#00b49f"
      },
      arrowimgStyle:{
          width:33,
          height:33,
          marginTop:210,
      },
    topboxStyle:{
        width:300,
        height:265,
        backgroundColor:"#00b49f",
      },
    topimgStyle:{
        height:90,
        width:90,
        marginLeft:18,
        marginTop:100
    },
    toptext1Style:{
        fontSize:16,
        marginLeft:18,
        marginTop:15,
        color:"#ffffff",
        fontWeight:"500"
    },
    toptex21Style:{
        fontSize:14,
        marginLeft:18,
        marginTop:5,
        color:"#ffffff",
    },
    mybookStyle:{
        backgroundColor:"#00b49f",
        alignItems: "center",
        flexDirection:"row",
    },
    homeStyle:{
        alignItems: "center",
        flexDirection:"row",
    },
    homeimgStyle:{
        width:40,
        height:40,
        marginLeft:25,
        marginTop:28,
        marginBottom:10
    },
    hometext1Style:{
        fontSize:18,
        color:"#666666",
        fontWeight:"500",
        marginLeft:35,
        marginTop:25,
        marginBottom:5
    },
    mybooktextStyle:{
        fontSize:18,
        color:"#FFFFFF",
        fontWeight:"500",
        marginLeft:35,
        marginTop:3
    },
    bookimgStyle:{
        width:40,
        height:40,
        marginLeft:25,
        marginTop:28,
        marginBottom:16,
    }
});

export default Drawer;
