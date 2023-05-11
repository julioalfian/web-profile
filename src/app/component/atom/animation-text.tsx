'use client';
import React from 'react';
import {motion} from "framer-motion";

interface IAnimationText {
    text: string,
    className: string
}

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 2,
            staggerChildren: 0.3
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

function AnimationText(Iprops: IAnimationText) {
    return (
        <div data-aos="fade-left"
             data-aos-offset="200"
             data-aos-delay="2100"
             data-aos-duration="1000"
             className={'w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'}>
            <motion.h1
                className={`inline-block w-full text-dark dark:text-light font-bold capitalize ${Iprops.className}`}
                variants={quote}
                initial={'initial'}
                animate={'animate'}
            >
                {
                    Iprops.text.split(" ").map((word, index) =>
                        <motion.span
                            key={word + '-' + index}
                            className={'inline-block'}
                            variants={singleWord}
                        >{word}&nbsp;</motion.span>)
                }
            </motion.h1>
        </div>
    );
}

export default AnimationText;