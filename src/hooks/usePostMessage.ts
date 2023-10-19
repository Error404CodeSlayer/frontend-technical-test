import axios from "axios";
import { useEffect, useState } from "react";
import { getLoggedUserId } from "../utils/getLoggedUserId";

const usePostMessages = (
  dataMessage: string,
  conversationId: string | string[]
) => {
  const [messageSend, setMessageSend] = useState<string>(null);
  const [error, setError] = useState<string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchConversation = async () => {
      try {
        if (dataMessage) {
          const conversation = await axios.post(
            `http://localhost:3005/messages/${conversationId}`,
            { body: dataMessage, timestamp: Date.now(), conversationId: conversationId, authorId: getLoggedUserId()}
          );

          setMessageSend(conversation.data);
        }
        setIsLoading(false);
      } catch (error) { 
        setError(error);
        setIsLoading(false);
      }
    };

    fetchConversation();
  }, [conversationId, dataMessage]);

  return { messageSend, isLoading, error };
};

export default usePostMessages;
