import { View, Text, ScrollView } from "react-native";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { useState } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

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
      // Add your signup logic here (e.g., API call)
      // On successful signup, you might navigate the user:
      // router.push('/home');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} className="p-6">
        {/* Header Section */}
        <View className="mb-10">
          <Text className="text-3xl font-urbanist text-center text-gray-800 tracking-tight">
            Create Your Account
          </Text>
          <Text className="text-base text-center font-inter text-gray-500 mt-2 leading-snug">
            Sign up to get started on your journey
          </Text>
        </View>

        {/* Input Fields Section */}
        <View className="space-y-5  ">
          <InputField
            label="Full Name"
            placeholder="Enter Name"
            value={name}
            onChangeText={setName}
            error={error.name}
            className=""
          />

          <InputField
            label="Email Address"
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            error={error.email}
          />

          <InputField
            label="Password"
            placeholder="Enter a strong password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            error={error.password}
          />
        </View>

        {/* Sign Up Button */}
        <Button title="Sign Up" onPress={handleSignUp} className="mt-8 bg-blue-600 active:bg-blue-700" />

        {/* Login Link */}
        <Link
          href="/(auth)/sign-in"
          className="mt-8 text-center flex-row justify-center items-center"
        >
          <Text className="text-sm text-gray-600 font-inter">
            Already have an account?{" "}
          </Text>
          <Text className="text-sm text-blue-600 font-urbanist">
            Log In
          </Text>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;