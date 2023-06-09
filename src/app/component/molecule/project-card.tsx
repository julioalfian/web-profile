'use client'
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ScheduleIcon from '@mui/icons-material/Schedule';


export interface IProjectCard {
    title: string,
    description: string,
    link: string,
    image: string,
    type: string,
    year: string
}

function ProjectCard(Iprops: IProjectCard) {

    return (
        <article data-aos="zoom-in-up"
                 data-aos-offset="10"
                 data-aos-delay="100"
                 data-aos-duration="1000"
                 className={'group w-full flex flex-col rounded-b-xl lg:rounded-b-2xl  bg-light relative shadow-lg shadow-dark-400/40 dark:border dark:border-light dark:border-2 dark:bg-transparent'}>
            <Link href={Iprops.link}>
                <div className={'overflow-hidden w-full h-full shadow-lg shadow-dark-100/10'}>
                    <Image src={Iprops.image} alt={Iprops.title} width={200} height={200}
                           className={'w-full group-hover:scale-105 duration-1000'} priority
                           sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                    />
                </div>
            </Link>
            <div className={'flex w-full flex-col items-start justify-between p-4 lg:p-6'}>
                <span className={'text-primary font-medium text-md lg:text-xl my-2 lg:my-4'}>{Iprops.type}</span>
                <Link href={Iprops.link} target={'_blank'} className={'hover:underline underline-offset-2'}>
                    <h2 className={'my-2 w-full text-left text-xl lg:text-4xl font-bold text-dark dark:text-light'}>{Iprops.title}</h2>
                </Link>
                <p className={'text-darkGray font-normal lg:font-medium my-2 lg:my-4 text-left dark:text-light line-clamp-3'}>{Iprops.description}</p>
                <div className={'flex justify-between items-center w-full'}>
                    <div className={'flex items-center text-dark'}>
                        <ScheduleIcon color={'secondary'}/>
                        <span className={'text-dark dark:text-light ml-2'}>{Iprops.year}</span>
                    </div>
                    <div className={'flex items-center justify-end'}>
                        <span
                            className={'text-dark dark:text-light mr-2'}>{Math.floor(Math.random() * 9) + 100}</span>
                        <FavoriteBorderIcon color={'primary'}/>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;