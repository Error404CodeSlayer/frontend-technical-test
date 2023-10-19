import MessageItem from "./MessagesItem";
import useGetMessages from "../../hooks/useGetMessages";

interface MessageListProps {
  conversationId: string | string[];
  message: string;
}

const MessagesList: React.FC<MessageListProps> = ({
  conversationId,
  message,
}) => {
  const { messages, isLoading, error } = useGetMessages(
    conversationId,
    message
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isLoading && error) {
    return <p>Nous rencontrons actuellement un problème technique nous serons de retour dans quelques instants.</p>;
  }

  return (
    messages && (
      <div className="w-full flex flex-col">
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
      </div>
    )
  );
};

export default MessagesList;
