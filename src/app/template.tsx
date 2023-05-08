'use client'
import React, {Fragment} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "next/navigation";

export default function Template({children}: { children: React.ReactNode }) {
    const pathname = usePathname()
    return (
        <AnimatePresence mode={'wait'}>
            <Fragment key={pathname}>
                {children}
            </Fragment>
        </AnimatePresence>
    )
}