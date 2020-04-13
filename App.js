import React from "react";
import { View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
import Bottom from "./src/components/Bottom";
import Drawer from "./src/components/Drawer";
import Black from "./src/components/Black";

const App = () => {
  return (
    <View>
      <Header />
      <AlbumList />
      <Bottom />
      <Black />
      <Drawer />
    </View>
  );
};

export default App;
