import axios from "axios";
import { useEffect, useState } from "react";
import { getLoggedUserId } from "../utils/getLoggedUserId";

const usePostMessages = (
  dataMessage: string,
  conversationId: string | string[]
) => {
  const [value, setValue] = useState<string>(null);
  const [err, setError] = useState<string>(null);
  const [loading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchConversation = async () => {
      try {
        if (dataMessage) {
          const conversation = await axios.post(
            `http://localhost:3005/messages/${conversationId}`,
            { body: dataMessage, timestamp: Date.now(), conversationId: conversationId, authorId: getLoggedUserId()}
          );

          setValue(conversation.data);
        }
        setIsLoading(false);
      } catch (error) { 
        setError(error);
        setIsLoading(false);
      }
    };

    fetchConversation();
  }, [conversationId, dataMessage]);

  return { value, loading, err };
};

export default usePostMessages;
