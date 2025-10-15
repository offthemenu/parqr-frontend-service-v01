import { StyleSheet } from 'react-native';
import { colors, borderRadius, typography, shadows } from '../../theme/tokens';

export const notificationBadgeStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: colors.notification.error,
    borderRadius: borderRadius.md,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    borderWidth: 2,
    borderColor: colors.surface.base,
    ...shadows.notification,
  },
  text: {
    color: colors.text.white,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semibold,
  },
});