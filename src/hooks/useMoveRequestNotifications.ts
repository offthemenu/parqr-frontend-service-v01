import { useState, useEffect, useRef, useCallback } from "react";
import { AppState, AppStateStatus } from "react-native";
import { MoveRequestService } from "../services/moveRequestService";

interface UseMoveRequestNotificationsOptions {
    pollInterval?: number; // Polling interval in milliseconds (default: 30000 = 30 seconds)
    enabled?: boolean; // Whether notifications are enabled (default: true)
}

export const useMoveRequestNotifications = (
    userCode: string,
    options: UseMoveRequestNotificationsOptions = {}
) => {
    const { pollInterval = 30000, enabled = true } = options;
    const [unreadCount, setUnreadCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const isScreenFocused = useRef(false);

    // Stable refresh function
    const refreshUnreadCount = useCallback(async () => {
        if (!enabled || !userCode) return;

        try {
            setIsLoading(true);
            const count = await MoveRequestService.getUnreadCount(userCode);
            setUnreadCount(count);
        } catch (error) {
            console.error("Failed to fetch move request count:", error);
        } finally {
            setIsLoading(false);
        }
    }, [enabled, userCode]);

    // Stable stopPolling function
    const stopPolling = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    // Stable startPolling function
    const startPolling = useCallback(() => {
        // Clear any existing interval
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        // Only start polling if enabled and screen is focused
        if (!enabled || !pollInterval || !isScreenFocused.current) return;

        console.log('🔄 Starting move request polling...');
        intervalRef.current = setInterval(() => {
            if (isScreenFocused.current) {
                console.log('🔄 Polling move request notifications...');
                refreshUnreadCount();
            }
        }, pollInterval);
    }, [enabled, pollInterval, refreshUnreadCount]);

    // Initial fetch
    useEffect(() => {
        if (enabled && userCode) {
            refreshUnreadCount();
        }
    }, [userCode, enabled]);

    // Handle app state changes (pause polling when app is backgrounded)
    useEffect(() => {
        const handleAppStateChange = (nextAppState: AppStateStatus) => {
            if (nextAppState === 'active' && isScreenFocused.current) {
                // App came to foreground and screen is focused
                refreshUnreadCount();
                startPolling();
            } else if (nextAppState.match(/inactive|background/)) {
                // App went to background
                stopPolling();
            }
        };

        const subscription = AppState.addEventListener('change', handleAppStateChange);

        return () => {
            subscription?.remove();
        };
    }, [refreshUnreadCount, startPolling, stopPolling]);

    // Cleanup polling on unmount
    useEffect(() => {
        return () => {
            stopPolling();
        };
    }, []);

    // Stable wrapper functions for external use
    const handleStartPolling = useCallback(() => {
        isScreenFocused.current = true;
        startPolling();
    }, [startPolling]);

    const handleStopPolling = useCallback(() => {
        isScreenFocused.current = false;
        stopPolling();
    }, [stopPolling]);

    return {
        moveRequestsUnreadCount: unreadCount,
        refreshMoveRequestsCount: refreshUnreadCount,
        isLoadingMoveRequests: isLoading,
        // Expose stable methods to control polling from parent component
        startPolling: handleStartPolling,
        stopPolling: handleStopPolling
    };
};