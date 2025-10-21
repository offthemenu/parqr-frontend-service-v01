import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography,shadows } from '../../theme/tokens';

export const publicMessageCardStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.surface.base,
        borderRadius: borderRadius.md,
        padding: spacing.lg,
        marginTop: spacing.md,
        borderWidth: 1,
        borderColor: colors.border.light,
        ...shadows.small,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacing.sm,
    },
    icon: {
        marginRight: spacing.xs,
    },
    title: {
        fontSize: typography.size.sm,
        fontWeight: typography.weight.semibold,
        color: colors.primary.start,
    },
    message: {
        fontSize: typography.size.base,
        color: colors.text.primary,
        lineHeight: 22,
        fontStyle: 'italic',
        marginBottom: spacing.sm,
    },
    timestamp: {
        fontSize: typography.size.xs,
        color: colors.text.secondary,
        marginTop: spacing.xs,
    },
});