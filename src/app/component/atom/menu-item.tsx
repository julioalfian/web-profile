import React from 'react';
import {motion} from "framer-motion";
import {INavbar} from "@/app/component/molecule/navbar";
import CustomLink from "@/app/component/atom/custom-link";


const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    }
};

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

interface IMenuItem {
    data: INavbar
}

function MenuItem(props: IMenuItem) {
    // const style = {border: `2px solid ${colors[props.title]}`};
    return (
        <motion.li
            variants={variants}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
        >
            {/*<div className="icon-placeholder" style={style}></div>*/}
            {/*<div className="text-placeholder dark:text-dark">{props.data.title}</div>*/}
            <CustomLink href={props.data.link} title={props.data.title} mode={'mobile'} className={'mr-8'}/>
        </motion.li>
    );
}

export default MenuItem;