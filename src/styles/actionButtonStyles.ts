import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../theme/tokens';

export const actionButtonStyles = StyleSheet.create({
  primaryButton: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary.start,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
    ...shadows.medium,
  },
  primaryButtonText: {
    color: colors.text.white,
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
  },
  secondaryButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary.start,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  secondaryButtonText: {
    color: colors.primary.start,
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
  },
  dangerButton: {
    width: '100%',
    height: 50,
    backgroundColor: colors.notification.error,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
    ...shadows.medium,
  },
  dangerButtonText: {
    color: colors.text.white,
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
  },
  disabledButton: {
    backgroundColor: colors.border.medium,
    borderColor: colors.border.medium,
    ...shadows.none,
  },
  disabledButtonText: {
    color: colors.text.tertiary,
  },
});