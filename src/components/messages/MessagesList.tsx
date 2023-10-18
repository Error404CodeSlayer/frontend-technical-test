import { getLoggedUserId } from "../../utils/getLoggedUserId";
import MessageItem from "./MessagesItem";
import useGetMessages from "../../hooks/useGetMessages";

interface MessageListProps {
  conversationId: string | string[];
}

const MessagesList: React.FC<MessageListProps> = ({ conversationId }) => {
  const { messages, isLoading, error } = useGetMessages(conversationId);
  const userId = getLoggedUserId();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <div className="w-full flex flex-col">
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
          userId={userId}
        />
      ))}
    </div>
  );

};

export default MessagesList;
