import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../theme/tokens';

export const profileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface.background,
  },
  section: {
    backgroundColor: colors.surface.base,
    margin: spacing.md,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    ...shadows.small,
  },
  sectionTitle: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.bold,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  qrContainer: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
  },
  qrIdText: {
    fontSize: typography.size.sm,
    color: colors.text.tertiary,
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  regenerateButton: {
    backgroundColor: colors.primary.start,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.sm,
    marginTop: spacing.md,
    ...shadows.small,
  },
  regenerateButtonText: {
    color: colors.text.white,
    fontSize: typography.size.md,
    fontWeight: typography.weight.semibold,
  },
  actionButton: {
    backgroundColor: colors.surface.elevated,
    padding: spacing.md,
    borderRadius: borderRadius.sm,
    marginBottom: spacing.sm,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary.start,
    ...shadows.small,
  },
  actionButtonText: {
    fontSize: typography.size.base,
    color: colors.text.primary,
    fontWeight: typography.weight.medium,
  },
});