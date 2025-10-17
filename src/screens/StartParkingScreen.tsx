import React, { useState, useRef } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { ParkingService } from "../services/parkingService";
import { startParkingScreenStyles } from "../styles/startParkingScreenStyles";

type StartParkingScreenRouteProp = RouteProp<RootStackParamList, 'StartParking'>;
type StartParkingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'StartParking'>;

export const StartParkingScreen: React.FC = () => {
    const navigation = useNavigation<StartParkingScreenNavigationProp>();
    const route = useRoute<StartParkingScreenRouteProp>();
    const { user } = route.params;

    // Refs for scroll and input management
    const scrollViewRef = useRef<ScrollView>(null);
    const locationNoteInputRef = useRef<TextInput>(null);
    const publicMessageInputRef = useRef<TextInput>(null);

    // State for form inputs
    const [selectedCarId, setSelectedCarId] = useState<number | null>(
        user.cars && user.cars.length > 0 ? user.cars[0].id : null
    );
    const [locationNote, setLocationNote] = useState<string>('');
    const [publicMessage, setPublicMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Character Limits
    const LOCATION_MAX =  255;
    const PUBLIC_MESSAGE_MAX = 200;

    // Form validation
    const isFormValid = selectedCarId !== null;

    const handleStartParking = async () => {
        if (!isFormValid) {
            Alert.alert("Error", "Please select a car before starting parking.");
            return;
        }

        setIsLoading(true);

        try {
            // Call parking service to create a new session
            await ParkingService.startParkingSession({
                car_id: selectedCarId!,
                note_location: locationNote.trim() || undefined,
                public_message: publicMessage.trim() || undefined
            });

            Alert.alert(
                "Success",
                "Parking session started successfully!",
                [
                    {
                        text: "OK",
                        onPress: () => navigation.goBack()
                    }
                ]
            );
        } catch (error: any) {
            console.error("Error starting parking session:", error);
            Alert.alert(
                "Error",
                error.response?.data?.detail || "Failed to start parking session. Please try again."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            style={startParkingScreenStyles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        >
            <ScrollView
                ref={scrollViewRef}
                style={startParkingScreenStyles.scrollView}
                contentContainerStyle={startParkingScreenStyles.scrollContent}
                keyboardShouldPersistTaps="handled"
            >
                {/* Header */}
                <View style={startParkingScreenStyles.header}>
                    <Text style={startParkingScreenStyles.title}>Start Parking</Text>
                    <Text style={startParkingScreenStyles.subtitle}>
                        Let others know you're parked and ready to move if needed
                    </Text>
                </View>

                {/* Car Selection Section */}
                <View style={startParkingScreenStyles.section}>
                    <Text style={startParkingScreenStyles.sectionLabel}>
                        Select Vehicle <Text style={startParkingScreenStyles.required}>*</Text>
                    </Text>

                    {user.cars && user.cars.length > 0 ? (
                        user.cars.map((car) => (
                            <TouchableOpacity
                                key={car.id}
                                style={[
                                    startParkingScreenStyles.carOption,
                                    selectedCarId === car.id && startParkingScreenStyles.carOptionSelected
                                ]}
                                onPress={() => setSelectedCarId(car.id)}
                            >
                                <View style={startParkingScreenStyles.carOptionContent}>
                                    <Text style={startParkingScreenStyles.carBrand}>
                                        {car.car_brand} {car.car_model}
                                    </Text>
                                    <Text style={startParkingScreenStyles.carPlate}>
                                        Car ID: {car.id}
                                    </Text>
                                </View>
                                {selectedCarId === car.id && (
                                    <View style={startParkingScreenStyles.checkmark}>
                                        <Text style={startParkingScreenStyles.checkmarkText}>✓</Text>
                                    </View>
                                )}
                            </TouchableOpacity>
                        ))
                    ) : (
                        <Text style={startParkingScreenStyles.noCarsText}>
                            No registered vehicles. Please register a car first.
                        </Text>
                    )}
                </View>

                {/* Location Note Input */}
                <View style={startParkingScreenStyles.section}>
                    <Text style={startParkingScreenStyles.sectionLabel}>
                        Location Note (Optional)
                    </Text>
                    <Text style={startParkingScreenStyles.hint}>
                        Add details like "Near the entrance" or "Level 3, Zone B"
                    </Text>
                    <TextInput
                        ref={locationNoteInputRef}
                        style={startParkingScreenStyles.textInput}
                        placeholder="e.g., Parking Lot A, Row 5"
                        placeholderTextColor="#999"
                        value={locationNote}
                        onChangeText={setLocationNote}
                        maxLength={LOCATION_MAX}
                        multiline
                        onFocus={() => {
                            setTimeout(() => {
                                locationNoteInputRef.current?.measureLayout(
                                    scrollViewRef.current as any,
                                    (x, y) => {
                                        scrollViewRef.current?.scrollTo({ y: y - 100, animated: true });
                                    },
                                    () => {}
                                );
                            }, 100);
                        }}
                    />
                    <Text style={startParkingScreenStyles.charCount}>
                        {locationNote.length}/{LOCATION_MAX}
                    </Text>
                </View>

                {/* Public Message Input */}
                <View style={startParkingScreenStyles.section}>
                    <Text style={startParkingScreenStyles.sectionLabel}>
                        Public Message (Optional)
                    </Text>
                    <Text style={startParkingScreenStyles.hint}>
                        Visible to others who scan your QR code
                    </Text>
                    <TextInput
                        ref={publicMessageInputRef}
                        style={startParkingScreenStyles.textInput}
                        placeholder="e.g., Available to move if needed"
                        placeholderTextColor="#999"
                        value={publicMessage}
                        onChangeText={setPublicMessage}
                        maxLength={PUBLIC_MESSAGE_MAX}
                        multiline
                        onFocus={() => {
                            setTimeout(() => {
                                publicMessageInputRef.current?.measureLayout(
                                    scrollViewRef.current as any,
                                    (x, y) => {
                                        scrollViewRef.current?.scrollTo({ y: y - 100, animated: true });
                                    },
                                    () => {}
                                );
                            }, 100);
                        }}
                    />
                    <Text style={startParkingScreenStyles.charCount}>
                        {publicMessage.length}/{PUBLIC_MESSAGE_MAX}
                    </Text>
                </View>

                {/* Start Parking Button */}
                <TouchableOpacity
                    style={[
                        startParkingScreenStyles.startButton,
                        (!isFormValid || isLoading) && startParkingScreenStyles.startButtonDisabled
                    ]}
                    onPress={handleStartParking}
                    disabled={!isFormValid || isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={startParkingScreenStyles.startButtonText}>
                            Start Parking Session
                        </Text>
                    )}
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
