import styles from '../styles/home.module.css'
import Project from '../components/Project'
import { Children } from 'react'

export default function Home() {
  const projects = [
    {
      image: "/project1.png",
      title: "Group Project: Live Music App",
      url: "https://cassie-andrews.github.io/com6338-10-10-andrews-torna/"
    },
    {
      image: "/project2.png",
      title: "Booktracker App",
      url: "https://book-tracker-andrews-1552592bed34.herokuapp.com/"
    }
  ]

  return (
    <>
      <div className={styles.home}>
        <h1 className={styles.home__title}>Cassie Andrews</h1>
        <h2 className={styles.home__subtitle}>Graphic & Web Designer</h2>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, i) => (
          <Project key={i} image={project.image} title={project.title} url={project.url}/>
        ))}
      </div>
    </>
  )
}