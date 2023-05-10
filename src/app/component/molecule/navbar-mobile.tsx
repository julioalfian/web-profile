'use client'
import React, {useEffect, useRef, useState} from 'react';
import {motion, useCycle} from "framer-motion";
import useDimensions from "@/app/component/hooks/useDimensions";
import MenuToggle from "@/app/component/atom/menu-toggle";
import Navigation from "@/app/component/molecule/navigation";
import {navItem} from "@/app/component/molecule/navbar";
import useToggleOpen from "@/app/component/hooks/useToggleOpen";
import {usePathname} from "next/navigation";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 88% 52px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(20px at 88% 52px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

function NavbarMobile() {
    const {isOpen, setIsOpen} = useToggleOpen();
    const [zIndex, setZIndex] = useState<string>('z-1')
    const containerRef = useRef(null);
    const {height} = useDimensions(containerRef);
    const pathname = usePathname()
    const [lastPathname, setLastPathname] = useState<string>('/')

    useEffect(() => {
        if (pathname) {
            setLastPathname(pathname)
        }
    }, [])
    useEffect(() => {
        if (isOpen === false) {
            setTimeout(function () {
                setZIndex('z-1')
            }, 800);
        } else {
            setZIndex('z-10')
        }
    }, [isOpen])

    useEffect(() => {
        if (pathname !== lastPathname) {
            setIsOpen(!isOpen)
            setLastPathname(pathname)
        }
    }, [pathname])
    return (
        <motion.nav
            className={`lg:hidden mobile-menu ${zIndex}`}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >
            <motion.div className="background bg-primary dark:bg-light" variants={sidebar}/>
            <Navigation data={navItem}/>
            <MenuToggle toggle={() => setIsOpen(!isOpen)}/>
        </motion.nav>
    );
}

export default NavbarMobile;