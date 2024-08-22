import React from 'react'
import styles from './Contact.module.css'
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <footer className={styles.container} id='contact'>
      <div className={styles.text}>
        <h2 className={styles.title}>Contact</h2>
        <p>Feel Free to React Out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
            <MdEmail size={30} />
            <a  href='mailto:nayzawaung750@gmail.com'>nayzawaung750@gmail.com</a>
        </li>
        <li className={styles.link}>
        <FaFacebookSquare size={30} />
            <a  href='https://facebook.com/nayzawaung/'>facebook.com/nayzawaung</a>
        </li>
        <li className={styles.link}>
            <FaGithub size={30} />
            <a  href='https://github.com/nayzawaungnza/'>github.com/nayzawaungnza</a>
        </li>
      </ul>
    </footer>
  )
}
