import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../theme/tokens';

export const registrationSuccessStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface.background,
    padding: spacing.lg,
  },
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.xxl,
  },
  title: {
    fontSize: typography.size.xxxl,
    fontWeight: typography.weight.bold,
    color: colors.text.primary,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  userInfoContainer: {
    backgroundColor: colors.surface.base,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    marginBottom: spacing.xl,
    width: '100%',
    ...shadows.small,
  },
  userInfoTitle: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.bold,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  userInfoText: {
    fontSize: typography.size.base,
    color: colors.text.secondary,
    marginBottom: spacing.xs,
  },
  qrContainer: {
    backgroundColor: colors.surface.base,
    padding: spacing.xl,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    marginBottom: spacing.xl,
    ...shadows.medium,
  },
  qrTitle: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.bold,
    color: colors.text.primary,
    marginBottom: spacing.lg,
  },
  qrSubtext: {
    fontSize: typography.size.xs,
    color: colors.text.tertiary,
    marginTop: spacing.md,
    textAlign: 'center',
  },
  // Deprecated - using ActionButton component instead
  button: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary.start,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  buttonText: {
    color: colors.text.white,
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
  },
});