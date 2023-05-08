"use client"
import Image from 'next/image'
import AnimationText from "@/app/component/atom/animation-text";
import Link from "next/link";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TransitionEffect from "@/app/component/atom/transition-effect";

export default function Home() {
    return (
        <>
            <TransitionEffect/>
            <div className={'flex justify-between items-center text-dark w-full h-full min-h-screen'}>
                <div className={'w-1/2 flex justify-center'}>
                    <Image src={'/images/profile/avatar-light.png'} alt={'profile'} width={'500'}
                           height={'500'} priority sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                           className={'block dark:hidden'}/>
                    <Image src={'/images/profile/avatar-dark.png'} alt={'profile'} width={'500'}
                           height={'500'} priority sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                           className={'hidden dark:block'}/>
                </div>
                <div className={'w-1/2 flex flex-col items-center self-center'}>
                    <h2 className={'font-medium text-2xl !text-left w-full dark:text-primary'}>Hii, I`m</h2>
                    <AnimationText text={'Julio Alfian'}
                                   className={'text-6xl !text-left text-primary'}/>
                    <AnimationText text={'Dwicahya'}
                                   className={'text-6xl !text-left'}/>
                    <p className={'w-full my-4 text-4xl font-medium dark:text-light'}>
                        As Frontend Web Developer
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
        </>
    )
}
