import useGetFormattedDate from "../../hooks/useGetFromattedDate";
import { Message } from "../../types/message";
import { getLoggedUserId } from "../../utils/getLoggedUserId";

interface MessageItemProps {
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message}) => {
  const userId = getLoggedUserId();
  const isUserAuthor = message.authorId === userId;
  const formattedDate = useGetFormattedDate(message.timestamp);
  
  return (
    <div className={isUserAuthor ? "w-full flex flex-col items-end" : "w-full flex flex-col items-start"}>
      <div className="max-w-[250px]">
        <div className={isUserAuthor ? "p-4 my-4 rounded-2xl bg-orange-400" : "p-4 my-4 rounded-2xl bg-orange-50"}>
          <p className={isUserAuthor ? "text-white break-words" : "text-gray-400 break-words"}>{message.body}</p>
        </div>
        <p className={isUserAuthor ? "text-right mr-4" : "text-left ml-4"}>{formattedDate}</p>
      </div>
    </div>
  );
};

export default MessageItem;
