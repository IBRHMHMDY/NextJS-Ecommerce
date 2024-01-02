import Image from 'next/image'
import styles from './page.module.css'

export async function generateMetadata({params}){
  const product = await get_ProductsId(params.id)

  return {
    title: 'Hexashop - ' + product.title,
    description: product.description
  }

}


export async function get_ProductsId(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if(!res.ok) {
      console.error('Failed to Fetch data');
  }
  return await res.json()
}
export default async function page({params}) {
  const product = await get_ProductsId(params.id)
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.desc}>
              {product.description}
            </p>
        </div>
        <div className={styles.imageContainer}>
          <Image className={styles.image} 
            src={product.thumbnail}
            alt='Product Image'
            fill={true}
          />
          <div className={styles.brand}>{product.brand}</div>
        </div>
        <div className={styles.gallery}>
          {product.images.map(image => (
            <Image key={product.id} src={image} width={200} height={200} alt={product.title} className={styles.g_image} />
          ))}
        </div>
        <div className={styles.content}>
          <div className={styles.details}>
            <span>Category: {product.category}</span>
            <span>Rating: {product.rating}</span>
            <span>Stock: {product.stock}</span>
            <span>Price: {product.price}$</span>
            <span>Discount: {product.discountPercentage}%</span>
          </div>
        </div>
      </header>
    </div>
  )
}
