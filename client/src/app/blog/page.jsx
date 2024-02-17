import PostCard from "@/components/postCard/PostCard"
import styles from "./blog.module.scss";

const Blog = () => {
      return (
            <div className={styles.container}>

                  <div className={styles.post}>
                        <PostCard />
                  </div>
                  <div className={styles.post}>
                        <PostCard />
                  </div>
                  <div className={styles.post}>
                        <PostCard />
                  </div>
                  <div className={styles.post}>
                        <PostCard />
                  </div>

            </div>
      )
}

export default Blog