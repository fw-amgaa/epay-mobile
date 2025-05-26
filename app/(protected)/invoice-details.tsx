import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { Text } from "@/components/ui/text";
import { Toast, ToastTitle, useToast } from "@/components/ui/toast";
import { VStack } from "@/components/ui/vstack";
import { useAuth } from "@/contexts/auth-context";
import { onPaid, qrDecrypt, useBankAccounts } from "@/data/screens/list";
import { Invoice } from "@/data/screens/list/types";
import { getBankName } from "@/lib/bank-codes";
import { currencyFormat } from "@/lib/utils";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ChevronLeftIcon } from "lucide-react-native";
import React from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle, Path } from "react-native-svg";

const AnimatedView = Animated.createAnimatedComponent(Animated.View);

export default function InvoiceDetails({}) {
  const props = useLocalSearchParams();
  const { user } = useAuth();
  const { bankAccounts } = useBankAccounts();

  const [invoice, setInvoice] = React.useState<Invoice | null>(null);

  React.useEffect(() => {
    qrDecrypt(
      `${user?.client?.api_url.replace(/\/message$/, "")}`,
      user?._id!,
      props.qr as string
    ).then((response) => {
      if (response.error) {
        router.back();
        alert("Error decrypting QR code");
        return;
      }

      setInvoice(response.data);
    });
  }, [props.invoice]);

  const toast = useToast();
  const router = useRouter();
  const [selectedAccount, setSelectedAccount] = React.useState<string | null>(
    null
  );
  const [loading, setLoading] = React.useState(false);
  const [isPaid, setIsPaid] = React.useState(false);
  const scale = useSharedValue(0);

  const handlePayment = async () => {
    if (!selectedAccount) {
      toast.show({
        placement: "bottom right",
        render: ({ id }) => (
          <Toast nativeID={id} variant="outline" action="error">
            <ToastTitle>Данс сонгоно уу</ToastTitle>
          </Toast>
        ),
      });
      return;
    }
    setLoading(true);

    const response = await onPaid(
      `${user?.client?.api_url.replace(/\/message$/, "")}`,
      user?._id!,
      invoice?.paymentCode || "",
      selectedAccount
    );

    if (response.error) {
      alert("Error decrypting QR code");
      return;
    }

    setLoading(false);
    setIsPaid(true);
    scale.value = withDelay(200, withSpring(1.1, { damping: 6 }));
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  if (!invoice) return <Text>Something went wrong</Text>;

  return (
    <SafeAreaView>
      <VStack space="lg" className="py-4">
        <Box className="p-4">
          <Button
            onPress={() => router.back()}
            className="w-8"
            variant={"outline"}
          >
            <ChevronLeftIcon color={"red"} />
          </Button>
        </Box>
        <Box className="shadow-md rounded-lg p-4">
          <VStack space="md">
            <HStack className="justify-between">
              <Text size="sm" className="text-muted-foreground">
                Хүлээн авагч:
              </Text>
              <Text size="sm" className="font-bold">
                {invoice.beneficiary.accountName}
              </Text>
            </HStack>
            <HStack className="justify-between">
              <Text size="sm" className="text-muted-foreground">
                Банк:
              </Text>
              <Text size="sm" className="font-bold">
                {getBankName(invoice.beneficiary.bankCode)}
              </Text>
            </HStack>
            <HStack className="justify-between">
              <Text size="sm" className="text-muted-foreground">
                Дансны дугаар:
              </Text>
              <Text size="sm" className="font-bold">
                {invoice.beneficiary.accountNumber}
              </Text>
            </HStack>
            <HStack className="justify-between">
              <Text size="sm" className="text-muted-foreground">
                Үнийн дүн:
              </Text>
              <Text size="sm" className="font-bold">
                {currencyFormat(invoice.amount)}
              </Text>
            </HStack>
            <HStack className="justify-between flex-wrap">
              <Text size="sm" className="text-muted-foreground">
                Гүйлгээний утга:
              </Text>
              <Text size="sm" className="font-bold">
                {invoice.description}
              </Text>
            </HStack>

            <VStack className="mt-4">
              <Text size="sm" className="text-muted-foreground mb-2">
                Төлбөр төлөх данс сонгох:
              </Text>
              <Select
                selectedValue={selectedAccount}
                onValueChange={setSelectedAccount}
              >
                <SelectTrigger variant="outline" size="md">
                  <SelectInput placeholder="Данс сонгох" />
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    {bankAccounts.map((account) => (
                      <SelectItem
                        label={`${account.accountName} (${account.accountNumber})`}
                        value={account._id}
                        key={account._id}
                      />
                    ))}
                  </SelectContent>
                </SelectPortal>
              </Select>
            </VStack>
          </VStack>
        </Box>

        <AnimatedView style={[animatedStyle]}>
          <View className="items-center justify-center h-40 gap-4">
            <Svg height="50" width="50" viewBox="0 0 52 52" fill="green">
              <Circle cx="26" cy="26" r="25" stroke="white" strokeWidth="2" />
              <Path
                fill="green"
                stroke="white"
                strokeWidth="4"
                d="M14 27l8 8 16-16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <Text className="text-green-500">Төлбөр амжилттай төлөгдлөө!</Text>
          </View>
        </AnimatedView>

        <Box className="p-4 mt-4">
          {!isPaid ? (
            <Button
              disabled={loading}
              onPress={handlePayment}
              variant="solid"
              size="lg"
              className="w-full"
            >
              {loading ? (
                <Spinner />
              ) : (
                <Text className="text-white">Төлбөр төлөх</Text>
              )}
            </Button>
          ) : (
            <Button
              onPress={() => router.replace("/")}
              variant="solid"
              size="lg"
              className="w-full"
            >
              <Text className="text-white">Дуусгах</Text>
            </Button>
          )}
        </Box>
      </VStack>
    </SafeAreaView>
  );
}
