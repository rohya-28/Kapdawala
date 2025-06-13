import { View, Text, Image, ScrollView } from "react-native";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const handleSignIn = () => {
    if (!email) setError((prev) => ({ ...prev, email: "Email is required" }));
    if (!password)
      setError((prev) => ({ ...prev, password: "Password is required" }));
    if (email && password) {
      console.log("Signing in with:", { email, password });
      // add your auth logic here
    }
  };

  return (
    <ScrollView className="flex-1 bg-white p-6">
      <View className="my-8">
        <Text className="text-2xl font-bold text-center">Welcome Back</Text>
        <Text className="text-sm text-neutral-500 text-center mt-1">
          Sign in to your account
        </Text>
      </View>

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
        placeholder="••••••••"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        error={error.password}
      />

      <Button title="Sign In" onPress={handleSignIn} className="mt-4" />

      <Text className="text-center mt-6 text-sm">
        Don't have an account?{" "}
        <Text className="text-blue-500 underline">Sign Up</Text>
      </Text>
    </ScrollView>
  );
};

export default SignIn;
