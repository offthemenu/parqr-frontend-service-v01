import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../theme/tokens';

export const publicProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface.background,
  },

  // ID Card Header Section
  header: {
    padding: spacing.lg,
    backgroundColor: colors.surface.elevated,
    alignItems: 'center',
  },
  userCode: {
    fontSize: typography.size.xxl,
    fontWeight: typography.weight.bold,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  carInfo: {
    fontSize: typography.size.lg,
    color: colors.text.secondary,
    marginTop: spacing.sm,
  },
  parkingStatus: {
    fontSize: typography.size.base,
    marginTop: spacing.xs,
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
  publicMessage: {
    fontSize: typography.size.md,
    marginTop: spacing.sm,
    color: colors.text.primary,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingHorizontal: spacing.lg,
  },
  
  // Request Section
  requestSection: {
    padding: spacing.lg,
  },
  instruction: {
    fontSize: typography.size.base,
    marginBottom: spacing.md,
    color: colors.text.primary,
    textAlign: 'center',
  },
  licensePlateInput: {
    borderWidth: 1,
    borderColor: colors.border.light,
    padding: spacing.md,
    borderRadius: borderRadius.sm,
    marginBottom: spacing.md,
    fontSize: typography.size.base,
    backgroundColor: colors.surface.base,
    color: colors.text.primary,
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  button: {
    flex: 1,
    backgroundColor: colors.primary.start,
    padding: spacing.md,
    borderRadius: borderRadius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.medium,
  },
  messageButton: {
    backgroundColor: colors.notification.success,
  },
  buttonDisabled: {
    backgroundColor: colors.border.medium,
    opacity: 0.6,
  },
  buttonText: {
    color: colors.text.white,
    fontWeight: typography.weight.bold,
    fontSize: typography.size.base,
  },

  // Legacy styles (keeping for backward compatibility)
  closeButton: {
    position: 'absolute',
    top: 50,
    left: spacing.lg,
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    backgroundColor: colors.surface.darkGlass,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    ...shadows.small,
  },
  closeButtonText: {
    fontSize: typography.size.lg,
    color: colors.text.primary,
    fontWeight: typography.weight.bold,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    justifyContent: 'space-between',
    paddingTop: spacing.xxxl * 2.5,
    paddingBottom: spacing.xxxl,
  },
  displayName: {
    fontSize: typography.size.xxxl + 4,
    fontWeight: typography.weight.bold,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: spacing.md,
    letterSpacing: -0.5,
  },
  carSection: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  carBrand: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.medium,
    color: colors.text.secondary,
    marginBottom: spacing.xs,
  },
  carModel: {
    fontSize: typography.size.base,
    color: colors.text.tertiary,
    fontWeight: typography.weight.normal,
  },
  noCarText: {
    fontSize: typography.size.base,
    color: colors.text.tertiary,
    fontStyle: 'italic',
  },
  buttonSection: {
    width: '100%',
    gap: spacing.lg,
    marginTop: 'auto',
  },
  actionButton: {
    backgroundColor: colors.primary.start,
    paddingVertical: spacing.lg + 2,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
    ...shadows.medium,
  },
  actionButtonDisabled: {
    backgroundColor: colors.border.medium,
    opacity: 0.5,
  },
  actionButtonText: {
    color: colors.text.white,
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
    letterSpacing: 0.3,
  },
  actionButtonTextDisabled: {
    color: colors.text.tertiary,
  },
  chatButton: {
    backgroundColor: colors.surface.base,
    paddingVertical: spacing.lg + 2,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
    borderWidth: 1.5,
    borderColor: colors.border.medium,
  },
  chatButtonText: {
    color: colors.text.primary,
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
    letterSpacing: 0.3,
  },

  // Public Message Styles
  publicMessageSection: {
    backgroundColor: colors.surface.base,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border.light,
    ...shadows.small,
  },
  publicMessageLabel: {
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semibold,
    color: colors.text.secondary,
    marginBottom: spacing.sm,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  publicMessageText: {
    fontSize: typography.size.base,
    color: colors.text.primary,
    lineHeight: 22,
    fontStyle: 'italic',
  },

  // Parking History Styles
  historySection: {
    backgroundColor: colors.surface.base,
    borderRadius: borderRadius.md,
    marginBottom: spacing.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: colors.surface.base,
  },
  historyTitle: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
    color: colors.text.primary,
  },
  historyToggle: {
    fontSize: typography.size.sm,
    color: colors.text.secondary,
  },
  historyList: {
    padding: spacing.md,
  },
  historyItem: {
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  historyDate: {
    fontSize: typography.size.md,
    fontWeight: typography.weight.semibold,
    color: colors.text.primary,
    marginBottom: spacing.xs / 2,
  },
  historyDuration: {
    fontSize: typography.size.sm,
    color: colors.primary.start,
    marginBottom: spacing.xs / 2,
  },
  historyLocation: {
    fontSize: typography.size.sm,
    color: colors.text.secondary,
  },
  historyNote: {
    fontSize: typography.size.xs,
    color: colors.text.tertiary,
    textAlign: 'center',
    marginTop: spacing.md,
    fontStyle: 'italic',
  },
});