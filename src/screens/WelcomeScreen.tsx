import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  SafeAreaView,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Sprout, Wifi, ScanLine } from "lucide-react-native";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";

const { width } = Dimensions.get("window");

const SLIDES = [
  {
    id: "1",
    title: "AI Farm Advisor",
    description:
      "Your personal agronomist in your pocket. Get instant answers to farming questions 24/7.",
    icon: Sprout,
    iconColor: "#16a34a", // green-600
    bg: "bg-green-100",
  },
  {
    id: "2",
    title: "Real-Time IoT",
    description:
      "Monitor soil moisture, temperature, and nutrients with affordable sensors.",
    icon: Wifi,
    iconColor: "#2563eb", // blue-600
    bg: "bg-blue-100",
  },
  {
    id: "3",
    title: "Crop Doctor",
    description:
      "Snap a photo to detect diseases instantly and get treatment advice.",
    icon: ScanLine,
    iconColor: "#ea580c", // orange-600
    bg: "bg-orange-100",
  },
];

export default function WelcomeScreen() {
  const navigation = useNavigation<any>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollToNext = () => {
    if (currentIndex < SLIDES.length - 1) {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate("Signup");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        <FlatList
          data={SLIDES}
          renderItem={({ item }) => (
            <View
              style={{ width }}
              className="flex-1 items-center justify-center px-8"
            >
              <View
                className={cn(
                  "w-40 h-40 rounded-full items-center justify-center mb-12",
                  item.bg,
                )}
              >
                <item.icon size={80} color={item.iconColor} />
              </View>
              <Text className="text-3xl font-bold text-slate-900 text-center mb-4">
                {item.title}
              </Text>
              <Text className="text-lg text-slate-500 text-center leading-relaxed px-4">
                {item.description}
              </Text>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            },
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />

        <View className="px-8 pb-8 space-y-8">
          {/* Paginator */}
          <View className="flex-row justify-center space-x-2 h-4 items-center">
            {SLIDES.map((_, i) => {
              const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
              const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [10, 30, 10],
                extrapolate: "clamp",
              });
              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.3, 1, 0.3],
                extrapolate: "clamp",
              });

              return (
                <Animated.View
                  key={i}
                  style={{ width: dotWidth, opacity }}
                  className="h-2.5 rounded-full bg-green-600 mx-1"
                />
              );
            })}
          </View>

          {/* Actions */}
          <View className="space-y-4">
            <Button onPress={scrollToNext}>
              {currentIndex === SLIDES.length - 1 ? "Get Started" : "Next"}
            </Button>
            {currentIndex !== SLIDES.length - 1 && (
              <Button
                variant="ghost"
                onPress={() => navigation.navigate("Login")}
              >
                Skip to Login
              </Button>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
