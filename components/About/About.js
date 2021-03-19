import Typewriter from "typewriter-effect";
import { useRef, useEffect } from "react";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="About" className={styles.wrapper}>
      <article>
        <Typewriter
          options={{
            pauseFor: 2000,
            strings: ["Mam na imię Michał.", "My name is Michał."],
            autoStart: true,
            loop: true,
          }}
        />
        <p>
          Założyłem Rocket Jump, aby pod tą firmą tworzyć najlepsze{" "}
          <span>aplikacje</span> i <span>strony</span> na świecie.
        </p>
        <p>
          {" "}
          Zajmuję się wszystkim od <span>projektów graficznych</span> przez{" "}
          <span>programowanie</span> aż po
          <span> konfigurację hostingu</span>.
        </p>
      </article>
    </section>
  );
}
