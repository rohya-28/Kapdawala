import { View, Text, ScrollView } from "react-native";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { useState } from "react";
import { Link } from "expo-router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const handleSignIn = () => {
    const newErrors = {
      email: email ? "" : "Email is required",
      password: password ? "" : "Password is required",
    };
    setError(newErrors);

    if (email && password) {
      console.log("Signing in with:", { email, password });
      // Add auth logic here
    }
  };

  return (
    <ScrollView className="flex-1 bg-white p-6">
      {/* Header */}
      <View className="my-8">
        <Text className="text-3xl text-center text-gray-800 font-urbanist">
          Welcome Back
        </Text>
        <Text className="text-sm text-center text-gray-500 mt-2 font-inter">
          Sign in to your account
        </Text>
      </View>

      {/* Inputs */}
      <View className="space-y-5">
        <InputField
          label="Email"
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          error={error.email}
        />

        <InputField
          label="Password"
          placeholder="••••••••"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          error={error.password}
        />
      </View>

      {/* Sign In Button */}
      <Button title="Sign In" onPress={handleSignIn} className="mt-6 bg-blue-600 active:bg-blue-700" />

      {/* Sign Up Link */}
      <Link href="/(auth)/sign-up" className="mt-8 text-center flex-row justify-center items-center">
        <Text className="text-sm text-gray-600 font-inter">Don’t have an account? </Text>
        <Text className="text-sm text-blue-600 font-urbanist">Sign Up</Text>
      </Link>
    </ScrollView>
  );
};

export default SignIn;
