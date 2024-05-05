import ContactForm from "../../components/Forms/ContactForm"
import React from 'react';
import './Contact.css'; // Import the corresponding CSS file for styling
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ContactPage = () => {
    return (
        <><div>
            <header>
            <div>
                <Header />
            </div>
            </header>
            <div className="home-container">
            <main>
                <div className="page-container">
                    <div className="outer-form-container">
                        <div className="form-container">
                            <ContactForm />
                        </div>
                    </div>
                </div>
                </main>
            </div>
            <footer >
                <Footer />
            </footer>
        </div>
        
        </>
    )
}
export default ContactPage