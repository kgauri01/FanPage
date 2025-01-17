import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import {Link} from 'gatsby'
 
import styles from './blog.module.css'
import HeaderFooterLayout from '../layouts/headerFooter'
 
const BlogPost = ({ pageContext }) => {
  const { body, title, coverImage, summary, next, prev } = pageContext
 
  return (
    <HeaderFooterLayout>
      <main className={styles.container}>
        <header className={!prev || !next ? styles.headerTwo : ''}>
          {prev && (<Link to={`/posts/${prev.slug}`}><span>Previous</span></Link>)}
          <h2>
            {title}
          </h2>
          {next && (<Link to={`/posts/${next.slug}`}><span>Next</span></Link>)}
        </header>
        <Img fixed={coverImage.fixed} />
        <article>
        {renderRichText(body)}
        </article>
      </main>
    </HeaderFooterLayout>
  )
}
 
export default BlogPost