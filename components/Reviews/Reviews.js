import { useRouter } from "next/router";
import styles from "./Reviews.module.scss";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";

export default function Reviews() {
  const { locale } = useRouter();
  const texts = {
    pl: [
      {
        name: "Katarzyna Pruszyńska (mazak.studio)",
        text:
          "Współpraca układała się bardzo płynnie, świetny kontakt od pierwszej rozmowy. Doradził co powinno znaleźć się na mojej stronie oraz wyjaśnił dlaczego. Strona ładuje się szybko i wygląda świetnie.",
      },
      {
        name: "Mateusz Siarkiewicz (Ślusarstwo Siarkiewicz)",
        text:
          "Współpraca przebiegła bez problemu, strona świetnie działa. Michał administruje ją cały czas, wszystko działa bez problemów. ",
      },
      {
        name: "Piotr Redek (PM erpbox)",
        text:
          "Kolega Michał to pasjonat programowania, bardzo angażuje się w projekty i nieustanne się rozwija. Jego projekty są dopracowane oraz estetyczne. Polecam!",
      },
    ],
    en: [
      {
        name: "Katarzyna Pruszyńska (mazak.studio)",
        text:
          "The collaboration was very smooth, great contact from the first conversation. He advised what should be on my site and explained why. The site loads quickly and looks great.",
      },
      {
        name: "Mateusz Siarkiewicz (Ślusarstwo Siarkiewicz)",
        text:
          "The cooperation went without a problem, the website works great. Michael administers it all the time, everything works without problems. ",
      },
      {
        name: "Piotr Redek (PM erpbox)",
        text:
          "Colleague Michael is passionate about programming, he is very involved in projects and is constantly developing himself. His projects are polished and aesthetically pleasing. I highly recommend!",
      },
    ],
  };

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title} id="Feedback">
        <Typewriter
          options={{
            pauseFor: 2000,
            strings: [`${locale === "pl" ? "Opinie" : "Feedback"}`],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <article>
        {texts[locale].map(({ name, text }, index) => (
          <div
            key={"feedbackNr" + index}
            data-aos-delay={`${100 + 20 * (index + 1)}`}
            data-aos-once="false"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <h2>{name}</h2>
            <p>{text}</p>
          </div>
        ))}
      </article>
    </section>
  );
}
