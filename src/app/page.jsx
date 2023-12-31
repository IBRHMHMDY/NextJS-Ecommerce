import Image from 'next/image'
import styles from './page.module.css'
import hero from '/public/images/hero.svg';
export default function Home() {
  return (
    // Hero Section
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your best online shop e-commerce</h1>
        <p className={styles.description}>Numquam itaque minima perspiciatis cum voluptas reprehenderit enim delectus ex nulla, quisquam corrupti quod, culpa quasi repudiandae!</p>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.col}>
        <Image className={styles.image} src={hero} alt='Hero Image'/>
      </div>
    </div>
    // #Hero Section
  )
}
