import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../theme/tokens';

export const parkOutHistoryStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface.background,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.surface.background,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.surface.base,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  filterButton: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    marginRight: spacing.md,
    borderRadius: borderRadius.full,
    backgroundColor: colors.surface.elevated,
  },
  filterButtonActive: {
    backgroundColor: colors.primary.start,
  },
  filterButtonText: {
    fontSize: typography.size.sm,
    fontWeight: typography.weight.medium,
    color: colors.text.primary,
  },
  filterButtonTextActive: {
    color: colors.text.white,
  },
  requestCard: {
    backgroundColor: colors.surface.base,
    marginHorizontal: spacing.lg,
    marginVertical: spacing.sm,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    ...shadows.medium,
    position: 'relative',
  },
  unreadCard: {
    borderLeftWidth: 4,
    borderLeftColor: colors.primary.start,
  },
  requestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  licenseplate: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.bold,
    color: colors.text.primary,
  },
  timestamp: {
    fontSize: typography.size.xs,
    color: colors.text.tertiary,
  },
  requesterInfo: {
    fontSize: typography.size.sm,
    color: colors.text.primary,
    marginBottom: spacing.sm,
    fontWeight: typography.weight.medium,
  },
  message: {
    fontSize: typography.size.base,
    color: colors.text.primary,
    lineHeight: 22,
    marginBottom: spacing.md,
  },
  markReadButton: {
    backgroundColor: colors.primary.start,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.sm,
    alignSelf: 'flex-start',
  },
  markReadText: {
    color: colors.text.white,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semibold,
  },
  unreadIndicator: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    width: 8,
    height: 8,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary.start,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingTop: spacing.xxxl * 2,
    paddingHorizontal: spacing.xxl,
  },
  emptyText: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.semibold,
    color: colors.text.primary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  emptySubtext: {
    fontSize: typography.size.sm,
    color: colors.text.tertiary,
    textAlign: 'center',
    lineHeight: 20,
  },
  emptyList: {
    flexGrow: 1,
  },
  loadingText: {
    fontSize: typography.size.base,
    color: colors.text.secondary,
  },
});