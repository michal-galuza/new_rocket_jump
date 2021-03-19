import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import styles from "./Nav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Nav() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const modaleRef = useRef(null);
  const handleClickOutside = (e) => {
    if (!modaleRef.current.contains(e.target)) {
      setOpen(false);
    }
  };
  /* ZAMYAKNIE MENU PO KLINIĘCIU OBOK */
  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  return (
    <nav className={styles.nav}>
      <button className={styles.menu} onClick={() => setOpen(true)}>
        <img src="/icons/menu.svg" alt="menu" />
      </button>
      <div className={styles.socialWrapper}>
        <Link href="/" locale="pl" passHref>
          <a
            className={styles.langBtn}
            style={{ color: router.locale === "en" ? "#a8a8a8" : "white" }}
          >
            {" "}
            PL
          </a>
        </Link>{" "}
        <Link href="/" locale="en" passHref>
          <a
            className={styles.langBtn}
            style={{ color: router.locale === "pl" ? "#a8a8a8" : "white" }}
          >
            {" "}
            EN
          </a>
        </Link>
        <a
          className={styles.icon}
          href="https://www.facebook.com/RokcetJump/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/fb.svg"
            layout="fill"
            quality="99"
            alt="Facebook icon"
          />
        </a>
        <a className={styles.icon} href="tel:+48797893423">
          <Image
            src="/icons/phone.svg"
            layout="fill"
            quality="99"
            alt="Phone icon"
          />
        </a>
        <a
          className={styles.insta}
          href="https://www.instagram.com/Rocket_Jump_Official/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/insta.svg"
            layout="fill"
            quality="99"
            alt="Instagram icon"
          />
        </a>
      </div>
      <div
        ref={modaleRef}
        className={styles.modal}
        style={{ transform: `translateX(${open ? "0%" : "-100%"})` }}
      >
        <button onClick={() => setOpen(false)}>X</button>
        <Link href="/" passHref>
          <a onClick={() => setOpen(false)} className={styles.navItem}>
            Start
          </a>
        </Link>
        <Link href="/" passHref>
          <a onClick={() => setOpen(false)} className={styles.navItem}>
            Rocket Jump
          </a>
        </Link>
        <Link href="/" passHref>
          <a onClick={() => setOpen(false)} className={styles.navItem}>
            {router.locale === "pl" ? "Projekty" : "Projects"}
          </a>
        </Link>
        <Link href="/" passHref>
          <a onClick={() => setOpen(false)} className={styles.navItem}>
            {router.locale === "pl" ? "Oferta" : "Offer"}
          </a>
        </Link>
        <Link href="/" passHref>
          <a onClick={() => setOpen(false)} className={styles.navItem}>
            {router.locale === "pl" ? "Opinie" : "Feedback"}
          </a>
        </Link>
        <Link href="/" passHref>
          <a onClick={() => setOpen(false)} className={styles.navItem}>
            {router.locale === "pl" ? "Kontakt" : "Contact"}
          </a>
        </Link>
      </div>
    </nav>
  );
}
