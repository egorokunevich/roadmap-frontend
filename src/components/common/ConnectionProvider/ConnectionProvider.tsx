import { type PropsWithChildren } from 'react';
import { useConnectionService } from '../../../services/useConnectionService';
import styles from './ConnectionProvider.module.scss';
import Loader from '../Loader/Loader';

// As server is deployed at free hosting, it falls asleep if there are no frequent requests.
// This component checks if the server is awake
const ConnectionProvider = ({ children }: PropsWithChildren) => {
  const { isServerAwake, isError } = useConnectionService();

  const handleConnection = () => {
    if (isError) {
      return (
        <div className={styles.connectionWaitingScreen}>Возникла ошибка!</div>
      );
    }

    if (!isError && !isServerAwake) {
      return (
        <div className={styles.connectionWaitingScreen}>
          <div className={styles.loaderWrapper}>
            <Loader />
          </div>
          <div>Пробуждение сервера...</div>
        </div>
      );
    }
  };

  return <>{isServerAwake ? children : <>{handleConnection()}</>}</>;
};

export default ConnectionProvider;
