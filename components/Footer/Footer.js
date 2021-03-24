import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Footer.module.scss";
export default function Footer() {
  const { locale } = useRouter();
  return (
    <footer className={styles.wrapper}>
      <h1 id="Solar">
        {locale === "pl"
          ? "Model układu słonecznego"
          : "Model of the solar system"}
      </h1>
      <div className={styles.info}>
        {locale === "pl" ? "1 rok = 10sekund" : "1 year = 10seconds"}
      </div>
      <div className={styles.solarSystem}>
        <div className={styles.sun}>Sun</div>
        <div className={styles.mercury}>
          <span>
            <div className={styles.planetInfo}>
              <Image
                src="/icons/planet.svg"
                layout="fill"
                objectFit="scale-down"
              />
              <p>Mercury</p>
            </div>
          </span>
        </div>
        <div className={styles.venus}>
          <span>
            <div className={styles.planetInfo}>
              <Image
                src="/icons/planet.svg"
                layout="fill"
                objectFit="scale-down"
              />
              <p>Venus</p>
            </div>
          </span>
        </div>
        <div className={styles.earth}>
          <span>
            <div className={styles.planetInfo}>
              <Image
                src="/icons/planet.svg"
                layout="fill"
                objectFit="scale-down"
              />
              <p>Earth</p>
            </div>
          </span>
        </div>
        <div className={styles.mars}>
          <span>
            <div className={styles.planetInfo}>
              <Image
                src="/icons/planet.svg"
                layout="fill"
                objectFit="scale-down"
              />
              <p>Mars</p>
            </div>
          </span>
        </div>

        <div className={styles.jupiter}>
          <span>
            <div className={styles.planetInfo}>
              <Image
                src="/icons/planet.svg"
                layout="fill"
                objectFit="scale-down"
              />
              <p>Jupiter</p>
            </div>
          </span>
        </div>
        <div className={styles.saturn}>
          <span>
            <div className={styles.planetInfo}>
              <Image
                src="/icons/planet.svg"
                layout="fill"
                objectFit="scale-down"
              />
              <p>Saturn</p>
            </div>
          </span>
        </div>
        <div className={styles.uranus}>
          <span>
            <div className={styles.planetInfo}>
              <Image
                src="/icons/planet.svg"
                layout="fill"
                objectFit="scale-down"
              />
              <p>Uranus</p>
            </div>
          </span>
        </div>
        <div className={styles.neptune}>
          <span>
            <div className={styles.planetInfo}>
              <Image
                src="/icons/planet.svg"
                layout="fill"
                objectFit="scale-down"
              />
              <p>Neptune</p>
            </div>
          </span>
        </div>
      </div>
    </footer>
  );
}
