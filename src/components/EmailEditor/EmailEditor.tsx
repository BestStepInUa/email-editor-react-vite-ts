import { Bold, Eraser, Italic, Underline } from 'lucide-react';
import styles from './EmailEditor.module.scss';

export function EmailEditor() {
  return (
    <div>
      <h1>Email editor</h1>
      <div className={styles.card}>
        <div className={styles.editor}>
          Hey!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit doloribus excepturi dolorum dolore
          nesciunt quae nihil adipisci sapiente tempora ad, repudiandae dignissimos quod architecto, quasi cumque
          blanditiis suscipit laborum fuga?
        </div>
        <div className={styles.actons}>
          <div className={styles.tools}>
            <button type="button" aria-label="Eraser">
              <Eraser size={17} color="#fff" />
            </button>
            <button type="button" aria-label="Bold">
              <Bold size={17} color="#fff" />
            </button>
            <button type="button" aria-label="Italic">
              <Italic size={17} color="#fff" />
            </button>
            <button type="button" aria-label="Underline">
              <Underline size={17} color="#fff" />
            </button>
          </div>
          <button type="button">Send now</button>
        </div>
      </div>
    </div>
  );
}
