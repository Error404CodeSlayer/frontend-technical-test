import useGetUser from "../../hooks/useGetUser";
import ConversationsList from "./ConversationsList";
import styles from '../../styles/Home.module.css'

interface ConversationComponentProps {
  userId: string | string[];
}

const ConversationComponent: React.FC<ConversationComponentProps> = ({
  userId,
}) => {
  const year = new Date().getFullYear();

  const { user, error, isLoading } = useGetUser(userId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="p-4 flex justify-center bg-orange-400 rounded-b-2xl w-100 min-w-[250px]">
        {user && <h1 className="text-white text-2xl">{user.nickname}</h1>}
      </div>
      <main className={styles.main}>
        {user && <ConversationsList user={user}></ConversationsList>}
      </main>
      <footer className={styles.footer}>&copy; leboncoin - {year}</footer>
    </>
  );
};

export default ConversationComponent;
