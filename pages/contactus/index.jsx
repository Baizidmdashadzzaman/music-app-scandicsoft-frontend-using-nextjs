import React, { useState } from "react";
import Head from 'next/head'
export default function Contactus() {
  const [contactbtn, setContactbtn] = useState(0)
  const submitContactusHandler = async event => {
    event.preventDefault();
    setContactbtn(1);
    const res = await fetch(
     'http://127.0.0.1:8000/api/front-contactus-store',
      {
        body: JSON.stringify({
            contactus_name: event.target.contactus_name.value,
            contactus_email: event.target.contactus_email.value,
            contactus_phone: event.target.contactus_phone.value,
            contactus_subject: event.target.contactus_subject.value,
            contactus_message: event.target.contactus_message.value,
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )
    const result = await res.json()
    if(result.status == 1) { 
        alert(result.message);
        document.querySelector("#contactusdataForm").reset(); 
        setContactbtn(0);
    }
    else { 
        alert(result.message); 
        setContactbtn(0);
    }
  }
  return (
      <>
      <Head>
        <title>Musicapp : Contact us</title>
      </Head>

 <div className="ms_upload_wrapper marger_top60" style={{marginTop:'10px'}}>
  
  <div className=" marger_top5">
    <div className="ms_upload_box">
      <div className="ms_heading">
        <h1>Send your message to us.</h1>
      </div>
      <div className="ms_pro_form">
      <form onSubmit={submitContactusHandler} encType="multipart/form-data" id="contactusdataForm" >
        <div className="form-group">
          <label>Your Name *</label>
          <input type="text" id="contactus_name" name="contactus_name" 
           autoComplete="contactus_name"placeholder="Enter your name" 
           className="form-control" required />
        </div>
        <div className="form-group">
          <label>Your Email *</label>
          <input type="email" id="contactus_email" name="contactus_email" 
           autoComplete="contactus_email"placeholder="Enter your email" 
           className="form-control" required />
        </div>
        <div className="form-group">
          <label>Your Phone *</label>
          <input type="text" id="contactus_phone" name="contactus_phone" 
           autoComplete="contactus_phone"placeholder="Enter your phone" 
           className="form-control" required />
        </div>
        <div className="form-group">
          <label>Subject *</label>
          <input type="text" id="contactus_subject" name="contactus_subject" 
           autoComplete="contactus_subject"placeholder="Enter subject" 
           className="form-control" required />
        </div>
        <div className="form-group"  style={{width:'88%'}}>
          <label>Message *</label>
          <textarea type="text" id="contactus_message" name="contactus_message" 
           autoComplete="contactus_message" placeholder="Enter message" 
           className="form-control" style={{height:'150px'}} required />
        </div>
        <div className="pro-form-btn text-center marger_top15">
          <div className="ms_upload_btn">
            <button type='reset' className="ms_btn">Cancel</button>
            <button type='submit' className="ms_btn">
              { contactbtn == 0 ? ( ' Send message' ) : ( ' Please wait ...' ) }
            </button>
          </div>
        </div>
      </form>
      </div>
    </div>
  </div>
</div>


      
      </>


  )
}