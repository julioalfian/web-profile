import '../styles/globals.css'
import {Inter} from 'next/font/google'
import Navbar from "@/app/component/molecule/navbar";
import NavbarSosmed from "@/app/component/molecule/navbar-sosmed";
import Footer from "@/app/component/molecule/footer";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Julio Alfian',
    description: 'Web Profile'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body className={`${inter.className} min-h-screen`}>
        <Navbar/>
        <main className="min-h-screen bg-light relative">
            <div className={'w-full px-32 flex'}>
                <NavbarSosmed/>
                <main className="container mx-auto">
                    {children}
                </main>
            </div>
        </main>
        <Footer/>
        </body>
        </html>
    )
}
