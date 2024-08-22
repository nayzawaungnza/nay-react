import React from 'react'
import styles from './Project.module.css'
import { getImageUrl } from './../../utils'
import projects from './../../data/projects.json'
import ProjectCard from './ProjectCard'
export default function Project() {
  return (
    <section className={styles.container} id='project'>
        <h2 className={styles.title}>Project</h2>
        <div className={styles.projects}>
            {
                projects.map((project,id) => {
                    return (
                        <ProjectCard key={id} project={project}/>
                    )
                })
            }
        </div>
    </section>
  )
}
