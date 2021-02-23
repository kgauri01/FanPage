import React from 'react'
 
import styles from './style.module.css';
 
const ContactForm = () => (
    <main>
            <form className={styles.formbox}>
                <p className={styles.title}>Pitajte!</p>
                <div>
                    <input className={styles.nameinput}  name="name" type="text" placeholder="Ime i prezime" size="40"/>
                </div>
                <div>
                    <input  className={styles.nameinput} name="name" type="text" placeholder="Email" size="40"/>
                </div>
                <div>
                    <input  className={styles.messageinput}  name="message" type="text" placeholder="Poruka" size="40"/>
                </div>
                <button className={styles.buttonsend}>Pošalji poruku</button>
            </form>
    </main>
)
 
export default ContactForm