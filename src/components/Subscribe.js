import React, { useRef, useState } from "react";
import instag from '../images/instag.png'
import tweet from '../images/tweet.png'
import face from '../images/face.png'
import tic from '../images/tic.png'
import youtube from '../images/youtube.png'
import emailjs from "@emailjs/browser";
import {AnimatedOnScroll} from "react-animated-css-onscroll";


const Subscribe = () => {
    const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_lllqfqe',
        'template_esp19rs',
        {
          from_name: form.name,
          to_name: "Magixx",
          from_email: form.email,
          to_email: "mavinmagixx1@gmail.com",
          message: form.message,
        },
        'h_F7nFmtGAulDEDGQ'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for subscribing...");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section>
        
        <div className="subscribe-input">
       
            <div className="subscribe">
                <p className="subscribe-bold-head">SUBSCRIBE</p>
                <AnimatedOnScroll animationIn="fadeIn">
                <h4 className="up-to-date">Stay up to date with the latest from Magixx</h4>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="bounceInLeft">
                <p className="opting-option">
                    By providing this information, you are opting to
                     receive emails from Magixx with  news, tour dates,   
                     special offers, promotions and messages tailored
                     to your interests. You're free to unsubscribe at 
                     anytime by clicking the unsubscribe link underneath
                     the email sent to you.
            
                </p>
                </AnimatedOnScroll>
              
            </div>
            

            <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='input'
        >
                <p className="details">DETAILS</p>
                <input
                type='text'
                name='message'
                value={form.message}
                onChange={handleChange}
                 placeholder="Email"
                 required
                 />
                <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                 placeholder="City"
                 />
                
                <button type='submit' className="subscribe-btn">{loading ? "Subscribing..." : "Subscribe"}</button>
            </form>
        </div>
        <div  className="sm:hidden visable flex flex-row flex-wrap items-center justify-center py-3">
                    <p className='a-p'><a href='https://www.instagram.com/iam_magixx/?hl=en' target='_blank' rel="noreferrer"><img src={instag} alt='' className='w-[60%]'/></a></p>
                    <p className='a-p'><a href='https://twitter.com/iam_magixx?lang=en' target='_blank' rel="noreferrer"><img src={tweet} alt=''className='w-[60%]'/></a></p>
                    <p className='a-p'><a href='https://web.facebook.com/kingmagixx/?_rdc=1&_rdr' target='_blank' rel="noreferrer"><img src={face} alt='' className='w-[60%]'/></a></p>
                    <p className='a-p'><a href='https://www.tiktok.com/@king.magixx' target='_blank' rel="noreferrer"><img src={tic} alt='' className='w-[60%]'/></a></p>
                    <p className='a-p'><a href='https://www.youtube.com/channel/UCxB1Xmz7BomgGotLDMLAUdQ' target='_blank' rel="noreferrer"><img src={youtube} alt='' className='w-[70%]'/></a></p>
                </div>
    </section>
  )
}
export default Subscribe