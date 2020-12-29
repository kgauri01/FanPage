import React from 'react'
import styles from './style.module.css'
import { AiFillYoutube } from "@react-icons/all-files/Ai/AiFillYoutube";
import {IoLogoFacebook} from "@react-icons/all-files/Io/IoLogoFacebook"

  const Footer = () => (
    <footer className={styles.footer}>
            <section className={styles.text}>
                <span className={styles.footerText1}>"Što su bili Beatlesi za svijet, to je bilo Bijelo dugme za Jugoslaviju"</span>
                <span>-Milić Vukašinović</span>
            </section>
            <section className={styles.youtubesec}>
                <span>Youtube kanal:</span>
                <a href="https://www.youtube.com/user/BijeloDugmeVIPPER/videos"><AiFillYoutube size="50px" color="red" cursor="pointer"/></a>
            </section>
            <section className={styles.facesec}>
                <span>Facebook:</span>
                <a href="https://www.facebook.com/Bijelo-Dugme-100485283136"><IoLogoFacebook size="50px" color="#3B5998" cursor="pointer"/></a>
            </section>
    </footer>
  )
 
  export default Footer