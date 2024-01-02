'use client'

import Image from "next/image"
import styles from './footer.module.css';
import { social_media } from "./social_data";

export default function Footer() {

  return (
    <div className={styles.footer}>
      <div >©2024 Hexashop. all rights reserved</div>
      <div className={styles.social}>
        {social_media.map((icon)=> 
        <Image key={icon.id} src={`/images/icons/${icon.icon_name}.png`} 
              width={30} 
              height={30} 
              alt={`${icon.icon_name} link`}
              className={styles.icon}/>
          )}

      </div>
    </div>
  )
}
