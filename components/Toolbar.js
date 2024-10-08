import { useRouter } from "next/router";
import styles from "../src/styles/Toolbar.module.css";

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div
        onClick={() => {
          router.push("/");
        }}
      >
        Home
      </div>
      <div
        onClick={() => {
          router.push("/feed/1");
        }}
      >
        Feed
      </div>
      <div
        onClick={() => {
          router.push("/eom");
        }}
      >
        Dev
      </div>
      <div
        onClick={() => {
          router.push("/contact");
        }}
      >
        Contact
      </div>
    </div>
  );
};
