import PostCard from "@/components/postCard/PostCard"
import styles from "./blog.module.scss";
import { getPosts } from "@/lib/data";

const Blog = async () => {
      const posts = await getPosts()

      return (
            <div className={styles.container}>
                  {
                        posts.map((post) => (
                              <div key={post.id} className={styles.post}>
                                    <PostCard post={post} />
                              </div>
                        ))
                  }
            </div>
      )
}

export default Blog