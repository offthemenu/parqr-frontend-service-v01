import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../../theme/tokens';

export const parkingSessionCardStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface.base,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginHorizontal: spacing.lg,
    marginVertical: spacing.md,
    ...shadows.medium,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: borderRadius.xs,
    backgroundColor: colors.notification.success,
    marginRight: spacing.sm,
  },
  title: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
    color: colors.text.primary,
  },
  content: {
    marginBottom: spacing.md,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  label: {
    fontSize: typography.size.md,
    color: colors.text.secondary,
    flex: 1,
  },
  duration: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.semibold,
    color: colors.primary.start,
    flex: 2,
    textAlign: 'right',
  },
  value: {
    fontSize: typography.size.md,
    color: colors.text.primary,
    flex: 2,
    textAlign: 'right',
  },
  endButton: {
    backgroundColor: colors.notification.error,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.sm,
    alignItems: 'center',
    ...shadows.small,
  },
  endButtonDisabled: {
    backgroundColor: colors.notification.error,
    opacity: 0.5,
  },
  endButtonText: {
    color: colors.text.white,
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
  },
  endButtonTextDisabled: {
    color: colors.text.white,
    opacity: 0.7,
  },
});