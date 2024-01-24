import './globals.css'
import { Inter } from 'next/font/google'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { log } from 'console'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "MLD's Website",
    description: "I'm a designer!",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-gray-200">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
