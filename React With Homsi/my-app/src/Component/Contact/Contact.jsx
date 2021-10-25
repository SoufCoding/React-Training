import './Contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { useRef } from 'react'

const Contact = () => {
    const formRef = useRef()

    const handleSubmit =(e)=>{
        e.preventDefault()
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
                        <input type="text" placeholder="Name" name="User_name" />
                        <input type="text" placeholder="Subject" name="User_subject" />
                        <input type="text" placeholder="Email" name="User_email" />
                        <textarea rows="5" placeholder="Message" name="message"></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
