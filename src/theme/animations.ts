/**
 * Animation Configurations for React Native Reanimated
 * Import these configs when adding animations to components
 */

import { withSpring, withTiming, Easing } from 'react-native-reanimated';

export const springConfigs = {
  bouncy: {
    damping: 10,
    stiffness: 100,
    mass: 0.5,
  },
  smooth: {
    damping: 20,
    stiffness: 90,
    mass: 0.8,
  },
  gentle: {
    damping: 30,
    stiffness: 80,
    mass: 1,
  },
};

export const timingConfigs = {
  fast: {
    duration: 200,
    easing: Easing.out(Easing.ease),
  },
  normal: {
    duration: 300,
    easing: Easing.out(Easing.ease),
  },
  slow: {
    duration: 500,
    easing: Easing.out(Easing.ease),
  },
};

// Helper functions for common animations
export const animateSpring = (value: number, config = springConfigs.smooth) => {
  'worklet';
  return withSpring(value, config);
};

export const animateTiming = (value: number, config = timingConfigs.normal) => {
  'worklet';
  return withTiming(value, config);
};
