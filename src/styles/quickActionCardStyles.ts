import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../theme/tokens';

export const quickActionCardStyles = StyleSheet.create({
  actionCard: {
    backgroundColor: colors.surface.elevated,
    padding: spacing.md,
    borderRadius: borderRadius.sm,
    marginBottom: spacing.sm,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary.start,
    ...shadows.small,
  },
  actionTitle: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  actionSubtitle: {
    fontSize: typography.size.md,
    color: colors.text.secondary,
  },
});