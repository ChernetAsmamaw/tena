import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }, 1500);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="flex-1 px-8 pt-4 pb-8">
            {/* Header */}
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="w-10 h-10 items-center justify-center rounded-full bg-slate-100 mb-8"
            >
              <ArrowLeft size={24} color="#0f172a" />
            </TouchableOpacity>

            <View className="mb-10">
              <Text className="text-3xl font-bold text-slate-900 mb-2">
                Welcome Back
              </Text>
              <Text className="text-lg text-slate-500">
                Sign in to continue to your farm dashboard.
              </Text>
            </View>

            {/* Form */}
            <View className="space-y-6">
              <Input
                label="Phone Number or Email"
                placeholder="+254 700 000 000"
                autoCapitalize="none"
                keyboardType="email-address"
              />

              <View>
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  secureTextEntry
                />
                <TouchableOpacity className="self-end mt-2">
                  <Text className="text-green-600 font-semibold">
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>

              <Button
                onPress={handleLogin}
                isLoading={loading}
                className="mt-4"
              >
                Sign In
              </Button>

              <View className="flex-row justify-center mt-4">
                <Text className="text-slate-500">Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                  <Text className="text-green-600 font-bold">Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
