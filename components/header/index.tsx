import { useState, useRef } from "react";
import Link from "next/link";

import styles from "./header.module.scss";
import AuthButton from "components/Buttons/AuthButton";
import Image from "components/image";

const navLists = [
  { name: "HOME", href: "/home" },
  { name: "test", href: "/home" },
  { name: "test2", href: "/home" },
  { name: "test3", href: "/home" },
  { name: "test4", href: "/home" }
];


export default function Header(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const [activated, setActvated] = useState<number>(0);

  return (
    <div className={styles.headerWraper}>
      <header className={styles.headerContainer} ref={ref}>
        <div className={styles.inner}>
          <nav className={styles.navbar}>
            <ul className={styles.navigationBox}>
              {/* <Image src={""}/> */}
              {navLists.map((list, index) => (
                <li key={list.name} onClick={() => setActvated(index)}>
                  <Link scroll={!(list.name === 'Services')}  href={list.href} passHref>
                    <span
                      className={`${activated === index && styles.active}`}
                    >
                    { list.name }
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.AuthContainer}>
            <AuthButton text="Sign In" navigateUrl="#" isSignUp={false}/>
            <AuthButton text="Sign Up" navigateUrl="#" isSignUp/>
          </div>
        </div>
      </header >
    </div>
  );
}
