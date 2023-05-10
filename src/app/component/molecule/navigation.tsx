import React from 'react';
import {motion} from "framer-motion";
import MenuItem from "@/app/component/atom/menu-item";
import {INavbar} from "@/app/component/molecule/navbar";

interface INavigation {
    data: INavbar[]
}

const variants = {
    open: {
        transition: {staggerChildren: 0.07, delayChildren: 0.2}
    },
    closed: {
        transition: {staggerChildren: 0.05, staggerDirection: -1}
    }
};

function Navigation(props: INavigation) {
    return (
        <motion.ul variants={variants}>
            {props.data.map((item, i) => (
                <MenuItem data={item} key={i}/>
            ))}
        </motion.ul>
    );
}

export default Navigation;