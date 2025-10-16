import { StyleSheet } from "react-native";
import { colors, spacing, borderRadius, typography, shadows } from '../../theme/tokens';

export const startParkingSectionStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.surface.base,
        borderRadius: borderRadius.md,
        marginHorizontal: spacing.lg,
        marginVertical: spacing.sm,
        ...shadows.medium,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: spacing.md,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: borderRadius.full,
        backgroundColor: '#F0F7FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: spacing.md,
    },
    icon: {
        fontSize: typography.size.xxl,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: typography.size.base,
        fontWeight: typography.weight.semibold,
        color: colors.text.primary,
        marginBottom: spacing.xs,
    },
    subtitle: {
        fontSize: typography.size.md,
        color: colors.text.secondary,
    },
    arrowContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: spacing.sm,
    },
    arrow: {
        fontSize: typography.size.display,
        color: colors.primary.start,
        fontWeight: typography.weight.normal,
    },
});