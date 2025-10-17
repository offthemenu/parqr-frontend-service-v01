import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../theme/tokens';

export const carRegistrationStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface.background,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  formContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: typography.size.xxl,
    fontWeight: typography.weight.bold,
    color: colors.text.primary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: typography.size.base,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  inputContainer: {
    width: '100%',
    marginBottom: spacing.lg,
  },
  label: {
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
  inputError: {
    borderColor: colors.notification.error,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: colors.border.light,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.surface.elevated,
  },
  picker: {
    height: 50,
  },
  button: {
    backgroundColor: colors.primary.start,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.sm,
    width: '100%',
    alignItems: 'center',
    marginTop: spacing.md,
    ...shadows.medium,
  },
  buttonDisabled: {
    backgroundColor: colors.border.medium,
    opacity: 0.5,
  },
  buttonText: {
    color: colors.text.white,
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
  },
  skipButton: {
    marginTop: spacing.md,
    paddingVertical: spacing.md,
  },
  skipButtonText: {
    color: colors.primary.start,
    fontSize: typography.size.base,
    textDecorationLine: 'underline',
  },
  errorText: {
    color: colors.notification.error,
    fontSize: typography.size.md,
    marginTop: spacing.xs,
  },
  brandSelector: {
    borderWidth: 1,
    borderColor: colors.border.light,
    borderRadius: borderRadius.sm,
    padding: spacing.md,
    backgroundColor: colors.surface.elevated,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandSelectorText: {
    fontSize: typography.size.base,
    color: colors.text.primary,
  },
  brandSelectorPlaceholder: {
    color: colors.text.tertiary,
  },
  brandSelectorArrow: {
    fontSize: typography.size.sm,
    color: colors.text.secondary,
  },
});
