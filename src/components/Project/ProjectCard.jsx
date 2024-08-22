import React from 'react'
import styles from './ProjectCard.module.css'
import { getImageUrl } from '../../utils'
export default function ProjectCard({project}) {
  return (
    <>
      <div className={styles.container} >
            <img className={styles.image} src={getImageUrl(project.image)} alt={project.title}/>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <ul className={styles.skills}>
                    {
                        project.skills.map((skill,id) => {
                            return <li className={styles.skill} key={id}>{skill}</li>
                        })
                    }
                </ul>
                <div className={styles.links}>
                    <a className={styles.link} href={project.demo}>Demo</a>
                    <a className={styles.link} href={project.source}>Source</a>
                </div>
            </div>
    </>
  )
}
