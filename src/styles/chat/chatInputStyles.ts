import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../../theme/tokens';

export const chatInputStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface.base,
    borderTopWidth: 1,
    borderTopColor: colors.border.light,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    ...shadows.small,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    maxHeight: 100,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border.light,
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontSize: typography.size.base,
    color: colors.text.primary,
    maxHeight: 80,
    minHeight: 40,
    backgroundColor: colors.surface.base,
  },
  disabledInput: {
    backgroundColor: colors.surface.elevated,
    color: colors.text.tertiary,
  },
  charCount: {
    position: 'absolute',
    right: 80,
    bottom: 5,
    fontSize: typography.size.sm,
    color: colors.text.tertiary,
    backgroundColor: colors.surface.base,
    paddingHorizontal: spacing.xs,
  },
  charCountWarning: {
    color: colors.notification.error,
  },
  sendButton: {
    marginLeft: spacing.sm,
    backgroundColor: colors.primary.start,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.xl,
    ...shadows.small,
  },
  sendButtonDisabled: {
    backgroundColor: colors.border.light,
    ...shadows.none,
  },
  sendButtonText: {
    color: colors.text.white,
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
  },
  sendButtonTextDisabled: {
    color: colors.text.tertiary,
  },
});