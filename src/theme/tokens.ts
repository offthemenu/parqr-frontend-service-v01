/**
 * Design System Tokens
 * Central source of truth for all design values
 * Import this file in stylesheets to replace hardcoded values
 */

export const colors = {
  // Brand Colors - Primary blue used throughout app
  primary: {
    start: '#007AFF',      // iOS system blue
    end: '#0051D5',        // Darker blue for gradients
    light: '#4DA3FF',      // Lighter variant for hovers
    dark: '#0040A0',       // Darker variant for pressed states
  },

  // Surface Colors - Backgrounds and cards
  surface: {
    base: '#FFFFFF',
    elevated: '#F8F9FA',
    glass: 'rgba(255, 255, 255, 0.7)',     // Glassmorphism
    glassStrong: 'rgba(255, 255, 255, 0.9)',
    darkGlass: 'rgba(0, 0, 0, 0.1)',
  },

  // Text Colors - Typography hierarchy
  text: {
    primary: '#1F2937',    // Dark gray for main text
    secondary: '#6B7280',  // Medium gray for secondary text
    tertiary: '#9CA3AF',   // Light gray for tertiary text
    white: '#FFFFFF',
    onPrimary: '#FFFFFF',  // Text on primary color backgrounds
  },

  // Semantic Colors
  notification: {
    error: '#FF3B30',      // Red for errors/alerts
    success: '#34C759',    // Green for success
    warning: '#FF9500',    // Orange for warnings
    info: '#007AFF',       // Blue for info
  },

  // Border Colors
  border: {
    light: '#E5E5EA',
    medium: '#C7C7CC',
    dark: '#8E8E93',
  },

  // Overlay Colors
  overlay: {
    light: 'rgba(0, 0, 0, 0.1)',
    medium: 'rgba(0, 0, 0, 0.3)',
    heavy: 'rgba(0, 0, 0, 0.6)',
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

export const borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  full: 9999,
};

export const typography = {
  size: {
    xs: 10,
    sm: 12,
    md: 14,
    base: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 28,
    display: 32,
  },
  weight: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    heavy: '800' as const,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// Shadow Presets - iOS-style layered shadows
export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  // Colored shadows for premium feel
  primary: {
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  notification: {
    shadowColor: '#FF3B30',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
};

// Animation Timing
export const animations = {
  timing: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  spring: {
    bouncy: {
      damping: 10,
      stiffness: 100,
    },
    smooth: {
      damping: 20,
      stiffness: 90,
    },
    gentle: {
      damping: 30,
      stiffness: 80,
    },
  },
};
