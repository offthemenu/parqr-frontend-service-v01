import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { startParkingSectionStyles } from "../../styles/home/startParkingSectionStyles";
import * as Haptics from 'expo-haptics';

interface StartParkingSectionProps {
    onPress: () => void;
}

export const StartParkingSection: React.FC<StartParkingSectionProps> = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={startParkingSectionStyles.container}
            onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                onPress();
            }}
            activeOpacity={0.7}
        >
            <View style={startParkingSectionStyles.content}>
                {/* <View style={startParkingSectionStyles.iconContainer}>
                    <Text style={startParkingSectionStyles.icon}></Text>
                </View> */}

                <View style={startParkingSectionStyles.textContainer}>
                    <Text style={startParkingSectionStyles.title}>Start Parking</Text>
                    <Text style={startParkingSectionStyles.subtitle}>
                        Let others know you're parked
                    </Text>
                </View>

                <View style={startParkingSectionStyles.arrowContainer}>
                    <Text style={startParkingSectionStyles.arrow}>›</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};