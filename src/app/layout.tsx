import '../styles/globals.css'
import {Inter} from 'next/font/google'
import Navbar from "@/app/component/molecule/navbar";
import Footer from "@/app/component/molecule/footer";
import Head from "@/app/component/molecule/head";
import NavbarMobile from "@/app/component/molecule/navbar-mobile";

const inter = Inter({subsets: ['latin']})


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <Head/>
        <body className={`${inter.className}`}>
        <NavbarMobile/>
        <Navbar/>
        <main className={'h-auto lg:min-h-screen bg-light dark:bg-dark relative'}>
            <div className={'w-full px-6 md:px-16 lg:px-32 flex'}>
                <main className={'container mx-auto py-10'}>
                    {children}
                </main>
            </div>
        </main>
        <Footer/>
        </body>
        </html>
    )
}
