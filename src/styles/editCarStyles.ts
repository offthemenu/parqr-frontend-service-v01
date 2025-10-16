import { StyleSheet } from "react-native";
import { colors, spacing, borderRadius, typography, shadows } from '../theme/tokens';

export const editCarStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.surface.elevated,
    },
    form: {
        padding: spacing.lg,
    },
    title: {
        fontSize: typography.size.xxl,
        fontWeight: typography.weight.bold,
        color: colors.text.primary,
        marginBottom: spacing.xl,
        textAlign: 'center',
    },
    inputGroup: {
        marginBottom: spacing.lg,
    },
    label: {
        fontSize: typography.size.base,
        fontWeight: typography.weight.semibold,
        color: colors.text.primary,
        marginBottom: spacing.sm,
    },
    input: {
        backgroundColor: colors.surface.base,
        borderRadius: borderRadius.md,
        padding: spacing.md,
        fontSize: typography.size.base,
        borderWidth: 1,
        borderColor: colors.border.light,
        color: colors.text.primary,
    },
    updateButton: {
        backgroundColor: colors.primary.start,
        borderRadius: borderRadius.md,
        padding: spacing.md,
        alignItems: 'center',
        marginTop: spacing.lg,
        ...shadows.medium,
    },
    updateButtonDisabled: {
        opacity: 0.6,
    },
    updateButtonText: {
        color: colors.text.white,
        fontSize: typography.size.lg,
        fontWeight: typography.weight.semibold,
    },
    cancelButton: {
        backgroundColor: colors.surface.elevated,
        borderRadius: borderRadius.md,
        padding: spacing.md,
        alignItems: 'center',
        marginTop: spacing.sm,
        borderWidth: 1,
        borderColor: colors.border.light,
    },
    cancelButtonText: {
        color: colors.text.primary,
        fontSize: typography.size.base,
        fontWeight: typography.weight.medium,
    },
});