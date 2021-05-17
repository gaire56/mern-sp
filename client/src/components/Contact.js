import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10  d-flex justify-content-around offset-lg-1 mt-5">
              <div className="contact_info_item d-flex justify-content-start align-item-center">
                <img
                  src="https://pngimg.com/uploads/iphone_12/iphone_12_PNG13.png"
                  alt="phone"
                  width="40px"
                  height="45px"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+977 9851205428</div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-start align-item-center">
                <img
                  src="http://assets.stickpng.com/thumbs/58485771a6aca45b5a5c95b8.png"
                  alt="email"
                  width="35px"
                  height="45px"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">E-mail</div>
                  <div className="contact_info_text">56.anant@gmail.com</div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-start align-item-center">
                <img
                  src="https://www.freeiconspng.com/thumbs/address-icon/address-building-company-home-house-office-real-estate-icon--10.png"
                  alt="address"
                  width="40px"
                  height="40px"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">Kathmandu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**Contact us form */}
      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container mt-5 py-5">
                <div className="contact_form_title">Get in Touch</div>
                <form id="contact_form">
                  <div className="contact_form_name d-flex justify-content-between align-item-between">
                    <input
                      type="text"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="Your Name"
                      required="true"
                    />
                    <input
                      type="email"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="Your Email"
                      required="true"
                    />
                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      placeholder="Your Phone Number"
                      required="true"
                    />
                  </div>
                  <div className="contact_form_text mt-5">
                    <textarea
                      name=""
                      id=""
                      cols="90"
                      rows="10"
                      className="text_field contact_form_message"
                      placeholder="Your Message!..."
                    ></textarea>
                  </div>
                  <div className="contact_form_button">
                    <button
                      type="submit"
                      className="button contact_submit_button"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
