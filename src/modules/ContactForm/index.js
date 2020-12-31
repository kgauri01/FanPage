import React from 'react'
 
import styles from './style.module.css';
 
const ContactForm = () => (
    <main>
            <form className={styles.formbox}>
                <p className={styles.title}>Contact us</p>
                <div>
                    <input className={styles.nameinput}  name="name" type="text" placeholder="Your name" size="40"/>
                </div>
                <div>
                    <input  className={styles.nameinput} name="name" type="text" placeholder="Email" size="40"/>
                </div>
                <div>
                    <input  className={styles.messageinput}  name="message" type="text" placeholder="Message" size="40"/>
                </div>
                <button className={styles.buttonsend}>Send a message</button>
            </form>
    </main>
)
 
export default ContactForm