import { useState, useEffect } from "react";
import { MoveRequestService } from "../services/moveRequestService";

interface UseMoveRequestNotificationsOptions {
    pollInterval?: number; // Polling interval in milliseconds (default: 30000 = 30 seconds)
}

export const useMoveRequestNotifications = (
    userCode: string,
    options: UseMoveRequestNotificationsOptions = {}
) => {
    const { pollInterval = 30000 } = options;
    const [unreadCount, setUnreadCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const refreshUnreadCount = async () => {
        try {
            setIsLoading(true);
            const count = await MoveRequestService.getUnreadCount(userCode);
            setUnreadCount(count);
        } catch (error) {
            console.error("Failed to fetch move request count:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Initial fetch
    useEffect(() => {
        refreshUnreadCount();
    }, [userCode]);

    // Polling for updates
    useEffect(() => {
        if (!pollInterval) return; // Skip polling if interval is 0 or undefined

        const intervalId = setInterval(() => {
            refreshUnreadCount();
        }, pollInterval);

        return () => clearInterval(intervalId);
    }, [userCode, pollInterval]);

    return {
        moveRequestsUnreadCount: unreadCount,
        refreshMoveRequestsCount: refreshUnreadCount,
        isLoadingMoveRequests: isLoading
    };
};