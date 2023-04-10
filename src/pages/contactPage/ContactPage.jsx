import React from 'react';
import contactStyle from './ContactPage.module.css';

function ContactPage({ ContactPageRef }) {
    return (
        <div className={contactStyle.contactContainer} ref={ContactPageRef}>
            {' '}
            <h2 className={contactStyle.contactMainTitle}>Contact</h2>
            <p className={contactStyle.contactMainDesc}>
                Have a question or want to work together?
            </p>
        </div>
    );
}

export default ContactPage;
