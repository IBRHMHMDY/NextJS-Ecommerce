import Image from 'next/image'
import styles from './page.module.css'
export default function page() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc_short}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore ducimus nulla quo dolores voluptas deserunt.</p>
        </div>
        <div className={styles.imageContainer}>
          <Image className={styles.image} 
            src={'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6'}
            alt='Product Image'
            fill={true}
          />
          <div className={styles.author}>Ibrahim Hamdy</div>
        </div>
        <div className={styles.content}>
          <p className={styles.desc_long}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sequi adipisci perferendis molestiae illum rem iusto repellendus, exercitationem quaerat vitae ab vel repellat perspiciatis est soluta, ullam magnam nulla placeat fugiat. Et quia corporis ipsum! Similique accusantium explicabo repudiandae sint ad quis velit, odit consequuntur quibusdam temporibus deleniti recusandae cupiditate sit obcaecati perspiciatis, expedita hic quos enim est nulla. Fuga nisi delectus sapiente, ea ratione velit nemo ab est adipisci eius dolor veniam sit a unde consectetur odio minus iste pariatur perspiciatis. Aut, aliquam iure mollitia aspernatur ipsam explicabo accusantium molestiae? Error rem laborum cupiditate laudantium. Deserunt molestias, corrupti enim consequuntur deleniti, consectetur neque molestiae magnam odio nam perspiciatis excepturi quidem? Eaque officiis aut beatae ipsam quisquam, odit voluptate, fuga, consequatur cumque at sint earum? Saepe quibusdam, omnis, impedit mollitia sunt enim, corporis blanditiis nam labore sint obcaecati? Quam cumque harum nesciunt optio consequuntur quae, voluptatem doloremque reprehenderit unde! Delectus tempore ducimus labore aliquid sit. Labore repellendus obcaecati iste hic odio dolores eius expedita cum consequatur accusantium quis quia aliquam, assumenda provident deleniti adipisci pariatur officiis ipsam. Perspiciatis nobis aliquam, quia sint eum veritatis? Quidem omnis illum nam quasi, voluptatibus a ut? Voluptatem, quos sit ad debitis neque fuga, iste ipsam vel, fugiat aspernatur magnam quam. Inventore, ullam? Laboriosam a ad, voluptatum nesciunt dolores pariatur mollitia recusandae optio non nihil eligendi aliquam tempore ullam accusantium quasi eaque porro velit amet repellendus? Qui nostrum totam corporis ad aliquam in aut hic neque accusantium commodi repellendus voluptatem quibusdam iusto adipisci rem, mollitia dicta sunt! Ducimus a itaque tempora, placeat neque nihil possimus eligendi mollitia commodi nisi necessitatibus quidem officia aliquid, et iure culpa molestiae, iste veniam id nobis esse illo laboriosam? Quos dignissimos ducimus aliquam cum corporis esse sed iusto ipsam nesciunt nihil voluptate voluptatum, recusandae molestiae minima doloremque, dolor distinctio adipisci! Nobis nesciunt quaerat, obcaecati, mollitia voluptate ullam vitae commodi non id dolores quo quas aliquid autem velit tenetur accusamus ipsa sit blanditiis. Eum, velit itaque pariatur laboriosam, voluptas iusto esse inventore alias rem iure necessitatibus numquam ad tenetur unde distinctio officiis voluptatibus, vel nemo fugiat cupiditate accusantium officia! Recusandae fugiat enim sit molestiae aperiam hic quam! Optio eos voluptates quam sint nam beatae rem omnis, sed eligendi voluptatem necessitatibus officia blanditiis nemo? Enim, totam dolorum quod beatae accusamus hic! Quisquam id soluta quia! Aspernatur, id saepe cumque repellat alias neque ipsum accusamus molestiae aliquam esse qui in nisi quas eum praesentium officia, eos labore vero, officiis porro blanditiis! Iusto commodi repellendus delectus pariatur consequatur illum veniam est vel, nostrum aliquid illo eligendi numquam quae, accusamus consequuntur suscipit aut obcaecati. Ad aliquid et quisquam ea, quaerat amet voluptatibus quas tempore pariatur ratione! Iste vel illum, earum in nihil autem, esse sunt nobis enim dolorum officiis, ipsum ab ea? Deleniti, dolore est exercitationem ut, rerum quisquam atque perferendis ducimus, ipsum reiciendis perspiciatis a adipisci! Odit ab at doloremque soluta officia, aspernatur ratione nam atque quo consequatur ipsum quidem minus non voluptatum. Nobis omnis iusto qui voluptatibus nam repellat sint atque adipisci sapiente!
          </p>
        </div>
      </header>
    </div>
  )
}
