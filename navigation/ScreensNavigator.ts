import { createStackNavigator } from "react-navigation-stack";
import { Campings } from "../screens/Campings";
import { Settings } from "../screens/Settings";

const ScreensNavigation = createStackNavigator({
  Campings,
  Settings
});

export default ScreensNavigation;
