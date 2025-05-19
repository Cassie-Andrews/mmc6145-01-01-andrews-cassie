import styles from '../styles/home.module.css'
import Project from '../components/Project'
import { Children } from 'react'

export default function Home() {
  const projectTitle = [
    "Project Title 1",
    "Project Title 2"
  ]
  return (
    <div>
      <div className={styles.home}>
        <h1 className={styles.home__title}>Cassie Andrews</h1>
        <h2 className={styles.home__subtitle}>Graphic & Web Designer</h2>
      </div>
      <>
        {projectTitle.map((projectTitle, i) => <Project key={i}>{projectTitle}</Project> )}
      </>
    </div>
  )
}