import React from "react";
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import { cn } from "../../lib/utils";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  labelClassName?: string;
  isLoading?: boolean;
}

export const Button = ({
  children,
  className,
  variant = "primary",
  size = "default",
  labelClassName,
  isLoading,
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "flex-row items-center justify-center rounded-2xl active:opacity-80";

  const variants = {
    primary: "bg-green-600",
    secondary: "bg-yellow-400",
    outline: "border-2 border-green-600 bg-transparent",
    ghost: "bg-transparent",
  };

  const sizes = {
    default: "h-14 px-4",
    sm: "h-10 px-3",
    lg: "h-16 px-8",
  };

  const textBaseStyles = "font-bold text-center";

  const textVariants = {
    primary: "text-white",
    secondary: "text-slate-900",
    outline: "text-green-600",
    ghost: "text-slate-700",
  };

  const textSizes = {
    default: "text-base",
    sm: "text-sm",
    lg: "text-lg",
  };

  return (
    <TouchableOpacity
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && "opacity-50",
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator
          color={variant === "outline" ? "#16a34a" : "white"}
        />
      ) : typeof children === "string" ? (
        <Text
          className={cn(
            textBaseStyles,
            textVariants[variant],
            textSizes[size],
            labelClassName,
          )}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};
