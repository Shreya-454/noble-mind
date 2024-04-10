import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import triangle from "../assets/images/svg/triangle.svg";
function Icon({ id, open }) {
  return (
    <svg
      width="13"
      height="7"
      viewBox="0 0 13 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        d="M6.44902 6.69038C6.31569 6.69038 6.18636 6.66538 6.06102 6.61538C5.93569 6.56538 5.83169 6.49871 5.74902 6.41538L1.14902 1.81538C0.96569 1.63205 0.874023 1.39871 0.874023 1.11538C0.874023 0.832047 0.96569 0.598714 1.14902 0.41538C1.33236 0.232047 1.56569 0.140381 1.84902 0.140381C2.13236 0.140381 2.36569 0.232047 2.54902 0.41538L6.44902 4.31538L10.349 0.41538C10.5324 0.232047 10.7657 0.140381 11.049 0.140381C11.3324 0.140381 11.5657 0.232047 11.749 0.41538C11.9324 0.598714 12.024 0.832047 12.024 1.11538C12.024 1.39871 11.9324 1.63205 11.749 1.81538L7.14902 6.41538C7.04902 6.51538 6.94069 6.58638 6.82402 6.62838C6.70736 6.67038 6.58236 6.69105 6.44902 6.69038Z"
        fill="#5A5A4D"
      />
    </svg>
  );
}

const Faq = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className=" lg:pt-[150px] md:pt-20 pt-10 relative" id="faq">
      <img
        src={triangle}
        alt="tri"
        className=" absolute top-[11%] left-[3%] hidden lg:block animate-pulse"
      />
      <img
        src={triangle}
        alt="tri"
        className="absolute bottom-[25%] right-[3%] hidden lg:block animate-pulse"
      />
      <div className=" container max-w-[1140px] 2xl:max-w-[1320px] mx-auto w-full px-3">
        <h2
          className=" font-outfit text-3xl md:text-5xl text-center md:leading-[57.6px] text-[#131200] text-light  mb-4"
          data-aos="zoom-in"
        >
          Frequently <span className=" font-semibold">Asked Questions</span>
        </h2>
        <p
          className=" font-exo text-sm sm:text-base text-[#131200] !opacity-70 text-center mb-7 md:mb-[52px]"
          data-aos="zoom-in"
        >
          Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu{" "}
          <span className="md:block">
            volutpat mi leo. Nibh nisl consequat metus.
          </span>
        </p>
        <div className=" max-w-[774px] mx-auto" data-aos="zoom-in">
          <div
            className={`border border-solid border-[#A854E933] mb-[18px] shadow-[0px_4px_32px_0px_#00000014] after:w-full after:h-[5px] relative after:absolute after:bg-[#A854E9]  after:bottom-0  overflow-hidden rounded-md duration-300 ${
              open === 1 ? "border-[#A854E9] !after:block  " : "after:hidden"
            }`}
          >
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className={`pb-6 pt-6 px-6 text-start font-outfit text-sm sm:text-base font-medium text-black ${
                  open === 1 ? "pb-3 !opacity-100" : " !opacity-70"
                }`}
              >
                What is Artificial Intelligence (AI)?
              </AccordionHeader>
              <AccordionBody className="pb-6 px-6 font-exo text-sm sm:text-base text-black opacity-70 max-w-[710px]">
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </AccordionBody>
            </Accordion>
          </div>
          <div
            className={`border border-solid border-[#A854E933] mb-[18px] shadow-[0px_4px_32px_0px_#00000014] after:w-full after:h-[5px] relative after:absolute after:bg-[#A854E9]  after:bottom-0 overflow-hidden rounded-md duration-300 ${
              open === 2 ? "border-[#A854E9] !after:block  " : "after:hidden"
            }`}
          >
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className={`pb-6 pt-6 px-6 text-start font-outfit text-sm sm:text-base font-medium text-black ${
                  open === 2 ? "pb-3 !opacity-100" : " !opacity-70"
                }`}
              >
                How does AI benefit our company?
              </AccordionHeader>
              <AccordionBody className="pb-6 px-6 font-exo text-sm sm:text-base text-black opacity-70 max-w-[710px]">
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </AccordionBody>
            </Accordion>
          </div>
          <div
            className={`border border-solid border-[#A854E933] mb-[18px] shadow-[0px_4px_32px_0px_#00000014] after:w-full after:h-[5px] relative after:absolute after:bg-[#A854E9]  after:bottom-0 overflow-hidden rounded-md duration-300 ${
              open === 3 ? "border-[#A854E9] !after:block  " : "after:hidden"
            }`}
          >
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className={`pb-6 pt-6 px-6 text-start font-outfit text-sm sm:text-base font-medium text-black ${
                  open === 3 ? "pb-3 !opacity-100" : " !opacity-70"
                }`}
              >
                What types of AI technologies are relevant to our industry?
              </AccordionHeader>
              <AccordionBody className="pb-6 px-6 font-exo text-sm sm:text-base text-black opacity-70 max-w-[710px]">
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </AccordionBody>
            </Accordion>
          </div>
          <div
            className={`border border-solid border-[#A854E933] mb-[18px] shadow-[0px_4px_32px_0px_#00000014] after:w-full after:h-[5px] relative after:absolute after:bg-[#A854E9]  after:bottom-0  overflow-hidden rounded-md duration-300 ${
              open === 4 ? "border-[#A854E9] !after:block  " : "after:hidden"
            }`}
          >
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className={`pb-6 pt-6 px-6 text-start font-outfit text-sm sm:text-base font-medium text-black ${
                  open === 4 ? "pb-3 !opacity-100" : " !opacity-70"
                }`}
              >
                How can our employees adapt to AI integration?
              </AccordionHeader>
              <AccordionBody className="pb-6 px-6 font-exo text-sm sm:text-base text-black opacity-70 max-w-[710px]">
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </AccordionBody>
            </Accordion>
          </div>
          <div
            className={`border border-solid border-[#A854E933] shadow-[0px_4px_32px_0px_#00000014] after:w-full after:h-[5px] relative after:absolute after:bg-[#A854E9]  after:bottom-0  overflow-hidden rounded-md duration-300 ${
              open === 5 ? "border-[#A854E9] !after:block  " : "after:hidden"
            }`}
          >
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className={`pb-6 pt-6 px-6 text-start font-outfit text-sm sm:text-base font-medium text-black ${
                  open === 5 ? "pb-3 !opacity-100" : " !opacity-70"
                }`}
              >
                How can our company ensure data security with AI?
              </AccordionHeader>
              <AccordionBody className="pb-6 px-6 font-exo text-sm sm:text-base text-black opacity-70 max-w-[710px]">
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
