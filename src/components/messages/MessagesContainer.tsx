import Footer from "../common/Footer";
import Header from "../common/Header";
import MessagesList from "./MessagesList";

interface MessagesContainerProps {
  conversationId: string | string[];
}

const MessagesContainer: React.FC<MessagesContainerProps> = ({
  conversationId,
}) => {

  const year = new Date().getFullYear();
  
  return (
    <>
      <Header content="Conversation" />
      <main className="flex flex-1 justify-center items-start w-full p-4">
        <MessagesList conversationId={conversationId} />
      </main>
      <Footer year={year} />
    </>
  );
};

export default MessagesContainer;
