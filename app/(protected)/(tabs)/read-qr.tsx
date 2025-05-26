import { decryptQr } from "@/data/screens/qr-code";
import { useIsFocused } from "@react-navigation/native";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Overlay from "./overlay";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/auth-context";
import { qrDecrypt } from "@/data/screens/list";

const ReadQR = () => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-center text-base text-gray-700 mb-4">
          We need your permission to show the camera
        </Text>
        <Pressable
          onPress={requestPermission}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          <Text className="text-white font-semibold">Grant Permission</Text>
        </Pressable>
      </View>
    );
  }

  const handleBarCodeScanned = async ({ type, data }: any) => {
    router.push({
      pathname: "/invoice-details",
      params: { qr: data },
    });
  };

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  return (
    <View className="relative flex-1 bg-background-0">
      {isFocused ? (
        <CameraView
          style={{ flex: 1 }}
          // className="flex-1 bg-background-100"
          facing={facing}
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        >
          <Overlay />

          {loading && <Text className="">Decrypting QR...</Text>}
          <View className="absolute bottom-10 w-full px-4 flex flex-row justify-between">
            <Pressable
              onPress={toggleCameraFacing}
              className="bg-white px-4 py-2 rounded-lg shadow"
            >
              <Text className="text-black font-semibold">
                {facing === "back" ? "Front" : "Back"} Camera
              </Text>
            </Pressable>
            {scanned && (
              <Pressable
                onPress={() => setScanned(false)}
                className="bg-white px-4 py-2 rounded-lg shadow"
              >
                <Text className="text-black font-semibold">Scan Again</Text>
              </Pressable>
            )}
          </View>
        </CameraView>
      ) : (
        <Text>not focused for some reason</Text>
      )}
    </View>
  );
};

export default ReadQR;
