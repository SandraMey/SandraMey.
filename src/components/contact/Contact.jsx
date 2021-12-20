import React, { useState, useRef } from 'react'
import"./contact.scss";
import phone from "../../assets/phone.png"
import email from "../../assets/email.png"
import emailjs from 'emailjs-com';



function Contact() {

    const form = useRef();

    const [message, setMessage] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)

        emailjs.sendForm('service_uom9pec', 'template_pe3303v', form.current, 'user_XqDpLWbXtkeRwhv9lRPLK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    }


    return (
        <div className="contact" id="contact">
            <div className="left">
                <div className="lefttitle">
                <h1>Besoin d'une developpeuse? N'hésitez pas à me contacter pour discuter de votre projet</h1>
                </div>
                <div className="itemcontainer">
                        <img className="icon" src={phone}/>
                        <span>+33 6 49 33 64 46 </span>
                        
                    </div>
                    <div className="itemcontainer">
                        <img className="icon" src={email}/>
                        <span>sandra.meyniel@gmail.com</span>
                        
                    </div>
            </div>

            <div className="right">
                <h2>Contact</h2>
                <form ref={form} onSubmit={handleSubmit}>
                    <input type="test" placeholder="Nom" name="user_name"/>
                    <input type="test" placeholder="Email" name="user_email"/>
                    <textarea placeholder="Message" name="message"/>
                    <button type="submit" >Envoyer</button>
                    {message && <span>Merci, je vous répond très vite :)</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact
