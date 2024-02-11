import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        template: '%s | MLD',
        default: "MLD's Website",
    },
    // title: "MLD's Website",
    description: "I'm a designer!",
    // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
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
