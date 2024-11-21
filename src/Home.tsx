import { EmailEditor } from './components/EmailEditor/EmailEditor';
import { EmailList } from './components/EmailList/EmailList';
import styles from './Home.module.css';

export function Home() {
  return (
    <div className={styles.home_wrapper}>
      <EmailEditor />
      <EmailList />
    </div>
  );
}
