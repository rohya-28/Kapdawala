declare interface InputFieldProps extends TextInputProps {
    label: string;
    icon?: any;
    secureTextEntry?: boolean;
    labelStyle?: string;
    containerStyle?: string;
    inputStyle?: string;
    iconStyle?: string;
    className?: string;
    error?: string;
  }

  import { TextInputProps, TouchableOpacityProps } from "react-native";
declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
  width?: string;
}
  

declare module "react-native-animated-progress" {
  import React from "react";
  import { ViewStyle } from "react-native";

  export interface AnimatedProgressBarProps {
    progress: number; // 0 to 100
    height?: number;
    barColor?: string;
    backgroundColor?: string;
    borderRadius?: number;
    showPercentage?: boolean;
    style?: ViewStyle;
    duration?: number;
  }

  export interface AnimatedCircularProgressBarProps {
    progress: number;
    size?: number;
    width?: number;
    textColor?: string;
    tintColor?: string;
    backgroundColor?: string;
    duration?: number;
  }

  export interface AnimatedGaugeProgressProps {
    value: number;
    minValue?: number;
    maxValue?: number;
    title?: string;
    titleColor?: string;
    tintColor?: string;
    needleColor?: string;
    hideLabel?: boolean;
    duration?: number;
  }

  export const AnimatedProgressBar: React.FC<AnimatedProgressBarProps>;
  export const AnimatedCircularProgressBar: React.FC<AnimatedCircularProgressBarProps>;
  export const AnimatedGaugeProgress: React.FC<AnimatedGaugeProgressProps>;
}
