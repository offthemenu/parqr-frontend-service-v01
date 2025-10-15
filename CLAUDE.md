# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

parQR is a React Native mobile app built with Expo for parking management. Users can:
- Register with phone number and create QR codes for their cars
- Start parking sessions with public messages
- Scan QR codes to view other users' profiles
- Send move car requests to parked users
- Chat with other users

## Development Commands

### Starting the App
```bash
npm start          # Start Expo development server
npm run ios        # Run on iOS simulator
npm run android    # Run on Android emulator
npm run web        # Run in web browser
```

### Environment Setup
```bash
# Update local development IP (for physical device testing)
npm run update-ip  # Auto-updates src/config/development.local.ts with your network IP

# Type checking
npx tsc --noEmit

# Clear cache when encountering issues
npx expo start --clear
npx expo start --reset-cache
```

### Environment Configuration
Copy `.env.template` to `.env` and configure:
- **Production/staging**: No configuration needed (uses Cloud Run by default)
- **Local backend**: Set `EXPO_PUBLIC_USE_LOCAL=true` and `EXPO_PUBLIC_NETWORK_MODE=localhost`
- **Physical device testing**: Set `EXPO_PUBLIC_NETWORK_MODE=work_wifi` or `custom` with appropriate IP

## Architecture

### Service Layer Pattern
All API communication goes through service classes in `src/services/`:
- **authService.ts**: AsyncStorage-based authentication (stores user_code and user data)
- **userService.ts**: User registration, lookup, profile management
- **carService.ts**: Car CRUD operations (registration, editing, deletion)
- **parkingService.ts**: Parking session management (start, end, history)
- **chatService.ts**: Real-time messaging between users
- **moveRequestService.ts**: Car move requests via `/v01/move_requests/create`

### API Client Configuration
`src/config/api.ts` contains the axios client with:
- Environment-based URL switching (local vs Cloud Run)
- Request/response interceptors for debugging
- Authentication header injection (x-user-code)
- Network configuration for different development scenarios

### Navigation Structure
Stack navigation defined in `App.tsx`:
1. **Auth Flow**: Splash → SignIn → Register → CarRegistration
2. **Main Flow**: Home (main hub with sections)
3. **Feature Screens**: QRScanner → PublicProfile, StartParking, ChatScreen, etc.

Key navigation params in `src/types/index.ts` (RootStackParamList):
- Most screens receive user data to avoid refetching
- PublicProfile uses `UserWithCarsResponse` (privacy-safe, no phone_number)
- Chat requires recipientUserCode and recipientDisplayName

### Type System
All types centralized in `src/types/index.ts`:
- **Privacy-preserving types**: `CarResponse` excludes license_plate, `UserWithCarsResponse` excludes phone_number
- **Owner context types**: `CarOwnerResponse` includes license_plate for owner's own cars
- **Navigation types**: `RootStackParamList` defines all screen parameters
- **API types**: Request/Response interfaces match backend contracts

### Component Organization
```
src/
├── components/          # Reusable UI components
│   ├── home/           # Home screen sections (ParkingSessionCard, StartParkingSection, etc.)
│   ├── chat/           # Chat UI (MessageBubble, ChatInput, ConversationCard)
│   └── *.tsx           # Shared components (QRCodeDisplay, ActionButton, etc.)
├── screens/            # Full-screen views (one per route)
├── styles/             # StyleSheet definitions (colocated with components by feature)
├── hooks/              # Custom hooks (useMessagePolling, useChatNotifications, etc.)
└── utils/              # Utilities (validation, timeUtils, alertUtils)
```

### State Management
- **AsyncStorage**: User authentication state (user_code, user_data)
- **Props drilling**: User data passed through navigation params
- **Polling**: Custom hooks for real-time features (messages, notifications)

### Feature Gating
`src/hooks/useFeatureGating.ts` controls feature rollout by user tier.

## Key Implementation Patterns

### Move Car Request Flow
1. User scans QR → lands on PublicProfileScreen
2. Taps "Request to Move Car" → Alert.prompt asks for license plate
3. License plate submitted → `MoveRequestService.createRequest(userCode, licensePlate)`
4. Backend validates and creates request at `/v01/move_requests/create`
5. No auto-send via chat (deprecated pattern removed in latest commit)

### Phone Number Handling
- **Korean format**: 010-XXXX-XXXX (display) vs 010XXXXXXXX (API)
- Validation in `src/utils/validation.ts` with country-specific rules
- KOREAN_PHONE_CONFIG constant in types defines format rules

### Authentication Flow
1. User enters phone → lookup via `UserService.lookupByPhone()`
2. If exists: Sign in (store user_code)
3. If not exists: Register → Add car → Navigate to Home
4. All subsequent API calls include `x-user-code` header (injected by apiClient)

### QR Code Integration
- Generated on backend, referenced by `qr_code_id`
- `qr_image_path` links to backend-hosted QR image
- QR contains deep link with user_code for profile viewing

### Parking Session Management
- Active session tracked via `parking_status` field in user response
- Start parking: Select car + optional public message
- End parking: Called automatically or manually from HomeScreen
- History accessible via ParkingHistoryScreen

## Common Development Tasks

### Adding a New Service Method
1. Define request/response types in `src/types/index.ts`
2. Add method to appropriate service class (static async pattern)
3. Use `apiClient.post/get()` with error handling
4. Return typed response data

### Adding a New Screen
1. Create screen component in `src/screens/`
2. Add route to RootStackParamList in `src/types/index.ts`
3. Register in App.tsx Stack.Navigator
4. Create corresponding styles file in `src/styles/`

### Backend API Endpoint Mapping
All endpoints prefixed with `/api/v01/`:
- User: `/users/register`, `/users/lookup_phone`, `/users/lookup_code/{user_code}`
- Car: `/cars/register`, `/cars/{car_id}`, `/cars/owner_cars`
- Parking: `/parking_sessions/start`, `/parking_sessions/end`, `/parking_sessions/history`
- Move requests: `/move_requests/create`, `/move_requests/history`
- Chat: `/chat/messages`, `/chat/conversations`, `/chat/mark_read`

### Debugging API Issues
- Check console logs for 📤 Request and ✅/❌ Response logs (added by apiClient interceptors)
- Verify API_BASE_URL in console on app start (🌐 API Configuration log)
- For 404 errors: Confirm endpoint exists in backend (check `/docs` on backend)
- For auth errors: Verify x-user-code header is being sent

### Testing on Physical Devices
1. Ensure device and computer on same WiFi
2. Run `npm run update-ip` to auto-configure local development IP
3. OR manually set `EXPO_PUBLIC_NETWORK_MODE=work_wifi` with correct IP in `.env`
4. Backend must be accessible from device's network

## Project-Specific Conventions

### Error Handling
- Backend returns `{"detail": "error message"}` on errors
- Extract with `error.response?.data?.detail || error.message`
- Display user-friendly alerts via `Alert.alert()` or custom alertUtils

### Styling
- Separate style files in `src/styles/` directory
- Feature-based organization (e.g., `src/styles/home/`, `src/styles/chat/`)
- Use StyleSheet.create() for performance

### Async Operations
- All service methods are async/await
- Loading states managed in component state
- Try-catch blocks with user-facing error messages

### Privacy Considerations
- Never expose phone numbers in public-facing types
- License plates only visible to car owners
- Use `UserWithCarsResponse` for public profiles, `CarResponse` for public car lists
- Use `CarOwnerResponse` only when showing user's own cars
