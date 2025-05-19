import styles from '../styles/about.module.css'

export default function About() {
  return (
    <div className={styles.about__container}>
        <div>
            <h1 className={styles.about__header}>Nice to meet you!</h1>
            <p className={styles.about}>I'm Cassie and I'm currently living in Bradenton, FL. I work as a program assistant at a local arts-based non-profit. I earned my undergraduate degree from Florida State University in book arts and printmaking and I am currently pursuing a Master’s Degree in Web Design & Online Communications at the University of Florida. My background in fine arts has equipped me with a unique perspective as I navigate the ever-evolving realm of digital design.
            
            Digital design enables me to create engaging, interactive experiences that parallel the traditional artforms I love like artist books. I am eager to explore balancing art and technology to connect with people in authentic new ways.</p>
        </div>

        <div>
            <h2 className={styles.about__header}>Interests</h2>
            <ul>
                <li>Book binding</li>
                <li>Illustration</li>
                <li>Reading</li>
            </ul>
        </div>    
    </div>
  )
}