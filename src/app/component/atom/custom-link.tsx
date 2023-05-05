'use client';
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

interface ICustomLink {
    href: string,
    title: string,
    className: string
}

function CustomLink(Iprop: ICustomLink) {
    const pathname = usePathname()
    return (
        <Link href={Iprop.href} className={`${Iprop.className} relative group`}>
            {Iprop.title}
            <span
                className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 ${pathname === Iprop.href ? 'w-full' : 'w-0'} transition-[width] ease duration-300 group-hover:w-full`}>&nbsp;</span>
        </Link>
    );
}

export default CustomLink;