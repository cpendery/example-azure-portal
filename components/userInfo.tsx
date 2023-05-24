import useGraphUser from "@/hooks/useGraphUser";
import styles from "@/styles/userInfo.module.css";
import { useRecoilValue } from "recoil";
import GraphUserFieldState, {
  GraphUserFieldEnum,
} from "@/state/GraphUserFieldAtom";
import GraphUserFieldToggle from "@/components/graphUserFieldToggle";

export default function UserInfo() {
  const graphUser = useGraphUser();
  const graphUserField = useRecoilValue(GraphUserFieldState);

  let content = null;
  switch (graphUserField) {
    case GraphUserFieldEnum.DISPLAY_NAME:
      content = `Display Name: ${graphUser?.displayName}`;
      break;
    case GraphUserFieldEnum.EMAIL:
      content = `Email: ${graphUser?.userPrincipalName}`;
      break;
  }

  return (
    <div className={styles.container}>
      <GraphUserFieldToggle />
      <p>{content}</p>
    </div>
  );
}
