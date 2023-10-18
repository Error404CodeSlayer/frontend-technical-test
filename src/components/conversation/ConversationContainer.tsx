import useGetUser from "../../hooks/useGetUser";
import ConversationsList from "./ConversationsList";
import { getLoggedUserId } from "../../utils/getLoggedUserId";
import Header from "../common/Header";
import Footer from "../common/Footer";

const ConversationContainer = () => {
  const year = new Date().getFullYear();
  const userId: number = getLoggedUserId();
  
  const { user, error, isLoading } = useGetUser(userId.toString());

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Header content={user.nickname} />
      <ConversationsList user={user} />
      <Footer year={year} />
    </>
  );
};

export default ConversationContainer;

