import { IconSend } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import usePostMessages from "../../hooks/usePostMessage";

interface MessageInputProps {
  conversationId: string | string[];
  onMessageChange: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ conversationId, onMessageChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string>(null);
  const {messageSend, isLoading, error} = usePostMessages(message, conversationId);

  const sendMessage = () => {
    const newMessage = inputRef.current.value;
    setMessage(newMessage);
    onMessageChange(newMessage)
    inputRef.current.value = "";
  }

  if (isLoading) {
    return (
      <p>Loading...</p>
    );
  }

  if (!isLoading && error) {
    <p className="m-4">Nous rencontrons actuellement un problème technique nous serons de retour dans quelques instants.</p>
  }

  return (
    <div className="w-full flex flex-row relative">
      <input
        ref={inputRef}
        type="text"
        placeholder="Saisissez votre message..."
        className="w-full bg-orange-50 p-4 pr-12 border-t-2 border-orange-400 text-gray-400"
      />
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2" onClick={sendMessage}>
        <IconSend width={32} height={32} color="orange" className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default MessageInput;
