"use client"
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";

function Footer() {
    return (
        <footer
            className={'w-full px-32 py-4 border-t-[1px] border-solid border-dark font-medium text-lg bg-light text-dark dark:bg-dark'}>
            <div className={'flex items-center justify-between'}>
                <span className={'dark:text-light'}>{new Date().getFullYear()} &copy; All Right Reserved</span>
                <div className={'flex items-center dark:text-light'}>Build with <span
                    className={'text-primary text-2xl px-1'}>&#9825;</span> by &nbsp; <Link
                    href={'/'} className={'dark:text-light'}>JulioAlfian</Link>
                </div>
                <div className={'animate-spin-slow dark:bg-light dark:rounded-full'}>
                    <Image src={'/images/logo-web.png'} alt={'logo'} height={38} width={38}/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;