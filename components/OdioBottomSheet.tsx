import React, { useRef } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { BlurView } from "expo-blur";
import RBSheet from "react-native-raw-bottom-sheet";

export default function OdioBottomSheet({ refRBSheet, close }: any) {
    return (
        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={false}
            closeOnPressMask={true}
            customStyles={{
                container: {
                    backgroundColor: "transparent",
                },
                wrapper: {
                    backgroundColor: "transparent",
                },
            }}
        >
            <BlurView
                intensity={100}
                style={[StyleSheet.absoluteFill, styles.theme]}
            >
                <View style={styles.theme}></View>
            </BlurView>
        </RBSheet>
    );
}

const styles = StyleSheet.create({
    theme: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        height: "100%",
        width: "100%",
        backgroundColor: "#414066aa",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
});
