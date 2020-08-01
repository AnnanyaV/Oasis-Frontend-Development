import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import PostOptions from "./screens/PostOptions";
import LoadingPage from "./screens/LoadingPage";
import Moment from "./screens/Moment";
import Moment2 from "./screens/Moment2";
import Moment3 from "./screens/Moment3";
import Moment4 from "./screens/Moment4";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/* <Navigation colorScheme={colorScheme} />
        <StatusBar /> */}
        <Moment4></Moment4>
      </SafeAreaProvider>
    );
  }
}
