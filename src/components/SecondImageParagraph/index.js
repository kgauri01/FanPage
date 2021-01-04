import React from 'react'
import styles from './style.module.css'
 
const SecondImageParagraph = ({image, title, text }) => (
  <section className={styles.secondImageParagraph}>
    <div className={styles.secondArticleHalf}>
        <article >
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
    </div>
    <div className={styles.secondImageHalf}>{image}</div>
  </section>
  )
 
export default SecondImageParagraph