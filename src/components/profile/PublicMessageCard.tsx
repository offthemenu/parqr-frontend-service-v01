import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/tokens";
import { publicMessageCardStyles } from "../../styles/profile/publicMessageCardStyles";

interface PublicMessageCardProps {
    publicMessage?: string;
    startTime?: string;
}

export const PublicMessageCard: React.FC<PublicMessageCardProps> = ({
    publicMessage,
    startTime
}) => {
    if (!publicMessage) return null;

    const formatStartTime = (timeStr: string) => {
        try {
            const date = new Date(timeStr);
            return date.toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true
            });
        } catch (error) {
            return timeStr;
        }
    };

    return (
        <View style={publicMessageCardStyles.container}>
            <View style={publicMessageCardStyles.header}>
                <Ionicons name="chatbubble" size={16} color={colors.primary.start} style={publicMessageCardStyles.icon} />
                <Text style={publicMessageCardStyles.title}>Public Message</Text>
            </View>

            <Text style={publicMessageCardStyles.message}>
                "{publicMessage}"
            </Text>

            {startTime && (
                <Text style={publicMessageCardStyles.timestamp}>
                    Parking since {formatStartTime(startTime)}
                </Text>
            )}
        </View>
    );
};