import React from "react";
import { View, Text } from "react-native";
import { messageBubbleStyles } from "../../styles/chat/messageBubbleStyles";
import { formatLocalTime } from "../../utils/timeUtils";

interface MessageBubbleProps {
    message: {
        id: number;
        sender_user_code: string;
        message_content: string;
        created_at: string;
        is_read: boolean;
    };
    currentUserCode: string;
    senderDisplayName: string;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
    message,
    currentUserCode,
    senderDisplayName
}) => {
    const isSentMessage = message.sender_user_code === currentUserCode;
    // Using the utility function for consistent time formatting

    return (
        <View style={[
            messageBubbleStyles.container,
            isSentMessage ? messageBubbleStyles.sentContainer : messageBubbleStyles.receivedContainer
        ]}>
            <View style={[
                messageBubbleStyles.bubble,
                isSentMessage ? messageBubbleStyles.sentBubble : messageBubbleStyles.receivedBubble
            ]}>
                {!isSentMessage && (
                    <Text style={messageBubbleStyles.senderName}>{senderDisplayName}</Text>
                )}
                <Text style={[
                    messageBubbleStyles.messageText,
                    isSentMessage ? messageBubbleStyles.sentText : messageBubbleStyles.receivedText
                ]}>
                    {message.message_content}
                </Text>
                <View style={messageBubbleStyles.metaContainer}>
                    <Text style={[
                        messageBubbleStyles.timestamp,
                        isSentMessage ? messageBubbleStyles.sentTimestamp : messageBubbleStyles.receivedTimestamp
                    ]}>
                        {formatLocalTime(message.created_at)}
                    </Text>
                    {isSentMessage && (
                        <Text style={messageBubbleStyles.readStatus}>
                            {message.is_read ? '✓✓' : '✓'}
                        </Text>
                    )}
                </View>
            </View>
        </View>
    );
};
