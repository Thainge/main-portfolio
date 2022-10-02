import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './ContactForm.module.css';
import Checkboxes from './../Checkboxes/Checkboxes';
import DropDown from './../DropDown/DropDown';
import Textarea from './../Textarea/TextArea';
import { ContextFunction } from '../../../../Context/ContextProvider';

function ContactForm({ JsonData }) {
    const obj = ContextFunction();
    const { handleSubmit, form } = obj;

    return (
        <>
            {/* Contact Form Container */}
            <div className={styles.ContactInfoContainer}>
                {/* Contact Text */}
                <Fade up delay={500} distance={'5em'}>
                    <div className={styles.contactTextBox}>
                        <div className={styles.h3Contact}>Contact</div>
                        <div className={styles.h1Contact}>Get in touch — let’s work together.</div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <div className={styles.textContact}>Got a project? Drop me a line if you want to work together on something exciting. Big or small. Mobile or web.</div>
                        <form className={styles.contactFormContainer} onSubmit={handleSubmit} ref={form}>
                            <Checkboxes data={JsonData} />
                            <DropDown data={JsonData} />
                            <Textarea data={JsonData} />
                        </form>
                    </div>
                </Fade>
            </div>
        </>
    );
}

export default ContactForm;