interface MessageListProps {
    conversationId: string | string[];
}

const MessagesList: React.FC<MessageListProps> = ({
    conversationId
}) => {
    return (
        <div>
            {conversationId}
            Hello ceci est un nvx test
        </div>
    )
}

export default MessagesList;