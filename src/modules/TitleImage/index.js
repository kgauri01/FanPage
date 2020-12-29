import React from 'react'
 
import styles from './style.module.css'
import Typed from 'react-typed'

const TitleImage = () => (
  <section className={styles.titleImage}>
    <div>
      <h1>Dobrodošli na Fan Page Bijelog dugmeta</h1>
    </div>
    <span className={styles.helloText}>
    <Typed 
                  loop
                  typeSpeed={70}
                  backSpeed={70}
                  strings={['Istražujte', 'Učite', 'Gledajte', 'Slušajte', 'Uživajte!']}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />
    </span>
  </section>
)
 
export default TitleImage