import React from 'react';
import styles from './Contact.module.css';
import FixedContactHeader from '../../Components/PageComps/Contact/FixedHeader/FixedContactHeader';
import ContactForm from '../../Components/PageComps/Contact/ContactForm/ContactForm';
import ContactData from './../../Json/contactData';

function Contact() {
    // Contact page
    return (
        <div className={styles.contactSection}>
            <FixedContactHeader />
            <ContactForm JsonData={ContactData} />
        </div >
    );
}

export default Contact;