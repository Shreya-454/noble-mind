import React, { useState } from "react";
import { Uparrow } from "./Icon";
const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 1000) {
            setVisible(true);
        } else if (scrolled <= 1000) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <div>
            <button className="group animate-bounce flex justify-center items-center p-2 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-btn-gradient rounded-full fixed right-[1.7%] bottom-[10px] z-30 transition-all ease-linear duration-300 "
                onClick={scrollToTop}
                style={{
                    display: visible ? "flex " : "none",
                }}
            >
                <Uparrow/>
            </button>
        </div>
    );
};

export default BackToTop;