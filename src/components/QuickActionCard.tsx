import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { quickActionCardStyles } from '../styles/quickActionCardStyles';
import * as Haptics from 'expo-haptics';

interface QuickActionCardProps {
  title: string;
  subtitle: string;
  onPress: () => void;
}

export const QuickActionCard: React.FC<QuickActionCardProps> = ({
  title,
  subtitle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={quickActionCardStyles.actionCard}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress();
      }}
      activeOpacity={0.7}
    >
      <Text style={quickActionCardStyles.actionTitle}>{title}</Text>
      <Text style={quickActionCardStyles.actionSubtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
};