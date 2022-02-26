import React from 'react'
import Image from 'next/image';
import styles from "../../styles/Footer.module.scss"
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-logo"]}>
          <Image
            src="/images/abhivyakti-logo.png"
            width={"240px"}
            height={"220px"}
            alt="abhiyakti's sponsor Western Coalfields Limited(WCL)"
          ></Image>
        </div>
        <div className={styles["query-contact"]}>
          <div className={styles["query"]}>
            <h2>For Queries Contact</h2>
            <Link href="/about-us#team" passHref>
              <a>
                Event Co-ordinators <span>&#x2197;</span>
              </a>
            </Link>
          </div>
          <div className={styles["contact"]}>
            <h2>Follow us on</h2>
            <div className={styles["social-media"]}>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com/AIiitn"
              >
                <Image
                  src="/logos/twitter.svg"
                  width={"25px"}
                  height={"25px"}
                  alt={"abhiyakti's twitter link"}
                ></Image>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/Abhivyakti.iiitn/"
              >
                <Image
                  src="/logos/facebook.svg"
                  width={"25px"}
                  height={"25px"}
                  alt={"abhiyakti's facebook link"}
                ></Image>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/abhivyakti_iiitn/"
              >
                <Image
                  src="/logos/instagram.svg"
                  width={"25px"}
                  height={"25px"}
                  alt={"abhiyakti's instagram link"}
                ></Image>
              </a>
              {/* <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/abhivyakti_iiitn/"
              >
                <Image
                  src="/logos/linkedin.svg"
                  width={"25px"}
                  height={"25px"}
                  alt={"abhiyakti's linkedin link"}
                ></Image>
              </a> */}
            </div>
            <a>Connect with us here</a>
          </div>
        </div>
        <div className={styles["sponsors"]}>
          <h2>Our Sponsor</h2>
          <div className={styles["sponsor"]}>
            <a rel="noreferrer" target="_blank" href="http://westerncoal.in/">
              <Image
                src="/images/abhivyakti-sponsor-wcl.jpeg"
                width={"175px"}
                height={"175px"}
                alt="abhiyakti's sponsor Western Coalfields Limited(WCL)"
              ></Image>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer