import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { SearchIcon } from "@/components/ui/icon";
import { ImageBackground } from "@/components/ui/image-background";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { ThemeContext } from "@/contexts/theme-context";
import { Mic } from "lucide-react-native";
import React, { useContext } from "react";

const CustomHeader = ({
  variant = "general",
  title,
  label,
}: {
  variant: "general" | "search";
  title?: string;
  label?: string;
}) => {
  const { colorMode }: any = useContext(ThemeContext);
  return (
    <Box className="bg-background-0 rounded-b-3xl overflow-hidden mb-3">
      <ImageBackground
        source={
          colorMode === "dark"
            ? require("@/assets/images/weather-bg-dark.webp")
            : require("@/assets/images/weather-bg-light.webp")
        }
      >
        <HStack className="p-5 pt-16 gap-6 justify-between">
          <HStack className="justify-between">
            <VStack className="gap-2.5 justify-between">
              <Text className="text-background-700 font-dm-sans-bold text-3xl">
                {title}
              </Text>
            </VStack>
          </HStack>
        </HStack>
        {variant === "search" && (
          <Input
            variant="outline"
            className="border-0 bg-background-50 rounded-xl py-1 px-4 mt-2 mb-5 mx-5"
            size="lg"
          >
            <InputSlot>
              <InputIcon as={SearchIcon} className="text-outline-200" />
            </InputSlot>
            <InputField
              placeholder={label}
              className="placeholder:text-typography-200"
            />
            <InputSlot>
              <InputIcon as={Mic} className="text-outline-200" />
            </InputSlot>
          </Input>
        )}
      </ImageBackground>
    </Box>
  );
};

export default CustomHeader;
