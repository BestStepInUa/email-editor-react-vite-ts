import { EmailEditor } from './components/EmailEditor/EmailEditor';
import { EmailList } from './components/EmailList/EmailList';

export function Home() {
  return (
    <div>
      <EmailEditor />
      <EmailList />
    </div>
  );
}
