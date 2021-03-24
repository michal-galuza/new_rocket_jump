import Typewriter from "typewriter-effect";

import styles from "./About.module.scss";
import { useRouter } from "next/router";

export default function About() {
  const { locale } = useRouter();
  const texts = {
    pl: (
      <>
        <p>
          Założyłem Rocket Jump, aby pod tą firmą tworzyć najlepsze
          <span> aplikacje </span> i <span> strony </span> na świecie.
        </p>
        <p>
          Zajmuję się wszystkim od <span> projektów graficznych </span> przez
          <Typewriter
            options={{
              pauseFor: 2000,
              strings: ["programowanie"],
              autoStart: true,
              loop: true,
            }}
          />
          aż po
          <span> konfigurację hostingu</span>.
        </p>
      </>
    ),
    en: (
      <>
        <p>
          I founded Rocket Jump to create the best under this company
          <span> applications </span> and <span> sites </span> in the world.
        </p>
        <p>
          I take care of everything from <span> graphic design </span> to
          <Typewriter
            options={{
              pauseFor: 3000,
              strings: ["programming"],
              autoStart: true,
              loop: true,
            }}
          />
          up to
          <span> hosting configuration </span>.
        </p>
      </>
    ),
  };
  return (
    <section id="About" className={styles.wrapper}>
      <article>
        <Typewriter
          options={{
            pauseFor: 3000,
            strings: ["Mam na imię Michał.", "My name is Michał."],
            autoStart: true,
            loop: true,
          }}
        />
        {texts[locale]}
      </article>
    </section>
  );
}
