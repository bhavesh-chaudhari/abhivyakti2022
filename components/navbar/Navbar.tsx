import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Navbar.module.scss";

const Navbar = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const navbarEl = useRef(null);

  const router = useRouter();

  useEffect(() => {
    const handleNavbar = () => {
      if (window.scrollY > window.innerHeight) {
        console.log("woo")
        navbarEl.current.classList.add("isFixed");
      } else {
        navbarEl.current.classList.remove("isFixed");
      }
    };

    if(router.pathname != "/"){
      navbarEl.current.style.position = "fixed"
      navbarEl.current.style.background = "#1f1f1f";
    }

    if (router.pathname === "/") {
      navbarEl.current.style.position = "absolute"
      navbarEl.current.style.background = "transparent";
      window.addEventListener("scroll", handleNavbar);
      return () => {
        window.removeEventListener("scroll", handleNavbar);
      };
    }
  }, [router.pathname]);

  return (
    <div ref={navbarEl} className={styles["navbar-container"]}>
      <nav className={styles["navbar"]}>
        <div className={styles["nav-logo"]}>
          <Image
            src="/svgs-to-convert/abhivyakti-logo.svg"
            width={200}
            height={78}
            alt="logo"
          ></Image>
        </div>
        <div
          onClick={() => setShow((prevState) => !prevState)}
          className={
            show
              ? `${styles["hamburger-btn"]} ${styles["open"]}`
              : styles["hamburger-btn"]
          }
        >
          <div className={styles["hamburger"]}></div>
        </div>
        <div
          className={
            show
              ? styles["nav-links"]
              : `${styles["nav-links"]} ${styles["hide"]}`
          }
        >
          <ul>
            <li className={styles["menu-title"]}>Menu</li>
            <li
              onClick={() => {
                setShow((prevState) => !prevState);
              }}
              className={router.pathname == "/" ? styles["active"] : ""}
            >
              <Link scroll={true} href="/">
                Home
              </Link>
            </li>
            <li
              onClick={() => {
                setShow((prevState) => !prevState);
              }}
              className={router.pathname == "/events" ? styles["active"] : ""}
            >
              <Link scroll={true} href="/events">
                Events
              </Link>
            </li>
            <li
              onClick={() => {
                setShow((prevState) => !prevState);
              }}
              className={router.pathname == "/about-us" ? styles["active"] : ""}
            >
              <Link scroll={true} href="/about-us">
                About Us
              </Link>
            </li>
          </ul>
          <div className={styles["mobile-menu-logo"]}>
            <div className={styles["mobile-menu-logo-content"]}>
              <Image
                src="/svgs-to-convert/abhivyakti-logo.svg"
                height={130}
                width={130}
                alt="logo"
              ></Image>
              <hr />
              <p>Proudly Presented by IIITN</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
