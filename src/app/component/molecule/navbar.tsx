'use client';
import React from 'react';
import Logo from "@/app/component/atom/logo";
import CustomLink from "@/app/component/atom/custom-link";

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
    return (
        <header
            className={'w-full px-6 lg:px-32 py-8 flex justify-between items-center font-medium bg-light dark:bg-dark'}>
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
            </nav>
        </header>
    )
}