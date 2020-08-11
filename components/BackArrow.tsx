import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function BackArrow(props: any) {
  return (
    <TouchableOpacity>
      <View style={styles.uploadButton}>
        <Image
          style={styles.arrow}
          source={require("../assets/images/backArrow.png")}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  uploadButton: {
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",

    left: 13.67,
    top: 51.33,
    paddingTop: 10,

    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.11);
    borderRadius: 35,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  arrow: {
    tintColor: "#FFFFFF",
  },
});
