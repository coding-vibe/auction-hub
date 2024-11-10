import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.scss";

interface Props {
  className?: string;
}

export default function Header({ className }: Props) {
  return (
    <header className={[className, styles.container].join(" ")}>
      <Link href="/">
        <Image alt="logo" src="/logo.png" height={100} width={100} />
      </Link>
      <nav>
        <p>There will be navigation</p>
      </nav>
    </header>
  );
}
