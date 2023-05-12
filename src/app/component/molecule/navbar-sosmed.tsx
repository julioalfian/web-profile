'use client';
import React, {useEffect, useState} from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useThemeSwither from "@/app/component/hooks/useThemeSwither";


export interface ISosmed {
    title: string,
    component: any,
    href: string
}

function NavbarSosmed() {
    const [sosmed, setSosmed] = useState<ISosmed[]>([])
    const [mode, setMode] = useThemeSwither()
    useEffect(() => {
        setSosmed([
            {
                title: 'Instagram',
                component: <InstagramIcon color={'secondary'}/>,
                href: 'https://instagram.com/julioalfian/'
            },
            {
                title: 'LinkedIn',
                component: <LinkedInIcon color={'secondary'}/>,
                href: 'https://linkedin.com/in/julioalfian'
            },
            {
                title: 'Github',
                component: <GitHubIcon color={'secondary'}/>,
                href: 'https://github.com/julioalfian'
            }
        ])
    }, [])

    return (
        <nav data-aos="fade-left"
             data-aos-offset="100"
             data-aos-delay="2100"
             data-aos-duration="1000" className={'h-full flex flex-col justify-center pr-8 ml-0 lg:-ml-16'}>
            {
                sosmed.map(item => {
                    return (
                        <a href={item.href}
                           target={"_blank"}
                           key={item.href}
                           className={'group flex w-6 my-4 cursor-pointer'}
                        >
                            <span
                                className={'text-primary -translate-x-10 group-hover:mr-1 opacity-0 w-0 group-hover:opacity-100 group-hover:w-fit group-hover:translate-x-0 transition duration-300 ease-in-out'}>{item.title}</span>
                            {item.component}
                        </a>
                    )
                })
            }
            <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                    className={'flex items-center justify-center rounder-full my-4'}>
                {
                    mode === 'dark' ?
                        <WbSunnyIcon color={'secondary'} className={'animate-spin-slow'}/> :
                        <DarkModeIcon color={'secondary'} className={'animate-spin-slow'}/>
                }
            </button>
        </nav>
    );
}

export default NavbarSosmed;