import React from "react";
import { View, Text } from "react-native";
import { parkingStatusBadgeStyles } from "../../styles/profile/parkingStatusBadgeStyles";

interface ParkingStatusBadgeProps {
    parkingStatus?: "active" | "not_parked";
}

export const ParkingStatusBadge: React.FC<ParkingStatusBadgeProps> = ({ parkingStatus }) => {
    if (!parkingStatus) return null;

    const isActive = parkingStatus == "active";

    return (
        <View style={[
            parkingStatusBadgeStyles.container,
            isActive ? parkingStatusBadgeStyles.activeContainer : parkingStatusBadgeStyles.inactiveContainer
        ]}>
            <View style={[
                parkingStatusBadgeStyles.indicator,
                isActive ? parkingStatusBadgeStyles.activeIndicator : parkingStatusBadgeStyles.inactiveIndicator
            ]} />
            <Text style={[
                parkingStatusBadgeStyles.text,
                isActive ? parkingStatusBadgeStyles.activeText : parkingStatusBadgeStyles.inactiveText
            ]}>
                {isActive ? "🅿️ Currently Parking" : "Not Parking"}
            </Text>
        </View>
    );
};