import React from "react";
import { Provider } from "react-redux";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import * as Icon from "@expo/vector-icons";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import AppNavigator from "./navigation/AppNavigator";

import store from "./modules";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

interface AppProps {
  skipLoadingScreen: boolean;
}

const App: React.FC<AppProps> = () => {
  const [isLoadingComplete, setIsLoadingComplete] = React.useState(false);
  const loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
      })
    ]);
  };
  const handleFinishLoading = () => setIsLoadingComplete(true);
  const handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={handleFinishLoading}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </Provider>
    );
  }
};

export default App;
