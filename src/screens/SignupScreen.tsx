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

export default function SignupScreen() {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Retrieve nav state or reset
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
                Create Account
              </Text>
              <Text className="text-lg text-slate-500">
                Join AwakiFarmer to start farming smarter.
              </Text>
            </View>

            {/* Form */}
            <View className="space-y-6">
              <Input label="Full Name" placeholder="John Doe" />

              <Input
                label="Phone Number"
                placeholder="+254 700 000 000"
                keyboardType="phone-pad"
              />

              <Input label="Farm Location" placeholder="e.g. Nakuru, Kenya" />

              <Input
                label="Password"
                placeholder="Create a password"
                secureTextEntry
              />

              <Button
                onPress={handleSignup}
                isLoading={loading}
                className="mt-4"
              >
                Create Account
              </Button>

              <View className="flex-row justify-center mt-4">
                <Text className="text-slate-500">
                  Already have an account?{" "}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text className="text-green-600 font-bold">Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
