import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../theme/tokens';

export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface.base,
    position: 'relative',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    // Note: backgroundColor removed - will use PrimaryGradient wrapper
    paddingTop: spacing.lg,
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.semibold,
    color: colors.text.white,
    flex: 1,
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // for badge positioning
    overflow: 'hidden', // for blur effect
  },
  headerButtonText: {
    fontSize: typography.size.lg,
  },
  qrSection: {
    alignItems: 'center',
    padding: spacing.lg,
    backgroundColor: colors.surface.elevated,
  },
  sectionTitle: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.semibold,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  qrDescription: {
    fontSize: typography.size.md,
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  actionsSection: {
    padding: spacing.lg,
  },
  carsSection: {
    padding: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border.light,
  },
  carCard: {
    backgroundColor: colors.surface.elevated,
    padding: spacing.md,
    borderRadius: borderRadius.sm,
    marginBottom: spacing.sm,
  },
  carInfo: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.medium,
    color: colors.text.primary,
    marginBottom: 4,
  },
  licensePlate: {
    fontSize: typography.size.md,
    color: colors.text.secondary,
    fontFamily: 'Courier',
  },
  parkingSection: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary.start,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.primary,
  },
  floatingButtonText: {
    fontSize: typography.size.md,
    fontWeight: typography.weight.bold,
    color: colors.text.white,
  },
  premiumPrompt: {
    backgroundColor: colors.surface.elevated,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border.light,
    marginTop: spacing.sm,
  },
  premiumText: {
    color: colors.text.tertiary,
    fontSize: typography.size.base,
    fontWeight: typography.weight.medium,
    textAlign: 'center',
  },
});