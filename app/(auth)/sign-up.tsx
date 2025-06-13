import { View, Text, ScrollView } from "react-native";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { useState } from "react";
import { Link } from "expo-router";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ name: "", email: "", password: "" });

  const handleSignUp = () => {
    const errors = {
      name: name ? "" : "Name is required",
      email: email ? "" : "Email is required",
      password: password ? "" : "Password is required",
    };
    setError(errors);

    if (name && email && password) {
      console.log("Registering:", { name, email, password });
      // Add your signup logic here
    }
  };

  return (
    <ScrollView className="flex-1 bg-white p-6">
      <View className="my-8">
        <Text className="text-2xl font-bold text-center">Create Account</Text>
        <Text className="text-sm text-neutral-500 text-center mt-1">
          Sign up to get started
        </Text>
      </View>

      <InputField
        label="Full Name"
        placeholder="John Doe"
        value={name}
        onChangeText={setName}
        error={error.name}
      />

      <InputField
        label="Email"
        placeholder="example@email.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        error={error.email}
      />

      <InputField
        label="Password"
        placeholder="Enter Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        error={error.password}
      />

      <Button title="Sign Up" onPress={handleSignUp} className="mt-4" />

      <Link
                    href="/(auth)/sign-in"
                    className="font-JakartaSemiBold text-[15px] text-general-200 mt-8 text-center"
                  >
                    <Text>Already have an Account? </Text>
                    <Text className="text-primary-500">Log In</Text>
                  </Link>
    </ScrollView>
  );
};

export default SignUp;
