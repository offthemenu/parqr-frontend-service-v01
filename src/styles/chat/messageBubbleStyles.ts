import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../../theme/tokens';

export const messageBubbleStyles = StyleSheet.create({
  container: {
    marginVertical: 2,
    paddingHorizontal: spacing.md,
  },
  sentContainer: {
    alignItems: 'flex-end',
  },
  receivedContainer: {
    alignItems: 'flex-start',
  },
  bubble: {
    maxWidth: '75%',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.lg,
    marginVertical: 2,
    ...shadows.small,
  },
  sentBubble: {
    backgroundColor: colors.primary.start,
    borderBottomRightRadius: borderRadius.xs,
  },
  receivedBubble: {
    backgroundColor: colors.surface.elevated,
    borderBottomLeftRadius: borderRadius.xs,
  },
  senderName: {
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semibold,
    color: colors.text.secondary,
    marginBottom: 2,
  },
  messageText: {
    fontSize: typography.size.base,
    lineHeight: typography.size.base * typography.lineHeight.normal,
  },
  sentText: {
    color: colors.text.white,
  },
  receivedText: {
    color: colors.text.primary,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.xs,
  },
  timestamp: {
    fontSize: typography.size.xs,
  },
  sentTimestamp: {
    color: 'rgba(255,255,255,0.7)',
  },
  receivedTimestamp: {
    color: colors.text.secondary,
  },
  readStatus: {
    fontSize: typography.size.xs,
    color: 'rgba(255,255,255,0.7)',
    marginLeft: spacing.xs,
  },
});