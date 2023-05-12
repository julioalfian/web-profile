"use client"
import Image from 'next/image'
import AnimationText from "@/app/component/atom/animation-text";
import Link from "next/link";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TransitionEffect from "@/app/component/atom/transition-effect";
import NavbarSosmed from "@/app/component/molecule/navbar-sosmed";
// @ts-ignore
import Titl from 'react-vanilla-tilt'

export default function Home() {
    return (
        <>
            <TransitionEffect/>
            <div
                className={'flex justify-between items-center text-dark w-full h-full h-auto lg:min-h-screen flex-wrap'}>
                <div className={'w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-start items-center'}>
                    <NavbarSosmed/>
                    <div data-aos="zoom-in-left"
                         data-aos-offset="200"
                         data-aos-delay="2000"
                         data-aos-duration="1000"
                         className={'w-full flex justify-center'}>
                        <Titl className={'titl-card'}
                              options={{scale: 2, speed: 1000, max: 50}}>
                            <Image src={'/images/profile/ava.png'} alt={'profile'} width={'500'}
                                   height={'500'} priority
                                   sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                                   className={'block dark:hidden'}/>
                            <Image src={'/images/profile/ava-dark.png'} alt={'profile'} width={'500'}
                                   height={'500'} priority
                                   sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                                   className={'hidden dark:block'}/>
                        </Titl>
                    </div>
                </div>
                <div className={'w-full lg:w-1/2 flex flex-col items-center self-center'}>
                    <h2 data-aos="fade-down"
                        data-aos-offset="20"
                        data-aos-delay="2100"
                        data-aos-duration="1000"
                        className={'font-medium text-xl lg:text-2xl !text-left w-full dark:text-primary'}>Hii,
                        I&apos;m</h2>

                    <AnimationText text={'Julio Alfian'}
                                   className={'text-4xl lg:text-6xl !text-left text-primary'}/>


                    <AnimationText text={'Dwicahya'}
                                   className={'text-4xl lg:text-6xl !text-left'}/>

                    <p data-aos="fade-right"
                       data-aos-offset="20"
                       data-aos-delay="2800"
                       data-aos-duration="1000"
                       className={'w-full my-2 lg:my-4 text-xl lg:text-4xl font-medium dark:text-light'}>
                        As Frontend Web Developer
                    </p>
                    <div className={'flex items-center self-start mt-2'}>
                        <div data-aos="fade-down-right"
                             data-aos-offset="20"
                             data-aos-delay="3000"
                             data-aos-duration="1000">
                            <Link
                                href={'https://drive.google.com/file/d/1Duuhf-V95-Oy8GKZpW3xUwsS7J6RUj5v/view?usp=share_link'}
                                target={'_blank'}
                                className={'flex items-center bg-dark text-light p-2 lg:p-2.5 px-4 lg:px-6 rounded-lg text-sm lg:text-lg font-semibold ' +
                                    'hover:bg-light hover:text-dark border-2 boder-solid border-transparent hover:border-dark dark:border-light dark:bg-light dark:text-dark'}
                                download={true}
                            >Resume <CloudDownloadIcon className={'ml-2'}/></Link>
                        </div>
                        <div data-aos="fade-down-left"
                             data-aos-offset="10"
                             data-aos-delay="3000"
                             data-aos-duration="1000">
                            <Link
                                href={'mailto:julioixc@gmail.com'}
                                target={'_blank'}
                                className={'ml-4 flex items-center bg-light text-primary p-2 lg:p-2.5 px-4 lg:px-6 rounded-lg text-sm lg:text-lg font-semibold ' +
                                    'hover:bg-primary hover:text-light border-2 boder-solid border-primary hover:border-tranparent dark:bg-transparent dark:border-transparent'}
                                download={true}
                            >Contact <AlternateEmailIcon className={'ml-2'}/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
