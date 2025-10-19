import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../theme/tokens';

export const countryPickerStyles = StyleSheet.create({
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
  pickerContainer: {
    borderWidth: 1,
    borderColor: colors.border.light,
    borderRadius: borderRadius.md,
    backgroundColor: colors.surface.base,
  },
  picker: {
    height: 50,
    width: '100%',
    color: colors.text.primary,
  },
  loadingIndicator: {
    marginVertical: spacing.xxl,
  },
});