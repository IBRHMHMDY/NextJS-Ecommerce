import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'

export default function Products() {
  return (
    <div className={styles.products}>
      <Link href='/products/id' className={styles.product}>
        <div className={styles.productPhoto}>
          <Image className={styles.image} 
                src={"https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6"} 
                width={300} 
                height={350} 
                alt='Product Image'/>
        </div>
        <div className={styles.content}>
          <h4 className={styles.productName}>Title Product</h4>
          <span className={styles.productPrice}>Price $</span>
        </div>
      </Link>
      <Link href='/products/id' className={styles.product}>
        <div className={styles.productPhoto}>
          <Image className={styles.image} 
                src={"https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6"} 
                width={300} 
                height={350} 
                alt='Product Image'/>
        </div>
        <div className={styles.content}>
          <h4 className={styles.productName}>Title Product</h4>
          <span className={styles.productPrice}>Price $</span>
        </div>
      </Link>
      <Link href='/products/id' className={styles.product}>
        <div className={styles.productPhoto}>
          <Image className={styles.image} 
                src={"https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6"} 
                width={300} 
                height={350} 
                alt='Product Image'/>
        </div>
        <div className={styles.content}>
          <h4 className={styles.productName}>Title Product</h4>
          <span className={styles.productPrice}>Price $</span>
        </div>
      </Link>
    </div>
  )
}
