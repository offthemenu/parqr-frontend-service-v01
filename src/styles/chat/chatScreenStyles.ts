import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme/tokens';

export const chatScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.surface.background,
  },
  loadingText: {
    fontSize: typography.size.base,
    color: colors.text.secondary,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.surface.background,
    paddingHorizontal: spacing.lg,
  },
  errorText: {
    fontSize: typography.size.base,
    color: colors.notification.error,
    textAlign: 'center',
  },
  messagesList: {
    flex: 1,
    backgroundColor: colors.surface.elevated,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xxl,
  },
  emptyStateText: {
    fontSize: typography.size.base,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
  },
});