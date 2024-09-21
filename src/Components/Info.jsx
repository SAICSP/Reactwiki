import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import './Info.css';

function Info() {
    const leftCardRef = useRef(null);
    const rightCardRef = useRef(null);
    const isLeftInView = useInView(leftCardRef, { once: true });
    const isRightInView = useInView(rightCardRef, { once: true });

    const leftCardVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    const rightCardVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    return ( 
        <div className="container">
            <div className="maininfo"> 
                <div className="infoleft">
                    <motion.div 
                        className="cardinfo"
                        ref={leftCardRef}
                        variants={leftCardVariants}
                        initial="hidden"
                        animate={isLeftInView ? "visible" : "hidden"}
                    >
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Wikimedia-logo_black.svg/768px-Wikimedia-logo_black.svg.png" 
                            alt="Wikipedia logo" 
                        />
                        <p>
                            <b>Wikipedia is hosted by the Wikimedia</b><br />
                            Foundation, a non-profit organization that also hosts a range of other projects.
                            <a href="#">You can support our work with a donation</a>.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="cardinfo"
                        ref={rightCardRef}
                        variants={rightCardVariants}
                        initial="hidden"
                        animate={isRightInView ? "visible" : "hidden"}
                    >
                        <img src="original.png" alt="Wikipedia app image"/>
                        <p>
                            <a href="#"><b>Download Wikipedia for Android or iOS</b></a><br />
                            Save your favorite articles to read offline, sync your reading lists across devices, 
                            and customize your reading experience with the official Wikipedia app.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Info;
