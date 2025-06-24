import {
    TextInput,
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
  } from "react-native";
  
  import { InputFieldProps } from "@/types/type.js";
  
  const InputField = ({
    label,
    icon,
    secureTextEntry = false,
    labelStyle,
    containerStyle,
    inputStyle,
    iconStyle,
    className,
    error, // The error prop
    ...props
  }: InputFieldProps) => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="my-2 w-full">
            <View>
              {label ? (
                <Text className={`text-sm font-urbanist mb-3 ${labelStyle}`}>
                  {label}
                </Text>
              ) : (
                <View style={{ height: 0, opacity: 0 }} /> // Occupies no space if label is empty
              )}
            </View>
            <View
              className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-md border ${
                error ? "border-red-500" : "border-neutral-100"
              } focus:border-primary-500 ${containerStyle}`}
            >
              {icon && (
                <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
              )}
              <TextInput
                className={`rounded-full p-[12px] font-inter text-[15px] flex-1 ${inputStyle} text-left`}
                secureTextEntry={secureTextEntry}
                {...props}
              />
            </View>
            {/* Error message display */}
            {error && (
              <Text className="text-red-500 text-xs mt-1 font-inter">
                {error}
              </Text>
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  };
  
  export default InputField;
  