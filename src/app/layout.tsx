import '../styles/globals.css'
import {Inter} from 'next/font/google'
import Navbar from "@/app/component/molecule/navbar";
import NavbarSosmed from "@/app/component/molecule/navbar-sosmed";
import Footer from "@/app/component/molecule/footer";
import Head from "@/app/component/molecule/head";
import Template from "@/app/template";

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
        <Navbar/>
        <main className={'min-h-screen bg-light dark:bg-dark relative'}>
            <div className={'w-full px-32 flex'}>
                <NavbarSosmed/>
                <main className={'container mx-auto py-10'}>
                    <Template>
                        {children}
                    </Template>
                </main>
            </div>
        </main>
        <Footer/>
        </body>
        </html>
    )
}
