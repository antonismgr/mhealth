import { Button } from "@mui/material";
import styles from "../Pages/Account.module.css";

const Account = ({ logout, username }) => {
  return (
    <div className={styles.account}>
      <h3>Welcome, {username}</h3>
      <Button size="small" variant="text" onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default Account;
