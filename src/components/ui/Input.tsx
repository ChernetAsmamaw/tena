import React from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";
import { cn } from "../../lib/utils";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  className?: string;
  inputClassName?: string;
}

export const Input = ({
  label,
  error,
  className,
  inputClassName,
  ...props
}: InputProps) => {
  return (
    <View className={cn("space-y-2", className)}>
      {label && (
        <Text className="text-sm font-medium text-slate-700 ml-1">{label}</Text>
      )}
      <TextInput
        placeholderTextColor="#94a3b8"
        className={cn(
          "w-full h-14 px-4 bg-white border border-slate-200 rounded-2xl text-base text-slate-900",
          "focus:border-green-500 focus:bg-green-50/10",
          error && "border-red-500 bg-red-50/10",
          inputClassName,
        )}
        {...props}
      />
      {error && <Text className="text-xs text-red-500 ml-1">{error}</Text>}
    </View>
  );
};
