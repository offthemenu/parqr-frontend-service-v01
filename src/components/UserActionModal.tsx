import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { colors, spacing, borderRadius, typography, shadows } from '../theme/tokens';

interface UserActionModalProps {
  visible: boolean;
  userCode: string;
  onClose: () => void;
  onViewProfile: () => void;
  onSendMessage: () => void;
  onRequestCarMove: () => void;
  onScanAgain: () => void;
}

export const UserActionModal: React.FC<UserActionModalProps> = ({
  visible,
  userCode,
  onClose,
  onViewProfile,
  onSendMessage,
  onRequestCarMove,
  onScanAgain
}) => {
  const handleAction = async (action: () => void) => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    action();
  };

  const handleScanAgain = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onScanAgain();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <BlurView intensity={80} tint="dark" style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>User Found!</Text>
          <Text style={styles.subtitle}>
            Found {userCode}. What would you like to do?
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => handleAction(onViewProfile)}
            >
              <Ionicons name="person" size={20} color={colors.text.white} style={styles.icon} />
              <Text style={styles.actionButtonText}>View Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => handleAction(onSendMessage)}
            >
              <Ionicons name="chatbubble" size={20} color={colors.text.white} style={styles.icon} />
              <Text style={styles.actionButtonText}>Send Message</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => handleAction(onRequestCarMove)}
            >
              <Ionicons name="car" size={20} color={colors.text.white} style={styles.icon} />
              <Text style={styles.actionButtonText}>Request Car Move</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.scanAgainButton}
              onPress={handleScanAgain}
            >
              <Ionicons name="qr-code" size={20} color={colors.text.secondary} style={styles.icon} />
              <Text style={styles.scanAgainButtonText}>Scan Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  modalContainer: {
    backgroundColor: colors.surface.base,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    width: width - 40,
    maxWidth: 320,
    ...shadows.large,
  },
  title: {
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
    textAlign: 'center',
    marginBottom: spacing.sm,
    color: colors.text.primary,
  },
  subtitle: {
    fontSize: typography.size.base,
    textAlign: 'center',
    marginBottom: spacing.xl,
    color: colors.text.secondary,
    lineHeight: 22,
  },
  buttonContainer: {
    gap: spacing.md,
  },
  actionButton: {
    backgroundColor: colors.primary.start,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    ...shadows.small,
  },
  actionButtonText: {
    color: colors.text.white,
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
  },
  scanAgainButton: {
    backgroundColor: colors.surface.elevated,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  scanAgainButtonText: {
    color: colors.text.secondary,
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
  },
  icon: {
    marginRight: spacing.sm,
  },
});