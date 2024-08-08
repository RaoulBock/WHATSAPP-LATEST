import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { data } from "../../context/settings";

const StatusScreen = () => {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,

      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView>
      <View style={styles.outline}>
        <TouchableOpacity
          style={styles.grid}
          activeOpacity={0.8}
          onPress={pickImage}
        >
          <Image
            source={{
              uri: "https://e0.pxfuel.com/wallpapers/105/23/desktop-wallpaper-compromised-character-gaming-profile-dark-cute-cartoon-boys-thumbnail.jpg",
            }}
            style={styles.image}
          />
          <View style={{ marginLeft: 6 }}>
            <Text style={styles.title}>My status</Text>
            <Text style={styles.text}>Tap to add status update</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.statusContainer}>
          <Text style={[styles.text, { marginVertical: 16 }]}>
            Recent updates ({data.length})
          </Text>

          <View>
            {data.map((e, i) => {
              const hasImages = e.images.length > 0;
              const imageUrl = hasImages ? e.images[0].url : "";
              const imageCount = e.images.length;

              return (
                <TouchableOpacity
                  key={i}
                  style={[styles.grid, { marginVertical: 6 }]}
                  activeOpacity={0.8}
                >
                  <View style={hasImages && styles.imageContainerWithBorder}>
                    <Image
                      source={{ uri: imageUrl }}
                      style={[styles.image, {}]}
                    />
                    {/* {imageCount > 1 && (
                      <View style={styles.imageCountContainer}>
                        <Text style={styles.imageCountText}>{imageCount}</Text>
                      </View>
                    )} */}
                  </View>
                  <View style={{ marginLeft: 6 }}>
                    <Text style={styles.title}>{e.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outline: {
    margin: 10,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: "hidden",
  },
  imageContainerWithBorder: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#25D366", // WhatsApp green color
    overflow: "hidden",
  },
  //   imageCountContainer: {
  //     position: "absolute",
  //     bottom: 0,
  //     right: 0,
  //     backgroundColor: "rgba(0, 0, 0, 0.6)",
  //     borderRadius: 12,
  //     paddingHorizontal: 6,
  //     paddingVertical: 2,
  //     zIndex: 9,
  //   },
  //   imageCountText: {
  //     color: "#fff",
  //     fontSize: 12,
  //     fontWeight: "bold",
  //   },
  grid: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
  },
});

export default StatusScreen;
