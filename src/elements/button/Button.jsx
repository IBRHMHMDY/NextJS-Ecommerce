'use client'
import styles from './button.module.css'
export default function Button() {
  return (
    <button onClick={()=> console.log('Logout')} className={styles.button}>Logout</button>
  )
}
