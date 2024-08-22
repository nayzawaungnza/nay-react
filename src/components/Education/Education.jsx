import React from 'react'
import styles from './Education.module.css'
import educations from '../../data/education.json'
import { getImageUrl } from '../../utils'
export default function Education() {
  return (
    <section className={styles.container} id='education'>
         <h2 className={styles.title}>Education</h2>
            <div className={styles.content}>
                <div className={styles.educations}>
                    {
                        educations.map((education,id) => {
                            return (
                                <div className={styles.education} key={id}>
                                <button className={styles.button}>{`${education.startDate} - ${education.endDate}`}</button>
                                    <div className={styles.degree}>
                                        <div className={styles.educationContent}>
                                            <h3 className={styles.degreeTitle}>{education.degree}</h3>
                                            <p className={styles.university}>{education.university}, {education.location}</p>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    </section>
  )
}
