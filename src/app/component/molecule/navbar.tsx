'use client';
import React from 'react';
import {useEffect, useState} from "react";
import Logo from "@/app/component/atom/logo";
import CustomLink from "@/app/component/atom/custom-link";


export interface INavbar {
    title: string,
    link: string
}

export default function Navbar() {
    const [navItem, setNavItem] = useState<INavbar[]>([])
    useEffect(() => {
        setNavItem([
            {
                title: 'Home',
                link: '/'
            },
            {
                title: 'Project',
                link: '/project'
            }
        ])
    }, [])
    return (
        <header className={'w-full px-32 py-8 flex justify-between items-center font-medium bg-light'}>
            <Logo/>
            <nav>
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