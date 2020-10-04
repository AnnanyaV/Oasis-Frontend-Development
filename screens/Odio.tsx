import React, { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BackArrow from "../components/BackArrow";
import AddAudioButton_2 from "../components/AddAudio_odio_Button";
import AddCoverImage from "../components/AddCoverImage";
import AddCaption_odio from "../components/AddCaption_odio";
import DeletePost from "../components/DeletePost";
import OdioPostButton from "../components/OdioPostButton";
import OdioBottomSheet from "../components/OdioBottomSheet";

interface ref {
    current: any;
}

export default function Odio() {
    const refRBSheet: ref = useRef(null);
    return (
        <View>
            <LinearGradient colors={["#726984", "#EE736A"]}>
                <View style={styles.background}>
                    <BackArrow></BackArrow>
                    <Text style={styles.postText}>New Audio</Text>
                    <AddAudioButton_2
                        onPress={() => refRBSheet.current.open()}
                    />
                    <AddCoverImage />
                    <AddCaption_odio />
                    <DeletePost title={"Delete my post after 24 hours"} />
                    <OdioPostButton title={"POST"} />
                </View>
            </LinearGradient>
            <OdioBottomSheet
                refRBSheet={refRBSheet}
                close={() => refRBSheet.current.close()}
            />
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
});
