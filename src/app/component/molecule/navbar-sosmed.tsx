'use client';
import React, {useEffect, useState} from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {motion} from "framer-motion";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useThemeSwither from "@/app/component/hooks/useThemeSwither";


export interface ISosmed {
    component: any,
    href: string
}

function NavbarSosmed() {
    const [sosmed, setSosmed] = useState<ISosmed[]>([])
    const [mode, setMode] = useThemeSwither()
    useEffect(() => {
        setSosmed([
            {
                component: <InstagramIcon color={'secondary'}/>,
                href: 'https://instagram.com/julioalfian/'
            },
            {
                component: <LinkedInIcon color={'secondary'}/>,
                href: 'https://linkedin.com/in/julioalfian'
            },
            {
                component: <GitHubIcon color={'secondary'}/>,
                href: 'https://github.com/julioalfian'
            }
        ])
    }, [])

    return (
        <nav className={'h-full flex flex-col justify-center pr-8 ml-0 lg:-ml-16'}>
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
            <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                    className={'flex items-center justify-center rounder-full my-4'}>
                {
                    mode === 'dark' ?
                        <WbSunnyIcon color={'secondary'} className={'animate-spin-slow'}/> :
                        <DarkModeIcon color={'secondary'}/>
                }
            </button>
        </nav>
    );
}

export default NavbarSosmed;