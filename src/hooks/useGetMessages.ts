import axios from "axios";
import { Message } from "../types/message";
import { useEffect, useState } from "react";

const useGetMessages = (conversationId: string | string[]) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [err, setError] = useState<string>(null);
    const [loading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchConversation = async () => {
            try {
                const conversation = await axios.get(`http://localhost:3005/messages/${conversationId}`);
                setMessages(conversation.data);
                setIsLoading(false);
            } catch(error) {
                setError(error);
                setIsLoading(false);
            }
        }

        fetchConversation();
    }, [])

    return {messages, loading, err};
}

export default useGetMessages;