import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../../theme/tokens';

export const parkOutRequestsSectionStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface.base,
    marginHorizontal: spacing.lg,
    marginVertical: spacing.sm,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    ...shadows.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.bold,
    color: colors.text.primary,
  },
  badge: {
    backgroundColor: colors.primary.start,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    minWidth: 24,
    alignItems: 'center',
    ...shadows.small,
  },
  badgeText: {
    color: colors.text.white,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semibold,
  },
  arrow: {
    fontSize: typography.size.xl,
    color: colors.border.medium,
    fontWeight: typography.weight.normal,
  },
});