import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { styles } from "./styles";
import {
  Ionicons,
  FontAwesome,
  Foundation,
  SimpleLineIcons
} from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { RootState } from "../../modules/index";
import { connect } from "react-redux";
import {
  setFilters,
  setCampings
} from "../../modules/reducers/campings/actions";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

import { width as dimensionWidth, height as dimensionHeight } from "./styles";
// mock data
import campings from "../../mock/campings";

const mapStateToProps = ({ campings }: RootState) => ({
  campingSpots: campings.spots,
  filters: campings.filters,
  mylocation: campings.mylocation
});

interface CampingsDispatchProps {
  setFilters: typeof setFilters;
  setCampings: typeof setCampings;
}

const mapDispatchToProps: CampingsDispatchProps = {
  setFilters,
  setCampings
};

export interface NavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

type CampingsProps = ReturnType<typeof mapStateToProps> &
  CampingsDispatchProps &
  NavigationProps;

const Campings: React.FC<CampingsProps> = ({
  filters,
  navigation,
  setFilters,
  mylocation,
  setCampings,
  campingSpots
}) => {
  // hooks
  React.useEffect(() => {
    setCampings(campings);
  }); // }, [count]); // 2nd array of useEffect Only re-run the effect if count changes
  // actions
  const handleTab = tabKey => {
    setFilters({ type: tabKey });
  };
  // UI
  const renderHeader = () => {
    const renderTabs = () => (
      <View style={styles.tabs}>
        <View
          style={[styles.tab, filters.type === "all" ? styles.activeTab : null]}
        >
          <Text
            style={[
              styles.tabTitle,
              filters.type === "all" ? styles.activeTabTitle : null
            ]}
            onPress={() => handleTab("all")}
          >
            All Spots
          </Text>
        </View>
        <View
          style={[
            styles.tab,
            filters.type === "tent" ? styles.activeTab : null
          ]}
        >
          <Text
            style={[
              styles.tabTitle,
              filters.type === "tent" ? styles.activeTabTitle : null
            ]}
            onPress={() => handleTab("tent")}
          >
            Tenting
          </Text>
        </View>
        <View
          style={[styles.tab, filters.type === "rv" ? styles.activeTab : null]}
        >
          <Text
            style={[
              styles.tabTitle,
              filters.type === "rv" ? styles.activeTabTitle : null
            ]}
            onPress={() => handleTab("rv")}
          >
            RV Camping
          </Text>
        </View>
      </View>
    );
    return (
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={{ flex: 2, flexDirection: "row" }}>
            <View style={styles.settings}>
              <View style={styles.location}>
                <FontAwesome name="location-arrow" size={14} color="white" />
              </View>
            </View>
            <View style={styles.options}>
              <Text style={{ fontSize: 12, color: "#A5A5A5", marginBottom: 5 }}>
                Detected Location
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "300" }}>
                Northern Islands
              </Text>
            </View>
          </View>
          <View style={styles.settings}>
            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
              <Ionicons name="ios-settings" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        {renderTabs()}
      </View>
    );
  };
  const renderMap = () => {
    const campingMarker = ({ type }) => (
      <View style={[styles.marker, styles[`${type}Marker`]]}>
        {type === "rv" ? (
          <FontAwesome name="truck" size={18} color="black" />
        ) : (
          <Foundation name="mountains" size={18} color="black" />
        )}
      </View>
    );
    const mapSpots =
      filters.type === "all"
        ? campingSpots
        : campingSpots.filter(camping => camping.type === filters.type);
    return (
      <View style={styles.map}>
        <MapView
          style={{
            flex: 1,
            height: dimensionHeight * 0.5,
            width: dimensionWidth
          }}
          showsMyLocationButton
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03
          }}
        >
          <Marker coordinate={mylocation}>
            <View style={styles.myMarker}>
              <View style={styles.myMarkerDot} />
            </View>
          </Marker>

          {mapSpots.map(marker => (
            <Marker key={`marker-${marker.id}`} coordinate={marker.latlng}>
              {campingMarker(marker)}
            </Marker>
          ))}
        </MapView>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView style={styles.container}>{renderMap()}</ScrollView>
    </SafeAreaView>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Campings);
