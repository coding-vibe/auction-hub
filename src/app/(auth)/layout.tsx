import styles from "./layout.module.scss";

export const metadata = {
  title: "Authentication",
  description: "Login or register to access the application",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Auth Section</h1>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
