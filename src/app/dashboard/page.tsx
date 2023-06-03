import { Comments } from "@/ui/Comments";
import { Todos } from "@/ui/Todos";
import { Suspense } from "react";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Todos />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Comments />
      </Suspense>
    </div>
  );
}
