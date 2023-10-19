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

  if (!isLoading && error) {
    return <p>Nous rencontrons actuellement un problème technique nous serons de retour dans quelques instants.</p>;
  }

  return (
    user && (
      <>
        <Header content={user.nickname} />
        <ConversationsList user={user} />
        <Footer year={year} />
      </>
    )
  );
};

export default ConversationContainer;
