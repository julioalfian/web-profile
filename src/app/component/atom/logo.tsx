import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

function Logo() {
    const MotionLink = motion(Link)
    return (
        <div className={'flex justify-center items-center '}>
            <MotionLink href={'/'}
                        className={'w-10 lg:w-16 h-10 lg:h-16 flex justify-center items-center bg-dark text-light rounded-full text-xl lg:text-2xl font-bold border border-solid border-transparent dark:border-light dark:bg-transparent'}
                        whileHover={{
                            backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                            transition: {duration: 5, repeat: Infinity}
                        }}>
                JA
            </MotionLink>
        </div>
    );
}

export default Logo;