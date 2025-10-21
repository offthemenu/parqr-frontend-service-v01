import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../../theme/tokens';

export const parkingStatusBadgeStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        borderRadius: borderRadius.full,
        marginTop: spacing.sm,
        alignSelf: 'flex-start',
    },
    activeContainer: {
        backgroundColor: colors.notification.successLight,
        borderWidth: 1,
        borderColor: colors.notification.success,
    },
    inactiveContainer: {
        backgroundColor: colors.surface.elevated,
        borderWidth: 1,
        borderColor: colors.border.medium,
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: borderRadius.xs,
        marginRight: spacing.xs,
    },
    activeIndicator: {
        backgroundColor: colors.notification.success,
    },
    inactiveIndicator: {
        backgroundColor: colors.text.tertiary,
    },
    text: {
        fontSize: typography.size.sm,
        fontWeight: typography.weight.medium,
    },
    activeText: {
        color: colors.notification.successDark,
    },
    inactiveText: {
        color: colors.text.tertiary,
    },
});