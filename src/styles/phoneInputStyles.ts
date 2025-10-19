import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../theme/tokens';

export const phoneInputStyles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginBottom: spacing.xl,
  },
  inputLabel: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: colors.border.light,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    fontSize: typography.size.base,
    color: colors.text.primary,
    backgroundColor: colors.surface.base,
  },
});