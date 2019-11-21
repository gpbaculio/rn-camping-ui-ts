import React from "react";
import {
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  SafeAreaView
} from "react-native";
import { connect } from "react-redux";
import { MapView } from "expo";
import {
  Ionicons,
  FontAwesome,
  Foundation,
  SimpleLineIcons
} from "@expo/vector-icons";

import {
  setLocation,
  setFilters,
  setCampings
} from "../../modules/reducers/campings/actions";
import * as mock from "../../mock/campings";
import { styles } from "./styles";

class Campings extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };

  // componentDidMount() {
  //   this.props.setCampings(mock.campings);
  // }

  // handleTab = tabKey => {
  //   this.props.setFilters({ type: tabKey });
  // };

  // renderHeader() {
  //   return (
  //     <View style={styles.headerContainer}>
  //       <View style={styles.header}>
  //         <View style={{ flex: 2, flexDirection: "row" }}>
  //           <View style={styles.settings}>
  //             <View style={styles.location}>
  //               <FontAwesome name="location-arrow" size={14} color="white" />
  //             </View>
  //           </View>
  //           <View style={styles.options}>
  //             <Text style={{ fontSize: 12, color: "#A5A5A5", marginBottom: 5 }}>
  //               Detected Location
  //             </Text>
  //             <Text style={{ fontSize: 14, fontWeight: "300" }}>
  //               Northern Islands
  //             </Text>
  //           </View>
  //         </View>
  //         <View style={styles.settings}>
  //           <TouchableOpacity
  //             onPress={() => this.props.navigation.navigate("Settings")}
  //           >
  //             <Ionicons name="ios-settings" size={24} color="black" />
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //       {this.renderTabs()}
  //     </View>
  //   );
  // }

  // renderMap() {
  //   const campingMarker = ({ type }) => (
  //     <View style={[styles.marker, styles[`${type}Marker`]]}>
  //       {type === "rv" ? (
  //         <FontAwesome name="truck" size={18} color="#FFF" />
  //       ) : (
  //         <Foundation name="mountains" size={18} color="#FFF" />
  //       )}
  //     </View>
  //   );
  //   const { filters, campings } = this.props;
  //   const mapSpots =
  //     filters.type === "all"
  //       ? campings
  //       : campings.filter(camping => camping.type === filters.type);

  //   return (
  //     <View style={styles.map}>
  //       <MapView
  //         style={{ flex: 1, height: height * 0.5, width }}
  //         showsMyLocationButton
  //         initialRegion={{
  //           latitude: 37.78825,
  //           longitude: -122.4324,
  //           latitudeDelta: 0.03,
  //           longitudeDelta: 0.03
  //         }}
  //       >
  //         <Marker coordinate={this.props.mylocation}>
  //           <View style={styles.myMarker}>
  //             <View style={styles.myMarkerDot} />
  //           </View>
  //         </Marker>

  //         {mapSpots.map(marker => (
  //           <Marker key={`marker-${marker.id}`} coordinate={marker.latlng}>
  //             {campingMarker(marker)}
  //           </Marker>
  //         ))}
  //       </MapView>
  //     </View>
  //   );
  // }

  // renderTabs() {
  //   const { filters } = this.props;

  //   return (
  //     <View style={styles.tabs}>
  //       <View
  //         style={[styles.tab, filters.type === "all" ? styles.activeTab : null]}
  //       >
  //         <Text
  //           style={[
  //             styles.tabTitle,
  //             filters.type === "all" ? styles.activeTabTitle : null
  //           ]}
  //           onPress={() => this.handleTab("all")}
  //         >
  //           All Spots
  //         </Text>
  //       </View>
  //       <View
  //         style={[
  //           styles.tab,
  //           filters.type === "tent" ? styles.activeTab : null
  //         ]}
  //       >
  //         <Text
  //           style={[
  //             styles.tabTitle,
  //             filters.type === "tent" ? styles.activeTabTitle : null
  //           ]}
  //           onPress={() => this.handleTab("tent")}
  //         >
  //           Tenting
  //         </Text>
  //       </View>
  //       <View
  //         style={[styles.tab, filters.type === "rv" ? styles.activeTab : null]}
  //       >
  //         <Text
  //           style={[
  //             styles.tabTitle,
  //             filters.type === "rv" ? styles.activeTabTitle : null
  //           ]}
  //           onPress={() => this.handleTab("rv")}
  //         >
  //           RV Camping
  //         </Text>
  //       </View>
  //     </View>
  //   );
  // }

  // renderList() {
  //   const { filters, campings } = this.props;
  //   const mapSpots =
  //     filters.type === "all"
  //       ? campings
  //       : campings.filter(camping => camping.type === filters.type);

  //   return mapSpots.map(camping => {
  //     return (
  //       <View key={`camping-${camping.id}`} style={styles.camping}>
  //         <ImageBackground
  //           style={styles.campingImage}
  //           imageStyle={styles.campingImage}
  //           source={{ uri: camping.image }}
  //         />

  //         <View style={styles.campingDetails}>
  //           <View
  //             style={{
  //               flex: 1,
  //               flexDirection: "column",
  //               justifyContent: "center"
  //             }}
  //           >
  //             <Text style={{ fontSize: 14, fontWeight: "bold" }}>
  //               {camping.name}
  //             </Text>
  //             <Text style={{ fontSize: 12, color: "#A5A5A5", paddingTop: 5 }}>
  //               {camping.description}
  //             </Text>
  //           </View>
  //           <View style={{ flex: 1, flexDirection: "row" }}>
  //             <View style={styles.campingInfo}>
  //               <FontAwesome name="star" color="#FFBA5A" size={12} />
  //               <Text style={{ marginLeft: 4, color: "#FFBA5A" }}>
  //                 {camping.rating}
  //               </Text>
  //             </View>
  //             <View style={styles.campingInfo}>
  //               <FontAwesome name="location-arrow" color="#FF7657" size={12} />
  //               <Text style={{ marginLeft: 4, color: "#FF7657" }}>
  //                 {camping.distance} miles
  //               </Text>
  //             </View>
  //             <View style={styles.campingInfo}>
  //               <Ionicons name="md-pricetag" color="black" size={12} />
  //               <Text style={{ marginLeft: 4, color: "black" }}>
  //                 {camping.price}
  //               </Text>
  //             </View>
  //           </View>
  //         </View>
  //         <View style={{ flex: 0.2, justifyContent: "center" }}>
  //           <SimpleLineIcons
  //             name="options-vertical"
  //             color="#A5A5A5"
  //             size={24}
  //           />
  //         </View>
  //       </View>
  //     );
  //   });
  // }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>asd</Text>
      </SafeAreaView>
    );
  }
}

// const moduleState = state => ({
//   campings: state.campings.spots,
//   filters: state.campings.filters,
//   mylocation: state.campings.mylocation
// });

// const moduleActions = {
//   setLocation,
//   setCampings,
//   setFilters
// };

export default Campings;
