import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { RootStackParamList } from '../types';
import { publicProfileStyles } from '../styles/publicProfileStyles';
import { ChatService } from '../services/chatService';
import { MoveRequestService } from '../services/moveRequestService';
import { ParkingService } from '../services/parkingService';
import { ParkingSession } from '../types';
import { formatLocalTime, calculateParkingDuration } from '../utils/timeUtils';
import { colors } from '../theme/tokens';

type PublicProfileScreenRouteProp = RouteProp<RootStackParamList, 'PublicProfile'>;
type PublicProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PublicProfile'>;

export const PublicProfileScreen: React.FC = () => {
  const route = useRoute<PublicProfileScreenRouteProp>();
  const navigation = useNavigation<PublicProfileScreenNavigationProp>();
  const { user, userCode, userData, isWebView = false } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [parkingHistory, setParkingHistory] = useState<ParkingSession[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleSendChat = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setIsLoading(true);

    try {
      navigation.navigate('Chat', {
        recipientUserCode: userCode,
        recipientDisplayName: userData.profile_display_name || userCode
      });
    } catch (error) {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Alert.alert('Error', 'Unable to open chat. Please try again.');
      console.error('Chat navigation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRequestMovecar = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Alert.prompt(
      "Confirm License Plate",
      "Enter the license plate of the car you want to request to move:",
      [
        {
          text: "Cancel",
          style: 'cancel',
          onPress: async () => {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }
        },
        {
          text: "Send Request",
          onPress: async (licensePlate?: string) => {
            if (!licensePlate || licensePlate.trim().length === 0) {
              await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
              Alert.alert("Error", "Please enter a license plate");
              return;
            }

            setIsLoading(true);

            try {
              await MoveRequestService.createRequest(
                userCode,
                licensePlate.trim().toUpperCase()
              );

              await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              Alert.alert(
                "Request Sent",
                "Your request to move the car has been sent to the vehicle owner.",
                [
                  {
                    text: "OK",
                    onPress: () => navigation.goBack()
                  }
                ]
              );
            } catch (error: any) {
              console.error("Move car request error:", error);
              await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
              Alert.alert(
                "Error",
                error.response?.data?.detail || "Failed to send move request. Please try again."
              );
            } finally {
              setIsLoading(false);
            }
          }
        }
      ],
      "plain-text",
      "",
      "default"
    );
  };

  const fetchParkingHistory = async () => {
    if (!userCode) return;

    try {
      // Use public parking history endpoint if available, otherwise skip
      const history = await ParkingService.getPublicParkingHistory(userCode);
      setParkingHistory(history.slice(0, 5)); // Show last 5 sessions
    } catch (error) {
      console.error('Public parking history not available:', error);
      // Fail silently - this is optional information
    }
  };

  // Load parking history when component mounts
  useEffect(() => {
    if (userCode) {
      fetchParkingHistory();
    }
  }, [userCode]);

  const handleCloseProfile = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    navigation.goBack();
  };

  // Get the first registered car (primary car)
  const primaryCar = userData.cars && userData.cars.length > 0 ? userData.cars[0] : null;

  return (
    <SafeAreaView style={publicProfileStyles.container}>
      {/* Close Button (In-App Only) */}
      {!isWebView && (
        <TouchableOpacity
          style={publicProfileStyles.closeButton}
          onPress={handleCloseProfile}
        >
          <Ionicons name="close" size={24} color={colors.text.primary} />
        </TouchableOpacity>
      )}

      {/* Content Container */}
      <View style={publicProfileStyles.content}>
        {/* User Display Name */}
        <Text style={publicProfileStyles.displayName}>
          {userData.profile_display_name || userData.user_code}
        </Text>

        {/* Car Information */}
        {primaryCar ? (
          <View style={publicProfileStyles.carSection}>
            <Text style={publicProfileStyles.carBrand}>{primaryCar.car_brand}</Text>
            <Text style={publicProfileStyles.carModel}>{primaryCar.car_model}</Text>
          </View>
        ) : (
          <View style={publicProfileStyles.carSection}>
            <Text style={publicProfileStyles.noCarText}>No vehicle registered</Text>
          </View>
        )}

        {/* Parking History Section */}
        {parkingHistory.length > 0 && (
          <View style={publicProfileStyles.historySection}>
            <TouchableOpacity
              style={publicProfileStyles.historyHeader}
              onPress={async () => {
                await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                setShowHistory(!showHistory);
              }}
            >
              <Text style={publicProfileStyles.historyTitle}>Recent Parking Activity</Text>
              <Ionicons
                name={showHistory ? 'chevron-down' : 'chevron-forward'}
                size={18}
                color={colors.text.secondary}
              />
            </TouchableOpacity>
            
            {showHistory && (
              <View style={publicProfileStyles.historyList}>
                {parkingHistory.map((session, index) => (
                  <View key={session.id} style={publicProfileStyles.historyItem}>
                    <Text style={publicProfileStyles.historyDate}>
                      {formatLocalTime(session.start_time)}
                    </Text>
                    {session.end_time && (
                      <Text style={publicProfileStyles.historyDuration}>
                        {calculateParkingDuration(session.start_time, session.end_time)}
                      </Text>
                    )}
                    {session.note_location && (
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="location" size={12} color={colors.text.secondary} />
                        <Text style={[publicProfileStyles.historyLocation, { marginLeft: 4 }]}>
                          {session.note_location}
                        </Text>
                      </View>
                    )}
                  </View>
                ))}
                <Text style={publicProfileStyles.historyNote}>
                  Shows recent parking sessions for reference
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Action Buttons */}
        <TouchableOpacity
          style={[
            publicProfileStyles.actionButton,
            isLoading && publicProfileStyles.actionButtonDisabled
          ]}
          onPress={handleRequestMovecar}
          disabled={isLoading}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Ionicons name="car" size={20} color={colors.text.white} />
            <Text style={[
              publicProfileStyles.actionButtonText,
              isLoading && publicProfileStyles.actionButtonTextDisabled
            ]}>
              {isLoading ? 'Sending...' : 'Request to Move Car'}
            </Text>
          </View>
        </TouchableOpacity>

        {!isWebView && (
          <TouchableOpacity
            style={[
              publicProfileStyles.chatButton,
              isLoading && publicProfileStyles.actionButtonDisabled
            ]}
            onPress={handleSendChat}
            disabled={isLoading}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Ionicons name="chatbubble" size={20} color={colors.text.white} />
              <Text style={[
                publicProfileStyles.chatButtonText,
                isLoading && publicProfileStyles.actionButtonTextDisabled
              ]}>
                {isLoading ? 'Opening...' : 'Send Chat'}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};