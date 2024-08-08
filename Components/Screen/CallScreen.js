import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { APP_ICONS, data, MESSAGE_LIST_DATA } from "../../context/settings";

const CallScreen = () => {
  return (
    <ScrollView>
      <View style={styles.outline}>
        <Text style={styles.title}>Favorites</Text>
        <TouchableOpacity style={styles.grid} activeOpacity={0.8}>
          <TouchableOpacity style={styles.btn}>
            <Text>{APP_ICONS.HEART}</Text>
          </TouchableOpacity>
          <Text style={[styles.text, { marginVertical: 16 }]}>
            Add to favroutes
          </Text>
        </TouchableOpacity>

        <View style={styles.callCotainer}>
          <Text style={styles.title}>Recent</Text>
          {MESSAGE_LIST_DATA.map((e, i) => {
            return (
              <View
                style={[styles.grid, { justifyContent: "space-between" }]}
                key={i}
              >
                <TouchableOpacity
                  style={[styles.grid, { marginVertical: 6 }]}
                  activeOpacity={0.8}
                >
                  <View>
                    <Image
                      source={{ uri: e.profile_pic }}
                      style={[styles.image, {}]}
                    />
                  </View>
                  <View style={{ marginLeft: 6 }}>
                    <Text style={styles.title}>{e.name}</Text>
                    <View style={styles.grid}>
                      <Text>{APP_ICONS.TRENDING_DOWN}</Text>
                      <Text>Yesterday, 8:24 am</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
                  <Text>{APP_ICONS.PHONE}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outline: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  btn: {
    backgroundColor: "#242424",
    padding: 8,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontWeight: "500",
    color: "#1d1d1d",
    fontSize: 16,
  },
  callCotainer: {
    marginVertical: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export default CallScreen;
