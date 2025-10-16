# Design System Migration Checklist

This document tracks the migration of all components and screens to the new design system.

## Progress Overview
- ✅ **Phase 1**: Foundation Setup (COMPLETE)
- 🔄 **Phase 2**: Component & Screen Migration (IN PROGRESS)
- ⏳ **Phase 3**: Testing & Refinement (PENDING)

---

## Phase 1: Foundation Setup ✅

- [x] Install required libraries
  - [x] expo-linear-gradient
  - [x] expo-blur
  - [x] react-native-reanimated
  - [x] expo-haptics
  - [x] @expo/vector-icons
- [x] Create `src/theme/` directory structure
- [x] Create `src/theme/tokens.ts` (colors, spacing, typography, shadows)
- [x] Create `src/theme/gradients.tsx` (PrimaryGradient, CardGradient, GlassGradient)
- [x] Create `src/theme/animations.ts` (animation configs)

---

## Phase 2: Component & Screen Migration

### Components

#### Chat Components ✅
- [x] **ChatInput** (`src/components/chat/ChatInput.tsx`)
  - [x] Update `chatInputStyles.ts` with tokens
  - [x] Replace text with send icon
  - [x] Add haptic feedback
  - [x] Token-based placeholder color

- [x] **MessageBubble** (`src/components/chat/MessageBubble.tsx`)
  - [x] Update `messageBubbleStyles.ts` with tokens
  - [x] Add subtle shadows to bubbles
  - [x] No component changes needed

- [x] **ConversationCard** (`src/components/chat/ConversationCard.tsx`)
  - [x] Update `conversationCardStyles.ts` with tokens
  - [x] Add shadow to avatar
  - [x] Add haptic feedback on tap
  - [x] Shadow on unread badge

#### Core Components (Partial) ✅
- [x] **ActionButton** (`src/components/ActionButton.tsx`)
  - [x] Update `actionButtonStyles.ts` with tokens
  - [x] Add shadows to buttons
  - [x] Contextual haptic feedback
  - [x] All variants (primary, secondary, danger)

- [x] **QuickActionCard** (`src/components/QuickActionCard.tsx`)
  - [x] Update `quickActionCardStyles.ts` with tokens
  - [x] Add shadow
  - [x] Add haptic feedback

#### Core Components (Remaining) ⏳
- [ ] **CountryPicker** (`src/components/CountryPicker.tsx`)
  - [ ] Update `countryPickerStyles.ts` with tokens
  - [ ] Add haptic feedback on selection

- [ ] **PhoneNumberInput** (`src/components/PhoneNumberInput.tsx`)
  - [ ] Update `phoneInputStyles.ts` with tokens
  - [ ] Token-based colors

- [ ] **QRCodeDisplay** (`src/components/QRCodeDisplay.tsx`)
  - [ ] Update `qrCodeDisplayStyles.ts` with tokens
  - [ ] Add card shadow

- [ ] **RegistrationSuccess** (`src/components/RegistrationSuccess.tsx`)
  - [ ] Update `registrationSuccessStyles.ts` with tokens
  - [ ] Success icon with Ionicons

- [ ] **UserActionModal** (`src/components/UserActionModal.tsx`)
  - [ ] Style with tokens (likely inline)
  - [ ] Add blur background

- [ ] **UserInfoCard** (`src/components/UserInfoCard.tsx`)
  - [ ] Update `userInfoCardStyles.ts` with tokens
  - [ ] Add shadow

#### Home Components ⏳
- [x] **NotificationBadge** (`src/components/home/NotificationBadge.tsx`)
  - [x] Update `notificationBadgeStyles.ts` with tokens
  - [x] Add colored shadow

- [ ] **ParkingHistorySection** (`src/components/home/ParkingHistorySection.tsx`)
  - [ ] Update `parkingHistorySectionStyles.ts` with tokens
  - [ ] Add card shadows
  - [ ] Add haptic feedback

- [ ] **ParkingSessionCard** (`src/components/home/ParkingSessionCard.tsx`)
  - [ ] Update `parkingSessionCardStyles.ts` with tokens
  - [ ] Add gradient header
  - [ ] Add haptic feedback on buttons

- [ ] **ParkOutRequestsSection** (`src/components/home/ParkOutRequestsSection.tsx`)
  - [ ] Update `parkOutRequestsSectionStyles.ts` with tokens
  - [ ] Add haptic feedback

- [ ] **RegisteredCarPanel** (`src/components/home/RegisteredCarPanel.tsx`)
  - [ ] Update `registeredCarPanelStyles.ts` with tokens
  - [ ] Add haptic feedback

- [ ] **StartParkingSection** (`src/components/home/StartParkingSection.tsx`)
  - [ ] Update `startParkingSectionStyles.ts` with tokens
  - [ ] Add gradient or shadow
  - [ ] Add haptic feedback

### Screens

#### Authentication Screens ⏳
- [ ] **SplashScreen** (`src/screens/SplashScreen.tsx`)
  - [ ] Update `splashScreenStyles.ts` with tokens
  - [ ] Add gradient background
  - [ ] Animated logo (optional)

- [ ] **SignInScreen** (`src/screens/SignInScreen.tsx`)
  - [ ] Update `signInScreenStyles.ts` with tokens
  - [ ] Replace emoji with icons
  - [ ] Add haptic feedback

