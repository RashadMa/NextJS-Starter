import Image from "next/image"
import styles from "./postCard.module.scss"
import Link from "next/link"

const PostCard = () => {
      return (
            <div className={styles.container}>
                  <div className={styles.top}>
                        <div className={styles.imgContainer}>
                              <Image src="https://i.pinimg.com/236x/37/01/fe/3701feb5d17db54a4daec8d753105f74.jpg" alt="" fill className={styles.img} />
                        </div>
                        <span className={styles.date}>01.01.2024</span>
                  </div>
                  <div className={styles.bottom}>
                        <h1 className={styles.title}>Title</h1>
                        <p className={styles.desc}>Desc</p>
                        <Link className={styles.link} href={``}>READ MORE</Link>
                  </div>
            </div>
      )
}

export default PostCard