import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const { width, height } = Dimensions.get("window");

const SQUARE_SIZE = width * 0.7;
const squareX = (width - SQUARE_SIZE) / 2;
const squareY = (height - SQUARE_SIZE) / 2;

const Overlay = () => {
  return (
    <>
      {/* Top */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: squareY,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      {/* Bottom */}
      <View
        style={{
          position: "absolute",
          top: squareY + SQUARE_SIZE,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      {/* Left */}
      <View
        style={{
          position: "absolute",
          top: squareY,
          left: 0,
          width: squareX,
          height: SQUARE_SIZE,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      {/* Right */}
      <View
        style={{
          position: "absolute",
          top: squareY,
          right: 0,
          width: squareX,
          height: SQUARE_SIZE,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      {/* Border for focus area */}
      <View
        style={{
          position: "absolute",
          top: squareY,
          left: squareX,
          width: SQUARE_SIZE,
          height: SQUARE_SIZE,
          borderWidth: 2,
          borderColor: "#fff",
          borderRadius: 8,
        }}
      />
    </>
  );
};

export default Overlay;
