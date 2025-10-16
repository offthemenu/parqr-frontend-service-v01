import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../theme/tokens';

export const splashScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.xxxl * 1.5,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoPlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: colors.surface.base,
    borderRadius: borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.lg,
    ...shadows.large,
  },
  logoText: {
    fontSize: typography.size.xxxl + 4,
    fontWeight: typography.weight.bold,
    color: colors.primary.start,
  },
  tagline: {
    fontSize: typography.size.lg,
    color: colors.text.white,
    fontWeight: typography.weight.normal,
  },
  loadingContainer: {
    marginBottom: spacing.xxxl + spacing.md,
  },
  loadingText: {
    color: colors.text.white,
    fontSize: typography.size.base,
    opacity: 0.8,
  },
});