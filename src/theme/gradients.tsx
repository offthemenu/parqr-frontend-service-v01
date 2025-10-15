/**
 * Reusable Gradient Components
 * Pre-configured LinearGradient wrappers for common use cases
 */

import React from 'react';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import { colors } from './tokens';

interface GradientProps extends Omit<LinearGradientProps, 'colors'> {
  children?: React.ReactNode;
  style?: any;
}

/**
 * Primary Gradient - Blue gradient for headers and primary actions
 */
export const PrimaryGradient: React.FC<GradientProps> = ({ children, style, ...props }) => (
  <LinearGradient
    colors={[colors.primary.start, colors.primary.end]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={style}
    {...props}
  >
    {children}
  </LinearGradient>
);

/**
 * Card Gradient - Subtle gradient for cards and panels
 */
export const CardGradient: React.FC<GradientProps> = ({ children, style, ...props }) => (
  <LinearGradient
    colors={[colors.surface.base, colors.surface.elevated]}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={style}
    {...props}
  >
    {children}
  </LinearGradient>
);

/**
 * Glass Gradient - Glassmorphism effect
 */
export const GlassGradient: React.FC<GradientProps> = ({ children, style, ...props }) => (
  <LinearGradient
    colors={[colors.surface.glass, colors.surface.glassStrong]}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={style}
    {...props}
  >
    {children}
  </LinearGradient>
);
