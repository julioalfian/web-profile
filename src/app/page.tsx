"use client"
import Image from 'next/image'
import AnimationText from "@/app/component/atom/animation-text";
import Link from "next/link";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Home() {
    return (
        <div className={'flex justify-between items-center text-dark w-full h-full min-h-screen'}>
            <div className={'w-1/2 flex justify-center'}>
                <Image src={'/images/profile/developer-pic-1.png'} alt={'profile'} width={'500'}
                       height={'500'} priority sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"/>
            </div>
            <div className={'w-1/2 flex flex-col items-center self-center'}>
                <AnimationText text={'Turning Vision Into Reality With Code And Design.'}
                               className={'text-6xl !text-left'}/>
                <p className={'my-4 text-base font-medium dark:text-light'}>
                    As a skilled full-stack developer, I am dedicated to turning
                    ideas into
                    innovative web applications.
                    Explore my latest projects and articles, showcasing my expertise in React.js and web
                    development.
                </p>
                <div className={'flex items-center self-start mt-2'}>
                    <Link
                        href={'/file/CV2023.pdf'}
                        target={'_blank'}
                        className={'flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold ' +
                            'hover:bg-light hover:text-dark border-2 boder-solid border-transparent hover:border-dark dark:border-light dark:bg-light dark:text-dark'}
                        download={true}
                    >Resume <CloudDownloadIcon className={'ml-2'}/></Link>
                    <Link
                        href={'mailto:julioixc@gmail.com'}
                        target={'_blank'}
                        className={'ml-4 flex items-center bg-light text-primary p-2.5 px-6 rounded-lg text-lg font-semibold ' +
                            'hover:bg-primary hover:text-light border-2 boder-solid border-primary hover:border-tranparent dark:bg-transparent dark:border-transparent'}
                        download={true}
                    >Contact <AlternateEmailIcon className={'ml-2'}/></Link>
                </div>
            </div>
        </div>
    )
}
