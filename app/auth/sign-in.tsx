import { Button, ButtonText } from "@/components/ui/button";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@/components/ui/select";
import { Toast, ToastTitle, useToast } from "@/components/ui/toast";
import { VStack } from "@/components/ui/vstack";
import { useAuth } from "@/contexts/auth-context";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle } from "lucide-react-native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Keyboard } from "react-native";
import { z } from "zod";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
  clientKey: z.string(),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

export default function SignIn() {
  const { signIn, clients } = useAuth();

  const {
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "Odbayar",
      password: "10234",
      clientKey: "8b17e1a2-9274-4d68-a265-8300543a9fc1",
    },
  });

  const toast = useToast();
  const [validated, setValidated] = useState({
    usernameValid: true,
    passwordValid: true,
    clientValid: true,
  });

  const onSubmit = async (input: LoginSchemaType) => {
    const response = await signIn(input);

    if (response.customer) {
      toast.show({
        placement: "bottom right",
        render: ({ id }) => {
          return (
            <Toast nativeID={id} variant="outline" action="success">
              <ToastTitle>Logged in successfully!</ToastTitle>
            </Toast>
          );
        },
      });
      reset();
    } else
      toast.show({
        placement: "bottom right",
        render: ({ id }) => {
          return (
            <Toast nativeID={id} variant="outline" action="error">
              <ToastTitle>{response.error}</ToastTitle>
            </Toast>
          );
        },
      });
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };
  return (
    <VStack className="p-6 max-w-[440px] w-full" space="md">
      <VStack className="md:items-center" space="md">
        <VStack>
          <Heading className="md:text-center" size="3xl">
            Нэвтрэх
          </Heading>
        </VStack>
      </VStack>
      <VStack className="w-full">
        <VStack space="xl" className="w-full">
          <FormControl isInvalid={!!errors?.clientKey} className="w-full">
            <FormControlLabel>
              <FormControlLabelText>Харилцагч</FormControlLabelText>
            </FormControlLabel>
            <Select
              onValueChange={(value) => {
                console.log("val", value);
                setValue("clientKey", value);
              }}
            >
              <SelectTrigger>
                <SelectInput placeholder="Сонгох..." />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  {clients.map((client) => (
                    <SelectItem
                      key={client.id}
                      value={
                        client.api_keys.find((keys) => !!keys.status)?.key || ""
                      }
                      label={client.name}
                    />
                  ))}
                </SelectContent>
              </SelectPortal>
            </Select>
            <FormControlError>
              <FormControlErrorIcon as={AlertTriangle} />
              <FormControlErrorText>
                {errors?.clientKey?.message ||
                  (!validated.clientValid && "Client is required")}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <FormControl
            isInvalid={!!errors?.username || !validated.usernameValid}
            className="w-full"
          >
            <FormControlLabel>
              <FormControlLabelText>Хэрэглэгчийн нэр</FormControlLabelText>
            </FormControlLabel>
            <Controller
              defaultValue=""
              name="username"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await loginSchema.parseAsync({ username: value });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    placeholder="Хэрэглэгчийн нэр"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertTriangle} />
              <FormControlErrorText>
                {errors?.username?.message ||
                  (!validated.usernameValid && "username ID not found")}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <FormControl
            isInvalid={!!errors.password || !validated.passwordValid}
            className="w-full"
          >
            <FormControlLabel>
              <FormControlLabelText>Хэрэглэгчийн код</FormControlLabelText>
            </FormControlLabel>
            <Controller
              defaultValue=""
              name="password"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await loginSchema.parseAsync({ password: value });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    type={showPassword ? "text" : "password"}
                    placeholder="Хэрэглэгчийн код"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                  <InputSlot onPress={handleState} className="pr-3">
                    <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                  </InputSlot>
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertTriangle} />
              <FormControlErrorText>
                {errors?.password?.message ||
                  (!validated.passwordValid && "Password was incorrect")}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </VStack>
        <VStack className="w-full my-7" space="lg">
          <Button className="w-full" onPress={handleSubmit(onSubmit)}>
            <ButtonText className="font-medium">Нэвтрэх</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
}
