import styles from "./Contact.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
export default function Contact() {
  const domain =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://rocket-jump.com/";
  const { locale } = useRouter();
  const [state, setState] = useState("none");
  const [msg, setMsg] = useState("none");
  const status = {
    pl: {
      none: "Napisz do nas",
    },
    en: {
      none: "Write to us",
    },
  };
  const [copy, setCopy] = useState(false);
  const [mail, setMail] = useState(false);
  const infoFn = (msg, wait) => {
    setMsg(locale === "pl" ? msg[0] : msg[1]);
    setCopy(true);
    if (wait !== true) {
      setTimeout(() => setCopy(false), 3000);
    }
  };

  const submitFn = (e) => {
    e.preventDefault();
    if (Cookies.get("count") === undefined) {
      Cookies.set("count", 0, { expires: 0.5 });
    }
    if (
      e.target[0].value.length === 0 ||
      e.target[1].value.length === 0 ||
      e.target[3].value.length === 0
    ) {
      infoFn(["Wypełnij wymagane pola", "Fill in the required fields"]);
    } else if (parseInt(Cookies.get("count"), 10) >= 3) {
      infoFn([
        "Możesz wybrać kolejną wiadomośc za 24 godziny",
        "You can select another message in 24 hours.",
      ]);
    } else {
      setMail(true);
      infoFn(["Czekam na odpowiedź", "I am waiting for a response"], true);
      fetch(domain + "api/mail", {
        method: "post",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: e.target[0].value,
          mail: e.target[1].value,
          phone: e.target[2].value,
          text: e.target[3].value,
          locale: locale,
        }),
      })
        .then((item) => item.json())
        .then((res) => {
          if (res.status === "ok" && res.info === "succes") {
            setMail(false);
            infoFn(["Wysłano", "Sent"]);
            Cookies.set("count", parseInt(Cookies.get("count"), 10) + 1, {
              expires: 1,
            });
            e.target.reset();
          } else if (res.status === "err" && res.info === "emptyFields") {
            setMail(false);
            infoFn(["Wypełnij wymagane pola", "Fill in the required fields"]);
          } else {
            setMail(false);
            infoFn([
              "Problem z wysyłaniem spróbuj ponownie",
              "Sending problem, please try again",
            ]);
          }
        })
        .catch((err) => {
          setMail(false);
          infoFn(["Coś poszło nie tak", "Something went wrong"]);
        });
    }
  };
  return (
    <section className={styles.wrapper}>
      {copy ? <div className={styles.modal}>{msg}</div> : ""}

      <form onSubmit={(e) => submitFn(e)} method="POST" id="Contact">
        <h3>{status[locale][state]}</h3>
        <input
          placeholder={locale === "pl" ? "Imię" : "Name"}
          name="name"
          required
        />
        <input placeholder="E-mail" name="mail" type="email" required />
        <input
          placeholder={
            locale === "pl" ? "Telefon (opcjonalne)" : "Phone (optional)"
          }
          name="phone"
          type="tel"
          min="111111111"
          max="999999999"
        />
        <textarea
          required
          placeholder={locale === "pl" ? "Wiadomość" : "Message"}
          name="text"
        ></textarea>
        <button disabled={mail} type="submit">
          {locale === "pl" ? "Wyślij" : "Send"}
        </button>
      </form>
      <div className={styles.socialWrapper}>
        <p>{locale === "pl" ? "Linki" : "Links"}</p>
        <a
          href="https://www.facebook.com/rocket-jump-106923601238574"
          target="_blank"
          rel="noopener nofollow"
        >
          Rocket facebook
        </a>
        <a
          href="https://www.instagram.com/Rocket_Jump_Official/"
          target="_blank"
          rel="noopener nofollow"
        >
          Rocket instagram
        </a>
        <a href="tel:+48797893423">+48 797 893 423</a>
        <a
          as="span"
          onClick={(e) => {
            let tempInput = document.createElement("input");
            tempInput.value = "rocket.contact@gmail.com";
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);

            setCopy(true);
            infoFn(["Skopiowano do schowka", "Copied to clipboard"]);
          }}
        >
          {locale === "pl" ? "Rocket mail (kopiuj)" : "Rocket mail (copy)"}
        </a>
      </div>
    </section>
  );
}
