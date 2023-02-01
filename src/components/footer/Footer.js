import React from 'react'
import "./Footer.css"
import {ROUTERS} from "../../data/Navbars"
import mail from "../../assets/logo/mail.png"
import {ImFacebook2} from "react-icons/im"
import {AiOutlineYoutube ,AiOutlineInstagram} from "react-icons/ai"

function Footer() {
  return (
    <div className='footer'>
        <div className="footer__wrapper">
            <div className="footer__links">
                {
                    ROUTERS?.map((value,index)=>(
                        <p key={index}>{value.title}</p>
                    ))
                }
            </div>
            <div className="footer__phones">
                <p>+3 8(050) 747 02 62</p>
                <p> +3 8(096) 565 95 33</p>
                <p>+3 8(093) 170 21 73</p>
            </div>
            <div className="footer__social-link">
                <h4>Одесса, ул. Жуковского, 7</h4>
                <p><img src={mail} alt="" /> alliancepersonal1@gmail.com</p>
                <div className="social__icons">
                    <span><ImFacebook2/></span>
                    <span><AiOutlineInstagram/></span>
                    <span><AiOutlineYoutube/></span>
                     </div>
            </div>
            <div className="footer__btns">
                <button className='footer__first'>оставить отзыв</button>
                <button className='footer__second'>получить консультацию</button>
            </div>
        </div>
        </div>
  )
}

export default Footer