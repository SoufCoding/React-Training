import './Contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { useContext, useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../Context'

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const Theme = useContext(ThemeContext);
    const darkMode = Theme.state.darkMode;

    const handleSubmit =(e)=>{
        e.preventDefault();
        emailjs.sendForm('gmailsoufkerr', 'template_v20xjr5', formRef.current, 'user_XOQ36ozdXZJsDIiq8h3mu')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }


    return (
        <div className ='c'>
            <div className="c-bg"></div>
            <div className="c-wraper">
                <div className="c-left">
                    <h1 className="c-title">Let's Discuss Your Project </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" /> +213 780 002 554
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" /> K.Soufiane3995@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" /> City Chouhada, El-Oued, Algeria
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc"><b>Lorem, ipsum dolor sit amet</b> consectetur adipisicing elit. Quidem a nemo libero porro voluptas saepe, cupiditate corporis, odit impedit expedita quas. Voluptas.</p>
                    <form ref= {formRef} onSubmit={handleSubmit}>
                        <input style= {{backgroundColor: darkMode? "#333" : "white", color: darkMode && "white" }} type="text" placeholder="Name" name="User_name" />
                        <input style= {{backgroundColor: darkMode? "#333" : "white", color: darkMode && "white" }} type="text" placeholder="Subject" name="User_Subject" />
                        <input style= {{backgroundColor: darkMode? "#333" : "white", color: darkMode && "white" }} type="text" placeholder="Email" name="User_Email" />
                        <textarea style= {{backgroundColor: darkMode? "#333" : "white", color: darkMode && "white", border: darkMode && "none" }} rows="5" placeholder="Message" name="message"></textarea>
                        <button>Submit</button>
                        {done && "Thank You..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
