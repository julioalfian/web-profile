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
        <article
            className={'w-full flex flex-col rounded-2xl bg-light p-6 relative shadow-lg shadow-dark-400/40 dark:border dark:border-light dark:border-2 dark:bg-transparent'}>
            <Link href={Iprops.link}>
                <Image src={Iprops.image} alt={Iprops.title} width={200} height={200}
                       className={'w-full rounded-2xl'} priority
                       sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"/>
            </Link>
            <div className={'flex w-full flex-col items-start justify-between'}>
                <span className={'text-primary font-medium text-xl my-4'}>{Iprops.type}</span>
                <Link href={Iprops.link} target={'_blank'} className={'hover:underline underline-offset-2'}>
                    <h2 className={'my-2 w-full text-left text-4xl font-bold text-dark dark:text-light'}>{Iprops.title}</h2>
                </Link>
                <p className={'text-darkGray font-medium my-4 text-left dark:text-light'}>{Iprops.description}</p>
                <div className={'flex justify-between items-center w-full'}>
                    <div className={'flex items-center text-dark'}>
                        <ScheduleIcon color={'inherit'}/>
                        <span className={'text-dark ml-2'}>{Iprops.year}</span>
                    </div>
                    <div className={'flex items-center justify-end'}>
                        <span className={'text-dark mr-2'}>{Math.floor(Math.random() * 6) + 1}</span>
                        <FavoriteBorderIcon color={'primary'}/>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;