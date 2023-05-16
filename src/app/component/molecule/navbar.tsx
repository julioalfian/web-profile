'use client';
import React from 'react';
import Logo from "@/app/component/atom/logo";
import CustomLink from "@/app/component/atom/custom-link";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useThemeSwither from "@/app/component/hooks/useThemeSwither";

export interface INavbar {
    title: string,
    link: string
}

export const navItem: INavbar[] = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Project',
        link: '/project'
    }
]

export default function Navbar() {
    const [mode, setMode] = useThemeSwither()
    return (
        <header
            className={'w-full flex justify-between items-center px-6 lg:px-32 py-8 font-medium bg-light dark:bg-dark'}>
            <Logo/>
            <nav className={'hidden lg:flex'}>
                {
                    navItem.map(item => {
                        return (
                            <>
                                <CustomLink href={item.link} title={item.title} className={'mr-8'}/>
                            </>
                        )
                    })
                }
                <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                        className={'flex items-center justify-center rounder-full'}>
                    {
                        mode === 'dark' ?
                            <WbSunnyIcon color={'inherit'} className={'animate-spin-slow'}/> :
                            <DarkModeIcon color={'secondary'} className={'animate-spin-slow'}/>
                    }
                </button>
            </nav>
            <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                    className={'lg:hidden flex items-center justify-center rounder-full mr-14'}>
                {
                    mode === 'dark' ?
                        <WbSunnyIcon color={'inherit'} className={'animate-spin-slow'}/> :
                        <DarkModeIcon color={'secondary'} className={'animate-spin-slow'}/>
                }
            </button>
        </header>
    )
}