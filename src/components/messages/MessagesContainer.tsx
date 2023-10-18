import { useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import MessageInput from "./MessageInput";
import MessagesList from "./MessagesList";

interface MessagesContainerProps {
  conversationId: string | string[];
}

const MessagesContainer: React.FC<MessagesContainerProps> = ({
  conversationId,
}) => {

  const year = new Date().getFullYear();
  const [message, setMessage] = useState<string | null>(null);
  
  return (
    <>
      <Header content="Conversation" />
      <main className="flex flex-1 flex-col items-start w-full p-4">
        <MessagesList conversationId={conversationId} message={message}/>
      </main>
      <MessageInput conversationId={conversationId} onMessageChange={setMessage}/>
      <Footer year={year} />
    </>
  );
};

export default MessagesContainer;

