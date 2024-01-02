import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
export function generateMetadata(){
  return {
    title: 'Hexashop - Products',
    description: 'ECommerce Hexashop Online'
  }
}
export async function get_Products() {
  const res = await fetch('https://dummyjson.com/products');

  if(!res.ok) {
      console.error('Failed to Fetch data');
  }
  return await res.json()
}
export default async function Products() {
  const data = await get_Products();
  const products = data.products;
  console.log(products);
  return (
    <div className={styles.products}>
      {
        products.map(product => (
          <Link key={product.id} href={`/products/${product.id}`} className={styles.product}>
            <div className={styles.productPhoto}>
              <Image className={styles.image} 
                    src={`${product.thumbnail}`} 
                    width={300} 
                    height={350} 
                    alt='Product Image'/>
            </div>
            <div className={styles.content}>
              <h4 className={styles.productName}>{product.title}</h4>
              <div className={styles.details}>
                <span className={styles.price}>{product.brand}</span>
                <span className={styles.category}>{product.category}</span>
              </div>
              <div className={styles.details}>
                <span className={styles.category}>Price: {product.price}$</span>
                <span className={styles.category}>⭐{product.rating}</span>
              </div>

            </div>
          </Link>
        ))
      }
      
    </div>
  )
}
