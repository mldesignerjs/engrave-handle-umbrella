import Image from 'next/image'
import { engraveFonts } from '@/constants'
export default function Engrave() {
    return (
        <main className="p-24">
            <h2 className="text-center text-5xl py-10">Engrave page</h2>
            <div className="pic">
                <Image
                    src="/g30-3-mau.jpg"
                    width={2000}
                    height={2000}
                    alt={''}
                    className="w-full"
                />
                <div className="engraveed engrave-1">
                    <span className="engrave cn" style={engraveFonts[10].style}>
                        Lê Đức Mạnh
                    </span>
                </div>
                <div className="engraveed engrave-2">
                    <span className="engrave cn" style={engraveFonts[10].style}>
                        Lê Đức Mạnh
                    </span>
                </div>
                <div className="engraveed engrave-3">
                    <span className="engrave cn" style={engraveFonts[10].style}>
                        Lê Đức Mạnh
                    </span>
                </div>
            </div>
        </main>
    )
}
