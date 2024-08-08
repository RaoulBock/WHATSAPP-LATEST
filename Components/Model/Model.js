import React from "react";
import { Modal, View, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Model = ({ visible, onRequestClose, children, customHeight }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View style={styles.overlay}></View>
      <View style={[styles.containerVIew, { height: customHeight }]}>
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerVIew: {
    backgroundColor: "white",
    bottom: 0,
    position: "absolute",
    width: "100%",
    height: height,
    zIndex: 2,
  },
  overlay: {
    backgroundColor: "#404040b8",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
});

export default Model;
