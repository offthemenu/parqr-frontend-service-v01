import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../../theme/tokens';

export const conversationCardStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.surface.base,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border.light,
  },
  avatarContainer: {
    marginRight: spacing.md,
    justifyContent: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary.start,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.small,
  },
  avatarText: {
    color: colors.text.white,
    fontSize: typography.size.lg,
    fontWeight: typography.weight.semibold,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  displayName: {
    flex: 1,
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
    color: colors.text.primary,
    marginRight: spacing.sm,
  },
  timestamp: {
    fontSize: typography.size.md,
    color: colors.text.secondary,
  },
  messageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  lastMessage: {
    flex: 1,
    fontSize: typography.size.md,
    color: colors.text.secondary,
    lineHeight: typography.size.md * typography.lineHeight.normal,
    marginRight: spacing.sm,
  },
  unreadMessage: {
    fontWeight: typography.weight.medium,
    color: colors.text.primary,
  },
  unreadBadge: {
    backgroundColor: colors.primary.start,
    borderRadius: borderRadius.md,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xs + 2,
    ...shadows.small,
  },
  unreadBadgeText: {
    color: colors.text.white,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semibold,
  },
});