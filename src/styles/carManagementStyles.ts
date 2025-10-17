import { StyleSheet } from "react-native";
import { colors, spacing, borderRadius, typography, shadows } from '../theme/tokens';

export const carManagementStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.surface.background,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        padding: spacing.lg,
        backgroundColor: colors.surface.base,
        marginBottom: spacing.md,
    },
    headerTitle: {
        fontSize: typography.size.xxl,
        fontWeight: typography.weight.bold,
        color: colors.text.primary,
        marginBottom: spacing.xs,
    },
    headerSubtitle: {
        fontSize: typography.size.base,
        color: colors.text.primary,
    },
    carCard: {
        backgroundColor: colors.surface.base,
        marginHorizontal: spacing.lg,
        marginVertical: spacing.sm,
        borderRadius: borderRadius.md,
        padding: spacing.md,
        ...shadows.medium,
    },
    activeCarCard: {
        borderWidth: 2,
        borderColor: colors.primary.start,
    },
    carInfo: {
        marginBottom: spacing.md,
    },
    carBrand: {
        fontSize: typography.size.lg,
        fontWeight: typography.weight.bold,
        color: colors.text.primary,
        marginBottom: spacing.xs,
    },
    carModel: {
        fontSize: typography.size.base,
        color: colors.text.primary,
        marginBottom: spacing.sm,
    },
    licensePlate: {
        fontSize: typography.size.base,
        fontWeight: typography.weight.semibold,
        color: colors.primary.start,
        backgroundColor: colors.surface.elevated,
        padding: spacing.sm,
        borderRadius: borderRadius.xs,
        alignSelf: 'flex-start',
        marginBottom: spacing.sm,
    },
    activeBadge: {
        backgroundColor: colors.notification.success,
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        borderRadius: borderRadius.full,
        alignSelf: 'flex-start',
    },
    activeText: {
        color: colors.text.white,
        fontSize: typography.size.sm,
        fontWeight: typography.weight.semibold,
    },
    carActions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: spacing.sm,
    },
    actionButton: {
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        borderRadius: borderRadius.sm,
        backgroundColor: colors.primary.start,
        ...shadows.small,
    },
    editButton: {
        backgroundColor: colors.notification.warning,
    },
    removeButton: {
        backgroundColor: colors.notification.error,
    },
    actionButtonText: {
        color: colors.text.white,
        fontSize: typography.size.md,
        fontWeight: typography.weight.semibold,
    },
    removeButtonText: {
        color: colors.text.white,
        fontSize: typography.size.md,
        fontWeight: typography.weight.semibold,
    },
    addCarButton: {
        backgroundColor: colors.notification.success,
        marginHorizontal: spacing.lg,
        marginVertical: spacing.md,
        paddingVertical: spacing.md,
        borderRadius: borderRadius.md,
        alignItems: 'center',
        ...shadows.medium,
    },
    addCarButtonText: {
        color: colors.text.white,
        fontSize: typography.size.lg,
        fontWeight: typography.weight.semibold,
    },
    premiumPrompt: {
        backgroundColor: colors.surface.elevated,
        marginHorizontal: spacing.lg,
        marginVertical: spacing.md,
        paddingVertical: spacing.lg,
        paddingHorizontal: spacing.md,
        borderRadius: borderRadius.md,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.border.light,
    },
    premiumText: {
        color: colors.text.secondary,
        fontSize: typography.size.base,
        fontWeight: typography.weight.medium,
        textAlign: 'center',
    },
})