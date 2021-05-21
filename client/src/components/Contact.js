import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Contact = () => {
  const history = useHistory();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    userContact();
  }, []);

  const userContact = async () => {
    try {
      const res = await fetch('/getdata', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      // console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push('/signin');
    }
  };

  /**storing data */
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  /**storing data end */

  /**sending data to server */

  const contactForm = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;

    const res = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    const data = await res.json();

    if (!data) {
      console.log('message not send');
    } else {
      alert('Message send');
      setUserData({ ...userData, message: '' });
    }
  };

  /**sending data to server end */

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
                <form id="contact_form" method="POST">
                  <div className="contact_form_name d-flex justify-content-between align-item-between">
                    <input
                      name="name"
                      type="text"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      value={userData.name}
                      onChange={handleInputs}
                      placeholder="Your Name"
                      required="true"
                    />
                    <input
                      name="email"
                      type="email"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      value={userData.email}
                      onChange={handleInputs}
                      placeholder="Your Email"
                      required="true"
                    />
                    <input
                      name="phone"
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      value={userData.phone}
                      onChange={handleInputs}
                      placeholder="Your Phone Number"
                      required="true"
                    />
                  </div>
                  <div className="contact_form_text mt-5">
                    <textarea
                      name="message"
                      id=""
                      cols="90"
                      rows="10"
                      className="text_field contact_form_message"
                      placeholder="Your Message!..."
                      value={userData.message}
                      onChange={handleInputs}
                    ></textarea>
                  </div>
                  <div className="contact_form_button">
                    <button
                      type="submit"
                      className="button contact_submit_button"
                      onClick={contactForm}
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
