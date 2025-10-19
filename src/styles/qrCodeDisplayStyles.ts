import { StyleSheet } from 'react-native';
import { colors, spacing, typography, shadows, borderRadius } from '../theme/tokens';

export const qrCodeDisplayStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.surface.base,
    borderRadius: borderRadius.md,
    ...shadows.medium,
  },
  qrIdText: {
    fontSize: typography.size.xs,
    color: colors.text.tertiary,
    marginTop: spacing.md,
    textAlign: 'center',
  },
});