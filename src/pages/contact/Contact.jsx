import React from "react";
import photo from "../../assets/hero.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-all">
          <div className="contact-bottom-all">
            <div className="contact-bottom">
              <h1>Contact Me</h1>
              <div className="contact-input-wrapper">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Surname" />
                <input type="number" placeholder="Your Number" />
                <input type="text" placeholder="Your Address" />
              </div>
              <textarea
                name=""
                id=""
                rows={10}
                placeholder="Your suggests"
              ></textarea>
              <button>Submit</button>
            </div>
            <div className="contact-bottom-right">
              <img src={photo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
