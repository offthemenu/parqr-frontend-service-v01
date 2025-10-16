import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NotificationBadge } from "./NotificationBadge";
import { parkOutRequestsSectionStyles } from "../../styles/home/parkOutRequestsSectionStyles";
import * as Haptics from 'expo-haptics';

interface ParkOutRequestsSectionProps {
    userCode: string;
    unreadCount: number;
    onPress: () => void;
}

export const ParkOutRequestsSection: React.FC<ParkOutRequestsSectionProps> = ({
    userCode,
    unreadCount,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={parkOutRequestsSectionStyles.container}
            onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                onPress();
            }}
            activeOpacity={0.7}
        >
            <View style={parkOutRequestsSectionStyles.header}>
                <Text style={parkOutRequestsSectionStyles.title}>Park-Out Requests</Text>
                {unreadCount > 0 && (
                    <View style={parkOutRequestsSectionStyles.badge}>
                        <Text style={parkOutRequestsSectionStyles.badgeText}>{unreadCount}</Text>
                    </View>
                )}
                {/* ADD navigation arrow */}
                <Text style={parkOutRequestsSectionStyles.arrow}>›</Text>
            </View>
        </TouchableOpacity>
    )
}