import React, { useState } from 'react'
const Subscribe = () => {
    const [formData, setFormData] = useState({
        email: "",
      });
      const [formErrors, setFormErrors] = useState({
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
          email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/,
        };
        const errors = {};
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
          email: "",
        });
        setFormErrors({
          email: "",
        });
      };
      if (showSuccessPopup) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
  return (
    <div className='lg:pt-[64px] '>
      <div className="container max-w-[1140px] mx-auto px-3">
<div className="bg-[url(./assets/images/subscribebg.webp)] bg-cover bg-center bg-no-repeat w-full rounded-xl py-10 md:py-[60px] flex flex-col items-center md:translate-y-[86px] translate-y-10 px-4 ">
    <h2 className=' font-outfit text-3xl md:text-5xl text-[#FDFDFF]  font-light md:leading-[57.6px] mb-2 text-center'>Subscribe to our <span className=' font-semibold'>Newsletter!</span></h2>
    <p className=' font-exo text-sm sm:text-base font-normal text-[#FDFDFF] text-center mb-5 md:mb-9'>Be the first to get exclusive offers and the latest news.</p>
    <div className=' max-w-[448px] mx-auto border border-solid border-[#FDFDFF33] p-2.5 bg-[#8D62DD] rounded-md w-full'>
        <form onSubmit={handleSubmit} className='flex justify-between'>
                <input type="email" name='email'  className='bg-transparent focus-visible:outline-none text-white placeholder:text-white placeholder:font-outfit placeholder:text-sm sm:placeholder:text-base placeholder:font-semibold font-exo w-full pr-3' placeholder='Enter your email'   onChange={handleChange}
                        value={formData.email}/>    
            <input type="submit" value="Subscribe" className=' font-outfit text-white px-6 py-[14px] sm:text-base text-sm  border border-solid border-[#FDFDFF] rounded-[4px]' />
        </form>
    </div>
    {formErrors.email && (
                      <p className="text-[red] pt-1 font-exo">{formErrors.email}</p>
                    )}
</div>
      </div>
    </div>
  )
}

export default Subscribe
