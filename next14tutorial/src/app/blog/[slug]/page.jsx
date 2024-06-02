import Image from "next/image"
import styles from "./singlePost.module.css"

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image classname={styles.image} src="" alt="Random" />
            </div>

            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar} src="" alt="Random" />
                    <div className={styles.detailedText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum placeat dolor quo error atque dolorum vero quos. Fuga culpa aperiam aliquid error? Quis, laborum cupiditate. Accusamus sint iste necessitatibus nisi?
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage