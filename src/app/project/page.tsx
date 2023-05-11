"use client"
import AnimationText from "@/app/component/atom/animation-text";
import {useEffect, useState} from "react";
import ProjectCard, {IProjectCard} from "@/app/component/molecule/project-card";
import TransitionEffect from "@/app/component/atom/transition-effect";

export default function Page() {
    const [dataProject, setDataProject] = useState<IProjectCard[]>([])
    useEffect(() => {
        setDataProject([
            {
                title: 'CMS Maxxi Tani Teknologi',
                link: 'app-cms.maxxitani.id',
                year: '2021',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac rhoncus dolor, a commodo mauris. Morbi sodales tristique est sed posuere. Aliquam pulvinar commodo velit, ut commodo elit sagittis sed. Phasellus eget interdum ipsum, eu placerat sem. Donec neque erat, rhoncus elementum orci ac, pellentesque interdum ipsum. In nunc velit, pharetra ac ex sed, auctor tincidunt nulla. Vestibulum ut semper erat. In eu finibus ipsum. ',
                type: 'Website',
                image: '/images/projects/devdreaming.jpg'
            },
            {
                title: 'Back Office Maxxi Agri Indonesia',
                link: 'app-cms.maxxitani.id',
                year: '2021',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac rhoncus dolor, a commodo mauris. Morbi sodales tristique est sed posuere. Aliquam pulvinar commodo velit, ut commodo elit sagittis sed. Phasellus eget interdum ipsum, eu placerat sem. Donec neque erat, rhoncus elementum orci ac, pellentesque interdum ipsum. In nunc velit, pharetra ac ex sed, auctor tincidunt nulla. Vestibulum ut semper erat. In eu finibus ipsum. ',
                type: 'Website',
                image: '/images/projects/devdreaming.jpg'
            },
            {
                title: 'Fair Indonesia',
                link: 'app-cms.maxxitani.id',
                year: '2021',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac rhoncus dolor, a commodo mauris. Morbi sodales tristique est sed posuere. Aliquam pulvinar commodo velit, ut commodo elit sagittis sed. Phasellus eget interdum ipsum, eu placerat sem. Donec neque erat, rhoncus elementum orci ac, pellentesque interdum ipsum. In nunc velit, pharetra ac ex sed, auctor tincidunt nulla. Vestibulum ut semper erat. In eu finibus ipsum. ',
                type: 'Website',
                image: '/images/projects/devdreaming.jpg'
            },
            {
                title: 'Ipos International',
                link: 'app-cms.maxxitani.id',
                year: '2021',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac rhoncus dolor, a commodo mauris. Morbi sodales tristique est sed posuere. Aliquam pulvinar commodo velit, ut commodo elit sagittis sed. Phasellus eget interdum ipsum, eu placerat sem. Donec neque erat, rhoncus elementum orci ac, pellentesque interdum ipsum. In nunc velit, pharetra ac ex sed, auctor tincidunt nulla. Vestibulum ut semper erat. In eu finibus ipsum. ',
                type: 'Website',
                image: '/images/projects/devdreaming.jpg'
            }
        ])
    }, [])
    return (
        <>
            <TransitionEffect/>
            <div className={'container mx-auto'}>
                <div className={'w-full lg:w-1/2 mx-auto'}>
                    <AnimationText text={'Latest Projects'}
                                   className={'text-4xl lg:text-6xl !text-center'}/>
                </div>
                <article className={'columns-1 lg:columns-2 relative py-8 mt-20'}>
                    {
                        dataProject.map(item => {
                            return (
                                <div className={'w-full mb-16 px-8'} key={item.title}>
                                    <ProjectCard title={item.title} description={item.description} link={item.link}
                                                 image={item.image} type={item.type} year={item.year}/>
                                </div>
                            )
                        })
                    }
                </article>
            </div>
        </>
    )
}