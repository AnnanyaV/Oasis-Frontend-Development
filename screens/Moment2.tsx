import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import UploadButton from "../components/UploadButton";
import BackArrow from "../components/BackArrow";
import Next from "../components/Next";
import VisualUpload from "../components/VisualUpload";
import AddAudioButton from "../components/AddAudioButton";
import AddCaption from "../components/AddCaption";
import DeletePost from "../components/DeletePost";
import RightArrow from "../components/RightArrow";
export default function Moment2() {
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
          <VisualUpload></VisualUpload>
          <RightArrow></RightArrow>
          <AddAudioButton></AddAudioButton>
          <AddCaption></AddCaption>
          <DeletePost title={"Delete my post after 24 hours"}></DeletePost>
          <Next title={"POST"}></Next>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  postText: {
    position: "absolute",
    width: 123,
    height: 26,
    left: 126,
    top: 65,
    fontFamily: "Montserrat-Bold",
    fontSize: 21,
    color: "#FFFFFF",
  },
});
