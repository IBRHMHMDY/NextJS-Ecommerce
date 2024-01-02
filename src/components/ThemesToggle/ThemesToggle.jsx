"use client"
import Image from 'next/image'
import styles from './ThemesToggle.module.css'
import dark_icon from '/public/images/themes/dark.png'
import light_icon from '/public/images/themes/light.png'
import { useContext } from 'react'
import { ThemesContext } from '@/context/ThemesContext'
export default function ThemesToggle() {

  const {mode, toggle} = useContext(ThemesContext);

  return (
    <div className={styles.container} onClick={toggle} >
      <div className={styles.icon}  style={mode === 'dark' ? {opacity: 1} : {opacity: 0.5}}>
          <Image className={styles.image_icon} width={26} height={26} src={light_icon} alt='themes light' />
      </div>
      <div className={styles.icon} style={mode === 'light' ? {opacity: 1} : {opacity: 0.5}}>
          <Image className={styles.image_icon} width={26} height={26} src={dark_icon} alt='themes dark' />
      </div>

    </div>
  )
}