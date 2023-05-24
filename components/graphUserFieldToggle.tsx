import styles from "@/styles/graphUserFieldToggle.module.css";
import { useRecoilState } from "recoil";
import GraphUserFieldAtom, {
  GraphUserFieldEnum,
} from "@/state/GraphUserFieldAtom";

export default function GraphUserFieldToggle() {
  const [graphUserField, setGraphUserField] =
    useRecoilState(GraphUserFieldAtom);

  return (
    <div className={styles.container}>
      <div>Pick Your Data from Microsoft Graph API</div>
      <div className={styles.optionsListContainer}>
        <ul className={styles.options}>
          <li className={styles.option}>
            <button
              type="button"
              className={
                graphUserField === GraphUserFieldEnum.DISPLAY_NAME
                  ? `${styles.styleDisplayNameActive} ${styles.button}`
                  : `${styles.styleInactiveButton} ${styles.button}`
              }
              aria-pressed={graphUserField === GraphUserFieldEnum.DISPLAY_NAME}
              onClick={() => {
                setGraphUserField(GraphUserFieldEnum.DISPLAY_NAME);
              }}
            >
              <span className="label">Display Name</span>
            </button>
          </li>

          <li className={styles.option}>
            <button
              type="button"
              className={
                graphUserField === GraphUserFieldEnum.EMAIL
                  ? `${styles.styleEmailActive} ${styles.button}`
                  : `${styles.styleInactiveButton} ${styles.button}`
              }
              aria-pressed={graphUserField === GraphUserFieldEnum.EMAIL}
              onClick={() => {
                setGraphUserField(GraphUserFieldEnum.EMAIL);
              }}
            >
              <span className="label">Email</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
