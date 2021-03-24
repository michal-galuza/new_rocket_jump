import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import Nav from "../components/Nav/Nav";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";

const Offer = dynamic(() => import("../components/Offer/Offer"));
const Reviews = dynamic(() => import("../components/Reviews/Reviews"));
const Contact = dynamic(() => import("../components/Contact/Contact"));
export default function Home() {
  const canvasRef = useRef();

  useEffect(() => {
    let canvas = canvasRef.current;

    const context = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const stars = [];
    for (let i = 0; i < 100; i++) {
      stars[i] = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: canvas.width,
        size: 0.6,
        radius: Math.random() * 999,
        speed: 0.2,
      };
    }

    function animateStars() {
      for (let i = 0; i < stars.length; i++) {
        stars[i].z = stars[i].z - stars[i].speed;
        if (stars[i].z <= 0) {
          stars[i].z = canvas.width;
        }
        stars[i].x = (stars[i].x - centerX) * (canvas.width / stars[i].z);
        stars[i].x = stars[i].x + centerX;
        stars[i].y = (stars[i].y - centerY) * (canvas.width / stars[i].z);
        stars[i].y = stars[i].y + centerY;
        stars[i].size =
          stars[i].size * (canvas.width / stars[i].z) > 2.5
            ? 2.5
            : stars[i].size * (canvas.width / stars[i].z);
        if (
          stars[i].x <= 0 ||
          stars[i].x > canvas.width ||
          stars[i].y <= 0 ||
          stars[i].y > canvas.height
        ) {
          stars[i] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: canvas.width,
            size: 0.6,
            radius: Math.random() * 999,
            speed: 0.5,
          };
        }
        context.beginPath();
        context.arc(stars[i].x, stars[i].y, stars[i].size, 0, 360);
        context.fillStyle = "white";
        context.fill();
      }
    }

    function update() {
      context.fillStyle = "#111112";
      context.fillRect(0, 0, canvas.width, canvas.height);
      animateStars();
      window.requestAnimationFrame(update);
    }

    update();
    return window.removeEventListener("scroll", () => {});
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rocket Jump</title>
      </Head>
      <Nav />
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        width="1280"
        height="720"
      />
      <header id="Start" className={styles.logoWrapper}>
        <div className={styles.logo}>
          <Image
            src="/images/logo.png"
            layout="fill"
            objectFit="scale-down"
            alt="Rocket Jump logo"
            objectPosition="center"
            loading="eager"
          />
        </div>
      </header>
      <div className={styles.main}>
        <main>
          <About />
          <Projects />

          <Offer />
          <Reviews />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
