import styles from "./Projects.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
export default function Projects() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Realizacje</h1>
      <Carousel>
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
          <p>Jakiś długi interesujący opis</p>
          <button>Odwiedź</button>
        </div>
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
          <p>Jakiś długi interesujący opis</p>
          <button>Odwiedź</button>
        </div>
      </Carousel>
    </div>
  );
}
