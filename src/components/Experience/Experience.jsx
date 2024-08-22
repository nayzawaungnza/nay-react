import React from 'react'
import styles from './Experience.module.css'
import skills from '../../data/skill.json'
import history from '../../data/history.json'
import { getImageUrl } from '../../utils.js'
export default function Experience() {
  return (
    <section className={styles.container} id='experience'>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {
                    skills.map((skill,id) => {
                        return (
                            <div className={styles.skill} key={id}>
                                <div className={styles.skillImage}>
                                    <img src={getImageUrl(skill.image)} alt={skill.name} />
                                </div>
                                <p>{skill.name}</p>
                                <p className={styles.tooltips} data-tooltip="{skill.name}">{skill.level}</p>
                            </div>
                        )
                    })
                }
            </div>
            <ul className={styles.experienceList}>
                {
                    history.map((experience,id) => {
                        return (
                            <li className={styles.experienceItem} key={id}>
                                <img src={getImageUrl(experience.imageSrc)} alt={experience.role} />
                                <div className={styles.experienceContent}>
                                    <h3>{`${experience.role}, ${experience.orgainzation}`}</h3>
                                    <p>{`${experience.startDate} - ${experience.endDate}`}</p>
                                    <ul>
                                        {
                                            experience.experiences.map((experience,id) => {
                                                return (
                                                    <li key={id}>{experience}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}
