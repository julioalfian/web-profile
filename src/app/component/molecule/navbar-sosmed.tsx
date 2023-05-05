'use client';
import React, {useEffect, useState} from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {motion} from "framer-motion";


export interface ISosmed {
    component: any,
    href: string
}

function NavbarSosmed() {
    const [sosmed, setSosmed] = useState<ISosmed[]>([])
    useEffect(() => {
        setSosmed([
            {
                component: <InstagramIcon color={'secondary'}/>,
                href: '/'
            },
            {
                component: <LinkedInIcon color={'secondary'}/>,
                href: '/'
            },
            {
                component: <GitHubIcon color={'secondary'}/>,
                href: '/'
            }
        ])
    }, [])
    return (
        <nav className={'h-full min-h-screen flex flex-col justify-center'}>
            {
                sosmed.map(item => {
                    return (
                        <motion.a href={item.href}
                                  target={"_blank"}
                                  key={item.href}
                                  className={'w-6 my-4'}
                                  whileHover={{x: 5, scale: 1.1}}
                                  whileTap={{scale: 0.8}}
                        >
                            {item.component}
                        </motion.a>
                    )
                })
            }
        </nav>
    );
}

export default NavbarSosmed;