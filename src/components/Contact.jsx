import React, { useState } from "react";
import contactimg from "../assets/images/contactimg.webp";
const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = {
      firstname: /^[a-zA-Z\s]+$/,
      lastname: /^[a-zA-Z\s]+$/,
      email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/,
    };
    const errors = {};
    if (!regex.firstname.test(formData.firstname)) {
      errors.firstname = "Name is invalid.";
    }
    if (!regex.lastname.test(formData.lastname)) {
      errors.lastname = "LastName is invalid.";
    }
    if (!regex.email.test(formData.email)) {
      errors.email = "email is invalid.";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShowSuccessPopup(true);
    }
  };
  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
    });
    setFormErrors({
      firstname: "",
      lastname: "",
      email: "",
    });
  };
  if (showSuccessPopup) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div className="lg:pt-[150px] md:pt-20 pt-10">
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 w-full" id="contact" >
        <div className="flex lg:flex-row flex-wrap -mx-3 flex-col-reverse">
          <div className="lg:w-1/2 px-3" data-aos="zoom-in">
            <h2 className=" font-outfit text-3xl md:text-5xl md:leading-[57.6px] font-semibold text-[#131200] mb-4 text-center lg:text-start mt-10 lg:mt-0">
              Contact <span className=" font-light">Us</span>
            </h2>
            <p className=" text-[#131200] font-exo text-sm sm:text-base font-normal !opacity-70 text-center lg:text-start">
              Feel free to contact us any time . We will get back to you{" "}
              <span className="lg:block">as soon as we can!</span>{" "}
            </p>
            <form className="max-w-[478px] mt-[18px] mx-auto lg:mx-0" onSubmit={handleSubmit} data-aos="zoom-in">
              <div className="flex w-full gap-[11px] mb-3 md:mb-4">
                <div className="w-1/2">
                  <label
                    htmlFor="first"
                    className=" text-sm sm:text-base  text-[#131200] font-exo opacity-70"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-solid border-[#13120033] mt-[5px] focus-visible:outline-none h-[48px] rounded-lg p-1"
                    id="first"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                  {formErrors.firstname && (
                    <p className="text-[red] pt-1 font-exo">{formErrors.firstname}</p>
                  )}
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="last"
                    className="text-sm sm:text-base  text-[#131200]  font-exo opacity-70"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-solid border-[#13120033] mt-[5px] focus-visible:outline-none h-[48px] rounded-lg p-1"
                    id="last"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  {formErrors.lastname && (
                    <p className="text-[red] pt-1 font-exo">{formErrors.lastname}</p>
                  )}
                </div>
              </div>
              <div className="w-full mb-3 md:mb-4">
                <label
                  htmlFor="email"
                  className=" text-sm sm:text-base font-exo opacity-70 text-[#131200] mb-[5px]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" w-full h-12 border border-solid border-[#13120033] rounded-lg focus-visible:outline-none p-1 mt-[5px]"
                  onChange={handleChange}
                    value={formData.email}/>
                {formErrors.email && (
                  <p className="text-[red] pt-1 font-exo">{formErrors.email}</p>
                )}
              </div>
              <div className="w-full">
                <label
                  htmlFor="Messg"
                  className=" font-exo text-sm sm:text-base font-normal text-[#131200] opacity-70"
                >
                  Message
                </label>
                <textarea
                  name="msg"
                  id="Messg"
                  className="h-[135px] w-full border border-solid border-[#13120033] rounded-lg focus-visible:outline-none p-1 resize-none mt-[5px]"
                ></textarea>
              </div>
              <div className=" flex justify-center lg:block">
                  <button
                    type="submit"
                    className=" bg-btn-gradient text-white py-[14px] sm:text-base text-sm  px-6 rounded-[4px] md:mt-6 mt-4 z-[1] before:z-[-1]  before:transition-all before:ease-linear before:hover:bg-white duration-300 before:duration-300 before:absolute before:left-[-100%] before:bg-transparent before:hover:left-[0] before:hover:w-full before:top-0 before:w-full before:h-full  relative overflow-hidden border-transparent border-[2px] hover:text-[#A854E9] hover:border-[#A854E9] "
                  >
                    Submit
                  </button>
              </div>
              {showSuccessPopup && (
        <div>
          <div className="flex flex-col items-center">
            <p className="text-black pt-1 font-outfit">Form submitted successfully!</p>
            <button className=" bg-btn-gradient text-white px-3 py-2 font-outfit" onClick={handlePopupClose}>Close</button>
          </div>
        </div>
      )}
            </form>
          </div>
          <div className="lg:w-1/2 px-3 flex justify-center" data-aos="fade-left">
            <img
              src={contactimg}
              alt="img"
              className=" rounded-xl lg:w-full lg:h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
