import { LinearGradient } from "expo-linear-gradient";
import React from "react";

type GradientBackgroundProps = {
  children: React.ReactNode;
  colors: Array<String>;
};

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  colors,
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
