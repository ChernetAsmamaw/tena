import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  CloudSun,
  Droplets,
  Sprout,
  AlertTriangle,
  Menu,
  Bell,
} from "lucide-react-native";
import { cn } from "../lib/utils";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {/* Header */}
        <View className="px-6 py-4 flex-row justify-between items-center bg-white border-b border-slate-100">
          <View className="flex-row items-center space-x-3">
            <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center">
              <Text className="text-green-700 font-bold text-lg">JD</Text>
            </View>
            <View>
              <Text className="text-xs text-slate-500 font-medium">
                Good Morning,
              </Text>
              <Text className="text-base font-bold text-slate-900">
                John Doe
              </Text>
            </View>
          </View>
          <View className="flex-row space-x-3">
            <TouchableOpacity className="p-2 bg-slate-50 rounded-full">
              <Bell size={24} color="#64748b" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-slate-50 rounded-full">
              <Menu size={24} color="#64748b" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Weather Card */}
        <View className="mx-6 mt-6 p-6 bg-green-600 rounded-3xl">
          <View className="flex-row justify-between items-start">
            <View>
              <Text className="text-green-100 text-sm font-medium mb-1">
                Nakuru, Kenya
              </Text>
              <Text className="text-white text-4xl font-bold">24°C</Text>
              <Text className="text-green-100 mt-1">Partly Cloudy</Text>
            </View>
            <CloudSun size={48} color="white" />
          </View>
          <View className="mt-6 flex-row justify-between bg-green-700/50 p-4 rounded-xl">
            <View className="items-center">
              <Text className="text-green-200 text-xs mb-1">Humidity</Text>
              <Text className="text-white font-bold">65%</Text>
            </View>
            <View className="items-center">
              <Text className="text-green-200 text-xs mb-1">Rain</Text>
              <Text className="text-white font-bold">12%</Text>
            </View>
            <View className="items-center">
              <Text className="text-green-200 text-xs mb-1">Wind</Text>
              <Text className="text-white font-bold">8 m/s</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="px-6 mt-8">
          <Text className="text-lg font-bold text-slate-900 mb-4">
            Farm Overview
          </Text>
          <View className="flex-row flex-wrap justify-between">
            <ActionCard
              title="Soil Status"
              value="Optimal"
              icon={Droplets}
              color="text-blue-500"
              bg="bg-blue-100"
            />
            <ActionCard
              title="Plant Health"
              value="Risk Detected"
              icon={AlertTriangle}
              color="text-orange-500"
              bg="bg-orange-100"
              alert
            />
            <ActionCard
              title="Growth Stage"
              value="Vegetative"
              icon={Sprout}
              color="text-green-500"
              bg="bg-green-100"
            />
            <ActionCard
              title="Next Harvest"
              value="24 Days"
              icon={CloudSun}
              color="text-yellow-500"
              bg="bg-yellow-100"
            />
          </View>
        </View>

        {/* AI Insight */}
        <View className="mx-6 mt-6 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <View className="flex-row space-x-3 items-center mb-3">
            <View className="w-8 h-8 rounded-full bg-indigo-100 items-center justify-center">
              <Sprout size={16} color="#4f46e5" />
            </View>
            <Text className="font-bold text-slate-900">
              AI Assistant Insight
            </Text>
          </View>
          <Text className="text-slate-600 leading-relaxed text-sm">
            Soil moisture levels dropped by 15% in Zone A. Based on the 3-day
            forecast, you should irrigate tomorrow morning to avoid mild stress
            in your maize crop.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function ActionCard({ title, value, icon: Icon, color, bg, alert }: any) {
  const iconHex = color.includes("blue")
    ? "#3b82f6"
    : color.includes("orange")
      ? "#f97316"
      : color.includes("green")
        ? "#22c55e"
        : "#eab308";

  return (
    <TouchableOpacity className="w-[48%] bg-white p-4 rounded-2xl border border-slate-100 mb-4 shadow-sm">
      <View
        className={cn(
          "w-10 h-10 rounded-full items-center justify-center mb-3",
          bg,
        )}
      >
        <Icon size={20} color={iconHex} />
      </View>
      <Text className="text-slate-500 text-xs font-medium mb-1">{title}</Text>
      <Text
        className={cn(
          "text-lg font-bold",
          alert ? "text-red-500" : "text-slate-900",
        )}
      >
        {value}
      </Text>
    </TouchableOpacity>
  );
}
