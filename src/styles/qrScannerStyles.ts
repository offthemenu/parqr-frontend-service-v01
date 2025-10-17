import { StyleSheet, Dimensions } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../theme/tokens';

const { width, height } = Dimensions.get('window');
const scanAreaSize = width * 0.7;

export const qrScannerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.text.primary,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  topOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: spacing.lg,
  },
  instructions: {
    color: colors.text.white,
    fontSize: typography.size.base,
    textAlign: 'center',
    paddingHorizontal: spacing.lg,
    fontWeight: typography.weight.medium,
  },
  scanArea: {
    height: scanAreaSize,
    flexDirection: 'row',
  },
  scanFrame: {
    width: scanAreaSize,
    height: scanAreaSize,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  bottomOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: spacing.lg,
  },
  cancelButton: {
    backgroundColor: colors.surface.darkGlass,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    marginBottom: spacing.sm,
    ...shadows.small,
  },
  cancelButtonText: {
    color: colors.text.white,
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
  },
  scanAgainButton: {
    backgroundColor: colors.primary.start,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    ...shadows.medium,
  },
  scanAgainButtonText: {
    color: colors.text.white,
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
  },
  message: {
    textAlign: 'center',
    fontSize: typography.size.lg,
    color: colors.text.white,
    marginBottom: spacing.lg,
    fontWeight: typography.weight.medium,
  },
  permissionButton: {
    backgroundColor: colors.primary.start,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    alignSelf: 'center',
    ...shadows.medium,
  },
  permissionButtonText: {
    color: colors.text.white,
    fontSize: typography.size.base,
    fontWeight: typography.weight.semibold,
  },
});