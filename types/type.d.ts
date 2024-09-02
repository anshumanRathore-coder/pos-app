import { TextInputProps, TouchableOpacityProps } from "react-native";
declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?:
    | "primary"
    | "default"
    | "secondary"
    | "danger"
    | "success"
    | "outline";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  textStyle?: string;
  className?: string;
}
declare interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: any;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
}

declare interface loginOwnerType {
  email: string;
  password: string;
}

declare interface loginEmployeeType {
  cashierCode: string;
  password: string;
}

declare interface signupFormType {
  email: string;
  phone: string;
  password: string;
}

declare interface homeCardType {
  title: string;
  bgColor: string;
  isPro: boolean;
  icon: string;
}
