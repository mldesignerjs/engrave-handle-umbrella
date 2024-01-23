'use client'
import Image from 'next/image'
import { engraveFonts } from '@/constants'
import { useState } from 'react'
export default function Engrave() {
    const [name, setName] = useState<string>('Huy Hoàng')
    const [fontSize, setFontSize] = useState<string>('37')
    // Lorem ipsum
    return (
        <main className="p-24">
            <div className="">
                <div className="fixed top-1/4 right-0"></div>
                <div className="pic">
                    <Image
                        src="/g30-3-mau.jpg"
                        width={2000}
                        height={2000}
                        alt={''}
                        className="w-full"
                    />
                    <div className="engraved engrave-1">
                        <span
                            className="engrave cn"
                            style={engraveFonts[10].style}
                        >
                            {name}
                        </span>
                    </div>
                    <div className="engraved engrave-2">
                        <span
                            className="engrave cn"
                            style={engraveFonts[10].style}
                        >
                            {name}
                        </span>
                    </div>
                    <div className="engraved engrave-3">
                        <span
                            className="engrave cn"
                            style={engraveFonts[10].style}
                        >
                            {name}
                        </span>
                    </div>
                </div>
            </div>
        </main>
    )
}
