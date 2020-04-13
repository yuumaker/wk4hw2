import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const AlbumDetail = () => {
  return (
   <View style={styles.cardContainerStyle}>
      <View style={styles.cardSectionStyle}>
        <View style={styles.imageboxStyle}>
            <View style={styles.imageoutlineStyle}>
         <Image
         style={styles.imageStyle}
         source={{
            uri:
               "https://github.com/yuumaker/wk4hw2img/blob/master/image/drawable-xxxhdpi/img_the_immortalists.png?raw=true",
         }}
           />
            </View>
         </View>
        <View style={styles.maintitlebox}>
          <Text style={styles.maintitleStyle}>The Immortalists</Text>
          <Text style={styles.titleStyle}>Chloe Benjamin</Text>
          <Text style={styles.articleStyle}>If you were told the date of your death, how would it shape your…</Text>
              <View style={styles.lineStyle}>
                <Text style={styles.linedownStyle}></Text>
              </View>
              <View style={styles.lineStyle2}>
                <Text style={styles.lineupStyle}></Text>
              </View>
              <Text style={styles.buttomtextStyle}>50% completed</Text>
        </View>
      </View>

      <View style={styles.cardSectionStyle}>
      <View style={styles.imageboxStyle}>
        <View style={styles.imageoutlineStyle}>
          <Image
          style={styles.imageStyle}
          source={{
              uri:
                "https://github.com/yuumaker/wk4hw2img/blob/master/image/drawable-xxxhdpi/img_gristmillroad.png?raw=true",
          }}
            />
              </View>
         </View>
         <View style={styles.maintitlebox}>
          <Text style={styles.maintitleStyle}>Grist Mill Road</Text>
          <Text style={styles.titleStyle}>Christopher J.</Text>
          <Text style={styles.articleStyle}>Twenty-six years ago Hannah had her eye shot out. Now she wants…</Text>
              <View style={styles.lineStyle}>
                <Text style={styles.linedownStyle}></Text>
              </View>
              <Image
          style={styles.startStyle}
          source={{
              uri:
                "https://github.com/yuumaker/wk4hw2img/blob/master/image/drawable-hdpi/btn_start_read_pressed.png?raw=true",
          }}
            />
        </View>
      </View>

      <View style={styles.cardSectionStyle}>
      <View style={styles.imageboxStyle}>
      <View style={styles.imageoutlineStyle}>
          <Image
          style={styles.imageStyle}
          source={{
              uri:
              "https://github.com/yuumaker/wk4hw2img/blob/master/image/drawable-xxxhdpi/img_streetartactivitybook.png?raw=true",
          }}
            />
              </View>
       </View>
       <View style={styles.maintitlebox}>
          <Text style={styles.maintitleStyle}>Street Art Activity Book</Text>
          <Text style={styles.titleStyle}>Mitchell Beazley</Text>
          <Text style={styles.articleStyle}>Street art is colorful, vibrant, diverse and exciting.Now, you can create…</Text>
              <View style={styles.lineStyle}>
                <Text style={styles.linedownStyle}></Text>
              </View>
              <View style={styles.lineStyle2}>
                <Text style={styles.lineupStyle2}></Text>
              </View>
              <Text style={styles.buttomtextStyle}>70% completed</Text>
        </View>
      </View>
   </View>
  );
};

const styles = StyleSheet.create({
  cardContainerStyle: {
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  cardSectionStyle: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1.5,
    flexDirection:"row"
  },
  imageboxStyle:{
    height:217,
    width:171,
    backgroundColor:"#FFFFFF",
    padding:16,
    justifyContent:"center",
    alignContent:"center"
  },
  imageStyle: {
    width:130,
    height:180,
    margin:3.5
  },
  imageoutlineStyle:{
      height:188,
      width:138,
      marginRight:4,
      backgroundColor:"#FFFFFF",
      justifyContent:"center",
      alignSelf:"center",
      shadowColor:"#000",
      shadowOffset:{width:0, height:2},
      shadowOpacity:0.1,
      shadowRadius:2,
  },
  maintitlebox:{
    height:175,
    marginTop:35,
    backgroundColor:"#FFFFFF"
  },
  maintitleStyle:{
    fontSize:20,
    fontWeight:"600",
    marginTop:10,
  },
  titleStyle:{
    fontSize:16,
    color:"#666666",
    marginTop:16,
    fontSize:15,
    fontWeight:"500"
  },
  articleStyle:{
    width:210,
    height:40,
    marginTop:16,
    fontSize:13,
    color:"#AAAAAA",
  },
  linedownStyle:{
    height:4,
    width:215,
    borderRadius:2,
    marginTop:10,
    borderWidth:2,
    borderColor:"#666666",
  },
  lineupStyle:{
    height:4,
    width:105,
    borderRadius:2,
    marginTop:8,
    borderWidth:2,
    borderColor:"#00b49f"
  },
  lineStyle:{
    marginBottom:-12
  },
  buttomtextStyle:{
    width:210,
    height:40,
    marginTop:13,
    fontSize:13,
    color:"#AAAAAA",
  },
  lineupStyle2:{
    height:4,
    width:150,
    borderRadius:2,
    marginTop:8,
    borderWidth:2,
    borderColor:"#00b49f"
  },
  startStyle:{
    height:26,
    width:91,
    borderRadius:6,
    marginTop:20
  }
});

export default AlbumDetail;
