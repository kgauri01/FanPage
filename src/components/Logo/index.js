import React from 'react'
import styles from './style.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMusic} from "@fortawesome/free-solid-svg-icons"

const Logo = () => (
  <section className={styles.logo}>
    <span className={styles.logoText1}>Bijelo<FontAwesomeIcon className="new" icon={faMusic} color="black"/></span>
    <span className={styles.logoText2}><FontAwesomeIcon icon={faMusic} color="black"/>dugme</span>
  </section>

)

export default Logo