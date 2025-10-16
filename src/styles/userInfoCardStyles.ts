import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../theme/tokens';

export const userInfoCardStyles = StyleSheet.create({
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  infoLabel: {
    fontSize: typography.size.base,
    color: colors.text.secondary,
    fontWeight: typography.weight.medium,
  },
  infoValue: {
    fontSize: typography.size.base,
    color: colors.text.primary,
    fontWeight: typography.weight.semibold,
  },
});