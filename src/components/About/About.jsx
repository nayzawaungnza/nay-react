import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils'
export default function About() {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl('about/aboutImg.png')} alt='about' />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cursorIcon.png')} alt='Cursor Icon' />
                    <div className={styles.aboutItemText}>
                        <h3>
                            Frontend Developer
                        </h3>
                        <p>
                        I’m a front-end developer with experience in building responsive and optimized sites
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/mobileIcon.png')} alt='Mobile Icon' />
                    <div className={styles.aboutItemText}>
                        <h3>
                            Backend Developer
                        </h3>
                        <p>
                        I have experience developing fast and optimised back-end systems and APIs
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/layoutIcon.png')} alt='Layout Icon' />
                    <div className={styles.aboutItemText}>
                        <h3>
                            CMS Developer
                        </h3>
                        <p>
                        I have designed multiple landing pages and have created design systems as well
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
