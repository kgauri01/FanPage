import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
 
const BlogContainers = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        nodes {
          summary {
            internal {
              content
            }
          }
          body {
            raw
          }
          title
          slug
          updatedAt
          coverImage {
            fixed(width: 300, height:300) {
              src
              srcSet
              srcSetWebp
              srcWebp
              width
              height
              base64
              aspectRatio
            }
          }
        }
      }
    }`)
 
    return (
      <section className={styles.container}>
        <h2 className={styles.stilnaslova}>Popis svih blogova</h2>
        <ul className={styles.list}>
          {data.allContentfulBlogPost.nodes.map(node => {
            return (
              <Link className={styles.bloglinks} to={`/posts/${node.slug}`}>
                <li>
                  <Img fixed={node.coverImage.fixed} />
                  <h3>{node.title}</h3>
                  <span >{node.summary.internal.content}</span>
                </li>
              </Link>
            )
          })}
        </ul>
      </section>
  )
}
 
export default BlogContainers