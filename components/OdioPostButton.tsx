import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function OdioPostButton(props: any) {
  return (
    <TouchableOpacity>
      <View style={styles.uploadButton}>
        <Text style={styles.uploadText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  uploadButton: {
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    width: 256,
    height: 53,
    left: 59,
    top: 664,
    flexDirection: "row",
    backgroundColor: "#85FFD8",
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.11);
    borderRadius: 35,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  uploadText: {
    fontFamily: "Montserrat-Bold",
    fontSize: 21,
    color: "#000000",
    fontWeight: "bold",
    lineHeight: 22,
    top: 2,
  },
});
