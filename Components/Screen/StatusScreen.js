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

const StatusScreen = () => {
  const data = [
    {
      name: "Manual Evans",
      images: [
        {
          url: "https://e0.pxfuel.com/wallpapers/105/23/desktop-wallpaper-compromised-character-gaming-profile-dark-cute-cartoon-boys-thumbnail.jpg",
          timeStamp: "12:00",
        },
      ],
    },
    {
      name: "Jessica Adams",
      images: [
        {
          url: "https://images.pexels.com/photos/1164183/pexels-photo-1164183.jpeg",
          timeStamp: "12:15",
        },
      ],
    },
    {
      name: "Michael Johnson",
      images: [
        {
          url: "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg",
          timeStamp: "12:30",
        },
      ],
    },
    {
      name: "Sarah Brown",
      images: [
        {
          url: "https://images.pexels.com/photos/1128062/pexels-photo-1128062.jpeg",
          timeStamp: "12:45",
        },
      ],
    },
    {
      name: "David Wilson",
      images: [
        {
          url: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
          timeStamp: "13:00",
        },
      ],
    },
    {
      name: "Emily Davis",
      images: [
        {
          url: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
          timeStamp: "13:15",
        },
      ],
    },
    {
      name: "Daniel Garcia",
      images: [
        {
          url: "https://images.pexels.com/photos/1166558/pexels-photo-1166558.jpeg",
          timeStamp: "13:30",
        },
      ],
    },
    {
      name: "Olivia Martinez",
      images: [
        {
          url: "https://images.pexels.com/photos/3584005/pexels-photo-3584005.jpeg",
          timeStamp: "13:45",
        },
      ],
    },
    {
      name: "James Lee",
      images: [
        {
          url: "https://images.pexels.com/photos/1646734/pexels-photo-1646734.jpeg",
          timeStamp: "14:00",
        },
      ],
    },
    {
      name: "Sophia Anderson",
      images: [
        {
          url: "https://images.pexels.com/photos/1170971/pexels-photo-1170971.jpeg",
          timeStamp: "14:15",
        },
      ],
    },
    {
      name: "William Taylor",
      images: [
        {
          url: "https://images.pexels.com/photos/3658036/pexels-photo-3658036.jpeg",
          timeStamp: "14:30",
        },
      ],
    },
    {
      name: "Ava Thomas",
      images: [
        {
          url: "https://images.pexels.com/photos/3729173/pexels-photo-3729173.jpeg",
          timeStamp: "14:45",
        },
        {
          url: "https://images.pexels.com/photos/3729173/pexels-photo-3729173.jpeg",
          timeStamp: "14:45",
        },
        {
          url: "https://images.pexels.com/photos/3729173/pexels-photo-3729173.jpeg",
          timeStamp: "14:45",
        },
      ],
    },
  ];

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
