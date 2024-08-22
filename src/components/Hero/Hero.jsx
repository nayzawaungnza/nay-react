import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils.js'
import { HiDownload } from "react-icons/hi";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nay Zaw Aung</h1>
        <p className={styles.description}>I’m a full-stack developer with 6 years of experience using CMS, PHP, Laravel, React and NodeJS. Reach out if you’d like to learn more!</p>
        

        <div className={styles.downloadcvContainer}>
        <a className={styles.contactBtn} href='mailto:nayzawaung750@gmail.com'>Contact Me</a>
          <a className={styles.downloadcvBtn} href='#'>Download CV <HiDownload size={15} /></a>
          
        </div>

      </div>
      <img className={styles.heroImage} src={getImageUrl('hero/hero.png')} alt='hero' />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}
