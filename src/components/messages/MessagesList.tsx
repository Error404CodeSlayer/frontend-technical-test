import useGetMessages from "../../hooks/useGetMessages";
import useGetUser from "../../hooks/useGetUser";
import { getLoggedUserId } from "../../utils/getLoggedUserId";

interface MessageListProps {
  conversationId: string | string[];
}

const MessagesList: React.FC<MessageListProps> = ({ conversationId }) => {
  const { messages, loading, err } = useGetMessages(conversationId);
  const userId = getLoggedUserId();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (err) {
    return <p>error</p>;
  }

  return (
    <div className="w-full flex flex-col">
      {messages.map((message) => (
        <div
          key={message.id}
          className={
            message.authorId === userId
              ? "w-full flex flex-col items-end"
              : "w-full flex flex-col items-start"
          }
        >
          <div className="max-w-[250px]">
            <div
              className={
                message.authorId === userId
                  ? "bg-orange-400 p-4 my-4 rounded-2xl"
                  : "bg-orange-50 p-4 my-4 rounded-2xl"
              }
            >
              <p
                className={
                  message.authorId === userId ? "text-white" : "text-black"
                }
              >
                {message.body}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessagesList;
