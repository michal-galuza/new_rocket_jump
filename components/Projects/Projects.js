import styles from "./Projects.module.scss";

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Projects() {
  const { locale } = useRouter();
  const texts = {
    mazak: {
      pl:
        "Strona wizytówka, pełna animacji i pastelowych kolorów. Stworzona dla agencji marketingowej mazak.studio, z którą współpracuję.",
      en:
        "Business card page, full of animation and pastel colors. Created for the mazak.studio marketing agency with which I cooperate.",
    },
    slusarstwo: {
      pl:
        "Strona wykonana dla firmy ślusarskiej. Przyjemna wizytówka z dużymi  zdjęciami realizacji w tle.",
      en:
        "Website made for a locksmith company. Nice business card with large photos of the implementation in the background.",
    },
    perfumeria: {
      pl:
        "Prototyp internetowej perfumerii. Nie jest to prawdziwy sklep, a jedynie koncept.",
      en:
        "A prototype of an online perfumery. This is not a real shop, just a concept.",
    },
  };
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title} id="Projects">
        {locale === "pl" ? "Projekty" : "Projects"}
      </h1>
      <Carousel
        showArrows={true}
        emulateTouch={true}
        infiniteLoop={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        centerMode={false}
      >
        <article className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/slusarstwo.png"
                layout="fill"
                objectFit="cover"
                objectPosition="top center"
              />
            </div>
            <h1>Ślusarstwo Siarkiewicz</h1>
            <p>{texts.slusarstwo[locale]}</p>
            <a
              href="https://www.slusarstwo-siarkiewicz.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {locale === "pl" ? "Odwiedź" : "Visit"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
                width="32"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
              </svg>
            </a>
          </div>
        </article>
        <article className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/mazak.png"
                layout="fill"
                objectFit="cover"
                objectPosition="top center"
              />
            </div>
            <h1>mazak.studio</h1>
            <p>{texts.mazak[locale]}</p>
            <a
              href="https://mazak.studio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {locale === "pl" ? "Odwiedź" : "Visit"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
                width="32"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
              </svg>
            </a>
          </div>
        </article>
        <article className={styles.itemWrapper}>
          <div className={styles.item}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/perfumeria.png"
                layout="fill"
                objectFit="cover"
                objectPosition="top center"
              />
            </div>
            <h1>moja-perfumeria</h1>
            <p>{texts.perfumeria[locale]}</p>
            <a
              href="https://moja-perfumeria.pl/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {locale === "pl" ? "Odwiedź" : "Visit"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
                width="32"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
              </svg>
            </a>
          </div>
        </article>
      </Carousel>
    </section>
  );
}
