import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import {toast} from 'react-toastify'
import { HiLocationMarker,HiMail } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
function Contact() {
  const form = useRef();
const sendMail = (e) => {
  toast.success('Email sent')
  e.preventDefault();
    emailjs.sendForm('service_i3h7631', 'template_z5iewo7', form.current, 'e6LBNcx9ezCTU0Xds')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
          toast.error(error.text);
      });
      e.target.reset()
}
  return (
    <div className='h-auto  pt-0 pt-md-3 pb-md-5' id="contact">
        <p className='h1 font-weight-bold text-center my-4'> Contact Me</p>
        <p class="text-center  mx-auto mb-5 text-capitalize">Want to discuss something? Please don't hesitate to contact me directly.
        </p>
        <div class="row">

        <div class="col-md-9 mb-md-0 mb-5 ">
            <form onSubmit={sendMail}  ref={form}className='container'>

                <div class="row">

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="from_name" class="form_control" placeholder='name'/>
                            
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form_control" placeholder='Your email'/>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form_control" placeholder='Subject'/>
                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form_control textarea" placeholder='Your message'></textarea>
                            
                        </div>

                    </div>
                </div>

            <div class="text-center text-md-left">
                <button className="project-button s-a "   type='submit'>Send</button>
              

            </div>
            </form>

            
        </div>

        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><HiLocationMarker class=" mt-4 fs-2 text"/>
                    <p>Dhaka, Bangladesh</p>
                </li>

                <li>
                <BsFillTelephoneFill class=" mt-2 fs-2 text"/>
                    <p>+880 1631405461</p>
                </li>

                <li><HiMail class=" mt-2 fs-2 text"/>
                    <p>mahtabnoor635@gmail.com</p>
                </li>
            </ul>
        </div>

    </div>


    </div>
  )
}

export default Contact