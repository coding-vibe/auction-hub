import Header from "./_components/Header";
import styles from "./layout.module.scss";

export const metadata = {
  title: "Auction List",
  description: "Available auction list",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <Header />
      <div>{children}</div>
    </div>
  );
}
