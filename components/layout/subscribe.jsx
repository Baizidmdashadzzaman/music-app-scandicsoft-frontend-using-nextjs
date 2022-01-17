import React, { useState } from "react";

function subscribe() {
    const [subbtn, setSubbtn] = useState(0)
    const submitSubcriberHandler = async event => {
        event.preventDefault();
        setSubbtn(1);
        const res = await fetch(
         'http://127.0.0.1:8000/api/front-subscriber-store',
          {
            body: JSON.stringify({
                subscriber_name: event.target.subscriber_name.value,
                subscriber_email: event.target.subscriber_email.value,
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
            document.querySelector("#subcriberdataForm").reset();
            setSubbtn(0); 
        }
        else { 
            alert(result.message); 
            $("#subscriber_email").val(""); 
            setSubbtn(0);
        }
      }
    return (
        <>
           <div className="col-lg-3 col-md-6">
            <div className="footer_box footer_subscribe">
              <h1 className="footer_title">subscribe</h1>
              <p>Subscribe to our newsletter and get latest updates and offers.</p>
              <form onSubmit={submitSubcriberHandler} encType="multipart/form-data" id="subcriberdataForm" >
                <div className="form-group">
                  <input type="text" id="subscriber_name" name="subscriber_name" 
                  autoComplete="subscriber_name" className="form-control" 
                  placeholder="Enter Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" id="subscriber_email" name="subscriber_email" 
                  autoComplete="subscriber_email" className="form-control" 
                  placeholder="Enter Your Email" required />
                </div>
                <div className="form-group">
                  <button type='submit' className="ms_btn">
                    { subbtn == 0 ? ( ' sign me up' ) : ( ' Please wait ...' ) }
                  </button>
                </div>
              </form>
            </div>
            </div>

        </>
    )
}

export default subscribe
