import { Message } from "../../types/message";

interface MessageItemProps {
  message: Message;
  userId: number;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, userId }) => {
  const isUserAuthor = message.authorId === userId;

  return (
    <div className={isUserAuthor ? "w-full flex flex-col items-end" : "w-full flex flex-col items-start"}>
      <div className="max-w-[250px]">
        <div className={isUserAuthor ? "p-4 my-4 rounded-2xl bg-orange-400" : "p-4 my-4 rounded-2xl bg-orange-50"}>
          <p className={isUserAuthor ? "text-white" : "text-gray-400"}>{message.body}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