- [ ] **RegisterScreen** (`src/screens/RegisterScreen.tsx`)
  - [ ] Update `registerScreenStyles.ts` with tokens
  - [ ] Add icons
  - [ ] Add haptic feedback

#### Main Screens (Partial) ✅
- [x] **HomeScreen** (`src/screens/HomeScreen.tsx`)
  - [x] Update `homeScreenStyles.ts` with tokens
  - [x] Add PrimaryGradient header
  - [x] BlurView on header buttons
  - [x] Replace emoji with Ionicons
  - [x] Add haptic feedback throughout

#### Main Screens (Remaining) ⏳
- [ ] **ProfileScreen** (`src/screens/ProfileScreen.tsx`)
  - [ ] Update `profileScreenStyles.ts` with tokens
  - [ ] Add gradient header
  - [ ] Replace emoji with icons
  - [ ] Add haptic feedback

- [ ] **QRScannerScreen** (`src/screens/QRScannerScreen.tsx`)
  - [ ] Update `qrScannerStyles.ts` with tokens
  - [ ] Styled overlay
  - [ ] Haptic on scan success

- [ ] **PublicProfileScreen** (`src/screens/PublicProfileScreen.tsx`)
  - [ ] Update `publicProfileStyles.ts` with tokens
  - [ ] Add icons
  - [ ] Add haptic feedback

#### Chat Screens ⏳
- [ ] **ChatScreen** (`src/screens/ChatScreen.tsx`)
  - [ ] Update `chatScreenStyles.ts` with tokens
  - [ ] Gradient header
  - [ ] Haptic feedback

- [ ] **ChatListScreen** (`src/screens/ChatListScreen.tsx`)
  - [ ] Update `chatListStyles.ts` with tokens
  - [ ] Search bar with tokens
  - [ ] Haptic feedback

#### Car Management Screens ⏳
- [ ] **CarRegistrationScreen** (`src/screens/CarRegistrationScreen.tsx`)
  - [ ] Update `carRegistrationStyles.ts` with tokens
  - [ ] Add icons
  - [ ] Add haptic feedback

- [ ] **EditCarScreen** (`src/screens/EditCarScreen.tsx`)
  - [ ] Update `editCarStyles.ts` with tokens
  - [ ] Add icons
  - [ ] Add haptic feedback

- [ ] **CarManagementScreen** (`src/screens/CarManagementScreen.tsx`)
  - [ ] Update `carManagementStyles.ts` with tokens
  - [ ] Add card shadows
  - [ ] Add haptic feedback

#### Parking Screens ⏳
- [ ] **StartParkingScreen** (`src/screens/StartParkingScreen.tsx`)
  - [ ] Update `startParkingScreenStyles.ts` with tokens
  - [ ] Add gradient or card effects
  - [ ] Add haptic feedback

- [ ] **ParkingHistoryScreen** (`src/screens/ParkingHistoryScreen.tsx`)
  - [ ] Update `parkingHistoryStyles.ts` with tokens
  - [ ] Add card shadows
  - [ ] Add icons

- [ ] **ParkOutHistoryScreen** (`src/screens/ParkOutHistoryScreen.tsx`)
  - [ ] Update `parkOutHistoryStyles.ts` with tokens
  - [ ] Add card shadows
  - [ ] Add icons

---

## Phase 3: Testing & Refinement ⏳

### Visual Testing
- [ ] Test on iOS Simulator
  - [ ] All gradients render correctly
  - [ ] Blur effects work
  - [ ] Shadows appear correctly
  - [ ] Icons display properly
- [ ] Test on Android Emulator
  - [ ] Gradients render (may differ slightly)
  - [ ] Elevation shadows work
  - [ ] Touch feedback works
- [ ] Test on Physical Device
  - [ ] Haptics trigger correctly
  - [ ] Performance is smooth
  - [ ] No visual glitches

### Code Quality
- [ ] Zero hardcoded color values in stylesheets
- [ ] All spacing uses tokens
- [ ] All typography uses tokens
- [ ] All shadows use tokens
- [ ] TypeScript errors resolved

### Performance
- [ ] No noticeable lag when navigating
- [ ] Smooth animations
- [ ] Fast list scrolling

---

## Migration Statistics

### Completed: 7 items ✅
- Foundation (5 items)
- HomeScreen (1 screen)
- Chat Components (3 components)
- Core Components (2 components)

### In Progress: 0 items

### Remaining: ~30 items
- Components: ~13
- Screens: ~16
- Testing: ~8

### Estimated Completion
- At current pace: ~3-4 more sessions
- Total time invested: ~4 hours
- Remaining time: ~6-8 hours

---

## Notes & Decisions

### Design Patterns Established
1. **Gradients**: Used for headers and primary surfaces
2. **Shadows**: Small for cards, Medium for buttons, Primary/Colored for emphasis
3. **Haptics**: Light for cards, Medium for buttons, Heavy for danger actions
4. **Icons**: Ionicons throughout, replacing emoji
5. **Blur**: Used sparingly for header buttons and overlays

### Common Gotchas
1. BlurView has limited Android support - use fallback colors
2. Haptics only work on physical devices
3. Remember to add `overflow: 'hidden'` for BlurView
4. Always import tokens at top of stylesheet files

### Next Priority
Based on user flow and visibility:
1. ProfileScreen (high visibility)
2. Authentication screens (first impression)
3. Car management screens (core functionality)
4. Remaining home components
5. History screens (lower priority)
