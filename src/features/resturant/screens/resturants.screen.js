import React from "react";
import { StatusBar, StyleSheet, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { ResturantInfo } from "../components/resturant-info-component";

export const ResturantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.list}>
        <ResturantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: "transparent",
  },
  list: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
