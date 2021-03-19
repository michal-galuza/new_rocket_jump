import Image from "next/image";
import { useState } from "react";
import styles from "./Nav.module.scss";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <button className={styles.menu} onClick={() => setOpen(true)}>
        <img src="/icons/menu.svg" />
      </button>
      <div className={styles.socialWrapper}>
        <a className={styles.icon}>
          <Image src="/icons/fb.svg" layout="fill" quality="99" />
        </a>
        <a className={styles.icon}>
          <Image src="/icons/phone.svg" layout="fill" quality="99" />
        </a>
        <a className={styles.insta}>
          <Image src="/icons/insta.svg" layout="fill" quality="99" />
        </a>
      </div>
      <div
        className={styles.modal}
        style={{ transform: `translateX(${open ? "0%" : "-100%"})` }}
      >
        <button onClick={() => setOpen(false)}>X</button>
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
      </div>
    </nav>
  );
}
