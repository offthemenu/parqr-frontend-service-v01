import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../theme/tokens';

export const startParkingScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  header: {
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: typography.size.xxxl,
    fontWeight: typography.weight.bold,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.size.base,
    color: colors.text.secondary,
    lineHeight: 22,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionLabel: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  required: {
    color: colors.notification.error,
  },
  hint: {
    fontSize: typography.size.sm,
    color: colors.text.tertiary,
    marginBottom: spacing.md,
    fontStyle: 'italic',
  },
  carOption: {
    backgroundColor: colors.surface.base,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 2,
    borderColor: colors.border.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...shadows.small,
  },
  carOptionSelected: {
    borderColor: colors.primary.start,
    backgroundColor: colors.surface.elevated,
  },
  carOptionContent: {
    flex: 1,
  },
  carBrand: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  carPlate: {
    fontSize: typography.size.sm,
    color: colors.text.secondary,
    // Note: Used for car ID display, not license plate (privacy protection)
  },
  checkmark: {
    width: 28,
    height: 28,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary.start,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkText: {
    color: colors.text.white,
    fontSize: typography.size.base,
    fontWeight: typography.weight.bold,
  },
  noCarsText: {
    fontSize: typography.size.sm,
    color: colors.text.tertiary,
    textAlign: 'center',
    padding: spacing.lg,
  },
  textInput: {
    backgroundColor: colors.surface.base,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    fontSize: typography.size.base,
    color: colors.text.primary,
    borderWidth: 1,
    borderColor: colors.border.light,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  charCount: {
    fontSize: typography.size.xs,
    color: colors.text.tertiary,
    textAlign: 'right',
    marginTop: spacing.xs,
  },
  startButton: {
    backgroundColor: colors.primary.start,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.md,
    minHeight: 56,
    ...shadows.medium,
  },
  startButtonDisabled: {
    backgroundColor: colors.border.medium,
    opacity: 0.5,
  },
  startButtonText: {
    color: colors.text.white,
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
    letterSpacing: 0.3,
  },
});