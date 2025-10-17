/**
 * Design System Tokens
 * Central source of truth for all design values
 * Import this file in stylesheets to replace hardcoded values
 */

export const colors = {
  // Brand Colors - Teal green primary palette
  primary: {
    start: '#009777',      // Teal green - main brand color
    end: '#00725B',        // Darker teal for gradients
    light: '#33AC92',      // Lighter teal for hovers
    dark: '#005A48',       // Darker teal for pressed states
  },

  // Secondary/Accent - Warm brown tones
  secondary: {
    main: '#705C58',       // Brownish accent color
    light: '#8C7570',      // Lighter brown
    dark: '#5A4A46',       // Darker brown
  },

  // Surface Colors - Warm neutral backgrounds
  surface: {
    base: '#FFFFFF',           // Pure white for cards
    elevated: '#F5EFE7',       // Toned down warm beige (softer than #EBD7BB)
    background: '#FAF7F2',     // Very light warm background
    glass: 'rgba(255, 255, 255, 0.7)',     // Glassmorphism
    glassStrong: 'rgba(255, 255, 255, 0.9)',
    darkGlass: 'rgba(61, 56, 60, 0.1)',    // Subtle dark glass using text color
  },

  // Text Colors - Warm dark tones
  text: {
    primary: '#3D383C',        // Your dark brownish-gray for main text
    secondary: '#705C58',      // Using secondary color for secondary text
    tertiary: '#9B8F8B',       // Lighter warm gray for tertiary text
    white: '#FFFFFF',
    onPrimary: '#FFFFFF',      // Text on primary color backgrounds
    onSecondary: '#FFFFFF',    // Text on secondary color backgrounds
  },

  // Semantic Colors - Adjusted to match warm palette
  notification: {
    error: '#D84339',          // Warmer red
    success: '#009777',        // Using primary green for success
    warning: '#E89B3C',        // Warm orange
    info: '#009777',           // Using primary for info
  },

  // Border Colors - Warm neutrals
  border: {
    light: '#E8DFD6',          // Light warm border
    medium: '#D1C4B8',         // Medium warm border
    dark: '#9B8F8B',           // Dark warm border
  },

  // Overlay Colors
  overlay: {
    light: 'rgba(61, 56, 60, 0.1)',    // Subtle overlay
    medium: 'rgba(61, 56, 60, 0.3)',   // Medium overlay
    heavy: 'rgba(61, 56, 60, 0.6)',    // Heavy overlay
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
    shadowColor: '#009777',    // Teal green shadow
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  notification: {
    shadowColor: '#D84339',    // Warm red shadow
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
