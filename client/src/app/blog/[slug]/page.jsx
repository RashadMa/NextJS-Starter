import Image from "next/image";
import styles from "./singlePost.module.scss";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

const SinglePostPage = async ({ params }) => {
      const { slug } = params
      const post = await getPost(slug)
      return (
            <div className={styles.container}>
                  {post.img && <div className={styles.imgContainer}>
                        <Image src={post?.img} alt="" fill className={styles.img} />
                  </div>}
                  <div className={styles.textContainer}>
                        <h1 className={styles.title}>{post?.title}</h1>
                        <div className={styles.detail}>
                              <div className={styles.detailText}>
                                    <Suspense className={styles.detailText} fallback={<div>Loading...</div>}>
                                          <PostUser userId={post?.userId} />
                                    </Suspense>
                              </div>
                              <div className={styles.detailText}>
                                    <span className={styles.detailTitle}>Published</span>
                                    <span className={styles.detailValue}>
                                          {/* {post.createdAt.toString().slice(4, 16)} */}
                                          01.01.2024
                                    </span>
                              </div>

                        </div>
                        <div className={styles.content}>{post?.desc}</div>
                  </div>
            </div>
      );
};

export default SinglePostPage;