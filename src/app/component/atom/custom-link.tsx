'use client';
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

interface ICustomLink {
    href: string,
    title: string,
    className: string,
    mode?: 'mobile' | 'dekstop'
}

function CustomLink(Iprop: ICustomLink) {
    const pathname = usePathname()
    return (
        <>
            {
                Iprop.mode === 'mobile' ?
                    <Link key={Iprop.title} href={Iprop.href}
                          className={`d-flex items-center text-dark ${Iprop.className} ${pathname === Iprop.href ? 'font-medium underline' : ''}`}>
                        {Iprop.title}
                    </Link> :
                    <Link key={Iprop.title} href={Iprop.href}
                          className={`${Iprop.className} ${pathname === Iprop.href ? 'text-primary ' : 'text-dark'} relative group text-dark dark:text-light`}>
                        {Iprop.title}
                        <span
                            className={`h-[2px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 ${pathname === Iprop.href ? 'w-full bg-primary' : 'w-0'} transition-[width] ease duration-300 group-hover:w-full`}>&nbsp;</span>
                    </Link>
            }
        </>
    );
}

export default CustomLink;