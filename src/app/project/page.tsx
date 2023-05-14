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
                title: 'Fair Indonesia',
                link: 'https://www.fair-indonesia.com/',
                year: '2023',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac rhoncus dolor, a commodo mauris. Morbi sodales tristique est sed posuere. Aliquam pulvinar commodo velit, ut commodo elit sagittis sed. Phasellus eget interdum ipsum, eu placerat sem. Donec neque erat, rhoncus elementum orci ac, pellentesque interdum ipsum. In nunc velit, pharetra ac ex sed, auctor tincidunt nulla. Vestibulum ut semper erat. In eu finibus ipsum. ',
                type: 'Landing Page and CMS',
                image: '/images/projects/devdreaming.jpg'
            },
            {
                title: 'Maxxi Tani Teknologi',
                link: 'app-cms.maxxitani.id',
                year: '2021',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac rhoncus dolor, a commodo mauris. Morbi sodales tristique est sed posuere. Aliquam pulvinar commodo velit, ut commodo elit sagittis sed. Phasellus eget interdum ipsum, eu placerat sem. Donec neque erat, rhoncus elementum orci ac, pellentesque interdum ipsum. In nunc velit, pharetra ac ex sed, auctor tincidunt nulla. Vestibulum ut semper erat. In eu finibus ipsum. ',
                type: 'CMS Website',
                image: '/images/projects/devdreaming.jpg'
            },
            {
                title: 'Maxxi Agri Indonesia',
                link: 'https://app.back-office.maxxiagri.com',
                year: '2022',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac rhoncus dolor, a commodo mauris. Morbi sodales tristique est sed posuere. Aliquam pulvinar commodo velit, ut commodo elit sagittis sed. Phasellus eget interdum ipsum, eu placerat sem. Donec neque erat, rhoncus elementum orci ac, pellentesque interdum ipsum. In nunc velit, pharetra ac ex sed, auctor tincidunt nulla. Vestibulum ut semper erat. In eu finibus ipsum. ',
                type: 'CMS Website',
                image: '/images/projects/devdreaming.jpg'
            },
            {
                title: 'Ipos International',
                link: 'https://iposinternational.com/',
                year: '2021',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac rhoncus dolor, a commodo mauris. Morbi sodales tristique est sed posuere. Aliquam pulvinar commodo velit, ut commodo elit sagittis sed. Phasellus eget interdum ipsum, eu placerat sem. Donec neque erat, rhoncus elementum orci ac, pellentesque interdum ipsum. In nunc velit, pharetra ac ex sed, auctor tincidunt nulla. Vestibulum ut semper erat. In eu finibus ipsum. ',
                type: 'Website Profile',
                image: '/images/projects/devdreaming.jpg'
            },
            {
                title: 'WeCognition',
                link: 'https://home.wecognition.com',
                year: '2020',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac rhoncus dolor, a commodo mauris. Morbi sodales tristique est sed posuere. Aliquam pulvinar commodo velit, ut commodo elit sagittis sed. Phasellus eget interdum ipsum, eu placerat sem. Donec neque erat, rhoncus elementum orci ac, pellentesque interdum ipsum. In nunc velit, pharetra ac ex sed, auctor tincidunt nulla. Vestibulum ut semper erat. In eu finibus ipsum. ',
                type: 'Landing Page and CMS',
                image: '/images/projects/devdreaming.jpg'
            },
            {
                title: 'Emkay Brewer',
                link: 'https://emkay.id/',
                year: '2020',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac rhoncus dolor, a commodo mauris. Morbi sodales tristique est sed posuere. Aliquam pulvinar commodo velit, ut commodo elit sagittis sed. Phasellus eget interdum ipsum, eu placerat sem. Donec neque erat, rhoncus elementum orci ac, pellentesque interdum ipsum. In nunc velit, pharetra ac ex sed, auctor tincidunt nulla. Vestibulum ut semper erat. In eu finibus ipsum. ',
                type: 'Online Shop',
                image: '/images/projects/devdreaming.jpg'
            },
            {
                title: 'Soramen Singapore',
                link: 'https://www.soramen.com.sg/',
                year: '2020',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac rhoncus dolor, a commodo mauris. Morbi sodales tristique est sed posuere. Aliquam pulvinar commodo velit, ut commodo elit sagittis sed. Phasellus eget interdum ipsum, eu placerat sem. Donec neque erat, rhoncus elementum orci ac, pellentesque interdum ipsum. In nunc velit, pharetra ac ex sed, auctor tincidunt nulla. Vestibulum ut semper erat. In eu finibus ipsum. ',
                type: 'Landing Page',
                image: '/images/projects/devdreaming.jpg'
            },
            {
                title: 'Capitol Singapore',
                link: 'https://capitolsingapore.com/',
                year: '2019',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac rhoncus dolor, a commodo mauris. Morbi sodales tristique est sed posuere. Aliquam pulvinar commodo velit, ut commodo elit sagittis sed. Phasellus eget interdum ipsum, eu placerat sem. Donec neque erat, rhoncus elementum orci ac, pellentesque interdum ipsum. In nunc velit, pharetra ac ex sed, auctor tincidunt nulla. Vestibulum ut semper erat. In eu finibus ipsum. ',
                type: 'Landing Page',
                image: '/images/projects/devdreaming.jpg'
            },
            {
                title: 'MRClinic Tokyo',
                link: 'https://www.mrclinic.tokyo/en/',
                year: '2019',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac rhoncus dolor, a commodo mauris. Morbi sodales tristique est sed posuere. Aliquam pulvinar commodo velit, ut commodo elit sagittis sed. Phasellus eget interdum ipsum, eu placerat sem. Donec neque erat, rhoncus elementum orci ac, pellentesque interdum ipsum. In nunc velit, pharetra ac ex sed, auctor tincidunt nulla. Vestibulum ut semper erat. In eu finibus ipsum. ',
                type: 'Landing Page',
                image: '/images/projects/devdreaming.jpg'
            },
            {
                title: 'SMU Singapore',
                link: 'https://www.smu.edu.sg/',
                year: '2019',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac rhoncus dolor, a commodo mauris. Morbi sodales tristique est sed posuere. Aliquam pulvinar commodo velit, ut commodo elit sagittis sed. Phasellus eget interdum ipsum, eu placerat sem. Donec neque erat, rhoncus elementum orci ac, pellentesque interdum ipsum. In nunc velit, pharetra ac ex sed, auctor tincidunt nulla. Vestibulum ut semper erat. In eu finibus ipsum. ',
                type: 'Landing Page',
                image: '/images/projects/devdreaming.jpg'
            },
            {
                title: 'Asia Commerce',
                link: 'https://app.asiacommerce.net/',
                year: '2018',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac rhoncus dolor, a commodo mauris. Morbi sodales tristique est sed posuere. Aliquam pulvinar commodo velit, ut commodo elit sagittis sed. Phasellus eget interdum ipsum, eu placerat sem. Donec neque erat, rhoncus elementum orci ac, pellentesque interdum ipsum. In nunc velit, pharetra ac ex sed, auctor tincidunt nulla. Vestibulum ut semper erat. In eu finibus ipsum. ',
                type: 'Online Shope and CMS',
                image: '/images/projects/devdreaming.jpg'
            },
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
                <article className={'grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8 relative mt-20'}>
                    {
                        dataProject.map(item => {
                            return (
                                <div className={''} key={item.title}>
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