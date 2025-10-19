import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../../theme/tokens';

export const chatListStyles = StyleSheet.create({
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
  searchContainer: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.surface.elevated,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border.light,
  },
  searchInput: {
    height: 36,
    backgroundColor: colors.surface.base,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.md,
    fontSize: typography.size.base,
    color: colors.text.primary,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  conversationsList: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xxl,
  },
  emptyStateTitle: {
    fontSize: typography.size.xl,
    fontWeight: typography.weight.semibold,
    color: colors.text.primary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  emptyStateText: {
    fontSize: typography.size.base,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
  },
});