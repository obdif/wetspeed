// components/SafeScreen.tsx
import { View, ViewStyle } from "react-native";
import { useSafeAreaInsets, Edge } from "react-native-safe-area-context";
import { COLORS } from "@/constants/colors";
import { ReactNode } from "react";

interface SafeScreenProps {
  children: ReactNode;
  backgroundColor?: string;
  edges?: Edge[]; 
  style?: ViewStyle;
}

const SafeScreen = ({ 
  children, 
  backgroundColor = COLORS.background,
  edges = ['top'], 
  style 
}: SafeScreenProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View 
      style={[
        { 
          flex: 1, 
          backgroundColor,
          paddingTop: edges.includes('top') ? insets.top : 0,
          paddingBottom: edges.includes('bottom') ? insets.bottom : 0,
          paddingLeft: edges.includes('left') ? insets.left : 0,
          paddingRight: edges.includes('right') ? insets.right : 0,
        },
        style
      ]}
    >
      {children}
    </View>
  );
};

export default SafeScreen;