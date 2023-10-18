import { getLoggedUserId } from "../../utils/getLoggedUserId";
import MessageItem from "./MessagesItem";
import useGetMessages from "../../hooks/useGetMessages";
import { useEffect } from "react";

interface MessageListProps {
  conversationId: string | string[];
  message:string;
}

const MessagesList: React.FC<MessageListProps> = ({ conversationId, message }) => {
  
  const { messages, isLoading, error } = useGetMessages(conversationId, message);

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
