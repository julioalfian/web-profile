'use client'
import React from 'react';
import {motion} from "framer-motion";

function TransitionEffect() {
    return (
        <>
            <motion.div
                className={'fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary'}
                initial={{x: '0%', width: '0%'}}
                animate={{x: ['0%', '100%', '100%'], width: ['0%', '100%', '0%']}}
                transition={{duration: 1.6, ease: 'easeInOut'}}>
            </motion.div>
            <motion.div
                className={'fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light'}
                initial={{x: '100%', width: '100%'}}
                animate={{x: '0', width: '0'}}
                transition={{delay: 1.3, duration: 0.8, ease: 'easeInOut'}}>
            </motion.div>
            <motion.div
                className={'fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark'}
                initial={{x: '100%', width: '100%'}}
                animate={{x: '0', width: '0'}}
                transition={{delay: 1.6, duration: 0.8, ease: 'easeInOut'}}>
            </motion.div>
        </>
    );
}

export default TransitionEffect;