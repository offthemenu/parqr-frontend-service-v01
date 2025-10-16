import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../theme/tokens';

export const signInScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface.base,
    padding: spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginTop: spacing.xxxl + spacing.sm,
    marginBottom: spacing.xxl,
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
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: spacing.xl,
  },
  inputContainer: {
    marginBottom: spacing.lg,
  },
  inputLabel: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border.light,
    borderRadius: borderRadius.sm,
    padding: spacing.md,
    fontSize: typography.size.base,
    backgroundColor: colors.surface.elevated,
    color: colors.text.primary,
  },
  signInButton: {
    backgroundColor: colors.primary.start,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.sm,
    alignItems: 'center',
    marginTop: spacing.md,
    ...shadows.medium,
  },
  signInButtonText: {
    color: colors.text.white,
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
  },
  buttonContainer: {
    marginBottom: spacing.xxl,
  },
  buttonDisabled: {
    backgroundColor: colors.border.medium,
    opacity: 0.5,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerText: {
    fontSize: typography.size.md,
    color: colors.text.tertiary,
    textAlign: 'center',
    lineHeight: spacing.lg,
  },
});
