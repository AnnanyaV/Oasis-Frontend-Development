import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import UploadButton from "../components/UploadButton";
import BackArrow from "../components/BackArrow";
import Next from "../components/Next";
export default function PostOptions() {
  return (
    <View>
      <LinearGradient
        colors={["#414066", "#91BDC0", "#91BDC0"]}
        locations={[0, 0.9, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.background}>
          <BackArrow></BackArrow>
          <Text style={styles.postText}>New Visual</Text>
          <UploadButton title={"Select Images or Videos"}></UploadButton>
          <Next title={"NEXT"}></Next>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    flexWrap: "wrap",
  },
  postText: {
    position: "absolute",
    width: 123,
    height: 26,
    left: 146,
    top: 65,
    fontFamily: "Montserrat-Bold",
    fontSize: 21,
    color: "#FFFFFF",
  },
  next: {
    top: 10,
  },
});
