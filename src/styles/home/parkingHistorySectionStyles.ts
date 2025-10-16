import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../../theme/tokens';

export const parkingHistorySectionStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface.base,
    marginHorizontal: spacing.lg,
    marginVertical: spacing.sm,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    ...shadows.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  title: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.bold,
    color: colors.text.primary,
  },
  arrow: {
    fontSize: typography.size.xl,
    color: colors.border.medium,
    fontWeight: typography.weight.normal,
  },
  loadingText: {
    fontSize: typography.size.md,
    color: colors.text.secondary,
    textAlign: 'center',
    paddingVertical: spacing.lg,
  },
  emptyText: {
    fontSize: typography.size.md,
    color: colors.text.secondary,
    textAlign: 'center',
    paddingVertical: spacing.lg,
    lineHeight: spacing.lg,
  },
  sessionItem: {
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  sessionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  sessionDate: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
    color: colors.text.primary,
  },
  duration: {
    fontSize: typography.size.md,
    color: colors.primary.start,
    fontWeight: typography.weight.medium,
  },
  location: {
    fontSize: typography.size.md,
    color: colors.text.primary,
    marginBottom: spacing.xs,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeSession: {
    fontSize: typography.size.sm,
    color: colors.notification.success,
    fontWeight: typography.weight.semibold,
  },
  viewMoreText: {
    fontSize: typography.size.md,
    color: colors.primary.start,
    textAlign: 'center',
    marginTop: spacing.sm,
    fontWeight: typography.weight.medium,
  },
});