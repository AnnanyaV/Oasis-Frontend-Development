import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function DeletePost(props: any) {
  return (
    <TouchableOpacity>
      <View style={styles.visualButton}>
        <Text style={styles.visualPostText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  visualButton: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: 265,
    height: 46,
    left: 55,
    top: 536,

    backgroundColor: "rgba(65, 64, 102, 0.21)",
    // boxShadow: 0px 4px 4px rgba(0, 0, 0, 0.11);
    borderRadius: 35,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  visualPostText: {
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
    color: "#FFFFFF",
  },
});
