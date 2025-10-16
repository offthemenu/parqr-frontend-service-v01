import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { UserInfoCard } from '../components/UserInfoCard';
import { QRCodeDisplay } from '../components/QRCodeDisplay';
import { ActionButton } from '../components/ActionButton';
import { profileScreenStyles } from '../styles/profileScreenStyles';
import { AuthService } from '../services/authService';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { colors } from '../theme/tokens';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

export const ProfileScreen: React.FC = () => {
  const route = useRoute<ProfileScreenRouteProp>();
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { user } = route.params;

  const handleRegenerateQR = () => {
    Alert.alert(
      'Regenerate QR Code',
      'QR code regeneration will be implemented in a future sprint',
      [{ text: 'OK' }]
    );
  };

  const handleSignOut = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: async () => {
            try {
              // Clear AsyncStorage
              await AuthService.clearAuthData();

              // Navigate to sign in screen
              navigation.reset({
                index: 0,
                routes: [{ name: 'SignIn' }],
              });
            } catch (error) {
              console.error('Sign out failed:', error);
              Alert.alert('Error', 'Failed to sign out. Please try again.');
            }
          }
        }
      ]
    );
  };

  const handleActionPress = (action: string) => {
    Alert.alert('Coming Soon', `${action} will be implemented in a future sprint`);
  };

  return (
    <ScrollView style={profileScreenStyles.container}>
      {/* User Info Section */}
      <View style={profileScreenStyles.section}>
        <Text style={profileScreenStyles.sectionTitle}>Account Information</Text>
        
        <UserInfoCard
          label="User Code"
          value={user.user_code}
        />
        
        <UserInfoCard
          label="Country"
          value={user.signup_country_iso === 'KR' ? 'South Korea' : user.signup_country_iso}
        />
        
        <UserInfoCard
          label="Member Since"
          value={new Date(user.created_at).toLocaleDateString()}
          isLast={true}
        />
      </View>

      {/* QR Code Section */}
      <View style={profileScreenStyles.section}>
        <Text style={profileScreenStyles.sectionTitle}>Your QR Code</Text>
        <View style={profileScreenStyles.qrContainer}>
          <QRCodeDisplay
            qrCodeId={user.qr_code_id}
            size={200}
            showId={true}
          />
          
          <TouchableOpacity
            style={profileScreenStyles.regenerateButton}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              handleRegenerateQR();
            }}
          >
            <Text style={profileScreenStyles.regenerateButtonText}>Regenerate QR Code</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Actions Section */}
      <View style={profileScreenStyles.section}>
        <Text style={profileScreenStyles.sectionTitle}>Account Actions</Text>

        <TouchableOpacity
          style={profileScreenStyles.actionButton}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            handleActionPress('Manage Cars');
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Ionicons name="car" size={20} color={colors.primary.start} />
            <Text style={profileScreenStyles.actionButtonText}>Manage Cars</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={profileScreenStyles.actionButton}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            handleActionPress('App Settings');
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Ionicons name="settings" size={20} color={colors.primary.start} />
            <Text style={profileScreenStyles.actionButtonText}>App Settings</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={profileScreenStyles.actionButton}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            handleActionPress('Help & Support');
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Ionicons name="help-circle" size={20} color={colors.primary.start} />
            <Text style={profileScreenStyles.actionButtonText}>Help & Support</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Sign Out Section */}
      <View style={profileScreenStyles.section}>
        <ActionButton
          title="Sign Out"
          onPress={handleSignOut}
          variant="danger"
        />
      </View>
    </ScrollView>
  );
};