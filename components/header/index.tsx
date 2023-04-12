import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Icon from "../icon";
import { useRouter } from "next/router";

import styles from "./header.module.scss";

const navLists = [
  { name: "HOME", href: "/home" },
  { name: "TEK ALIGN", href: "/tekAlign" },
  { name: "TEK DESIGN", href: "/" },
  { name: "TEK EDU", href: "/" },
  { name: "TEK STORE", href: "/" }
];


export default function Header(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const location = useRouter();


  return (
    <header className={styles.headerContainer} ref={ref}>
      <div className={styles.inner}>
        <nav className={styles.navbar}>
          <ul className={styles.navigationBox}>
            {navLists.map((list) => (
              <li key={list.name}>
                <Link scroll={!(list.name === 'Services')} href={list.href} passHref>
                  <span
                    className={`${location.asPath === list.href && styles.active}`}
                  >
                   { list.name }
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header >
  );
}
