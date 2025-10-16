import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../../theme/tokens';

export const registeredCarPanelStyles = StyleSheet.create({
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
    marginBottom: spacing.md,
  },
  title: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.bold,
    color: colors.text.primary,
  },
  manageButton: {
    backgroundColor: colors.primary.start,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.sm,
    ...shadows.small,
  },
  manageButtonText: {
    color: colors.text.white,
    fontSize: typography.size.md,
    fontWeight: typography.weight.semibold,
  },
  carInfo: {
    gap: spacing.xs,
  },
  carBrand: {
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
    color: colors.text.primary,
  },
  carModel: {
    fontSize: typography.size.base,
    color: colors.text.secondary,
    marginBottom: spacing.sm,
  },
  carId: {
    fontSize: typography.size.sm,
    color: colors.text.tertiary,
  },
});