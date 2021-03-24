import { useRouter } from "next/router";
import styles from "./Offer.module.scss";
import Typewriter from "typewriter-effect";

export default function Offer() {
  const { locale } = useRouter();
  const texts = {
    pl: [
      "Projekty graficzne",
      "Programowanie stron/aplikacji",
      "Konfiguracja serwera(hostingu)",
      "Aministracja stron",
      "Konsultacje techniczne",
      "Projektowanie aplikacji",
    ],
    en: [
      "Graphic project",
      "Website/application programming",
      "Server (hosting) configuration",
      "Administration of websites",
      "Technical consultations",
      "Application development",
    ],
  };
  return (
    <section className={styles.wrapper}>
      <article>
        <h1 className={styles.title} id="Offer">
          <Typewriter
            options={{
              pauseFor: 2000,
              strings: [`${locale === "pl" ? "Oferta" : "Offer"}`],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div>
          {texts[locale].map((item, index) => (
            <p
              data-aos-delay={`${100 + 20 * (index + 1)}`}
              data-aos-once="false"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="500"
              key={index + "paragraf"}
              className={styles.item}
            >
              {item}
            </p>
          ))}
        </div>
      </article>
    </section>
  );
}
