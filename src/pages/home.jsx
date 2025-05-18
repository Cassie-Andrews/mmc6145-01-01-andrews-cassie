import styles from '../styles/home.module.css'
import Project from '../Project'
import { Children } from 'react'

export default function Home() {
  const projectTitle = [
    "Project Title 1",
    "Project Title 2",
    "Project Title 3"
  ]
  return (
    <main>
      <h1 className={styles.home}>Cassie Andrews</h1>
      <h2>Graphic & Web Designer</h2>
      <button>Contact</button>
      <>
        {projectTitle.map((projectTitle, i) => <Project key={i}>{projectTitle}</Project> )}
      </>
    </main>
  )
}