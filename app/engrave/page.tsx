'use client'
import Image from 'next/image'
import { engraveFonts } from '@/constants'
import { useState } from 'react'
export default function Engrave() {
    const [name, setName] = useState<string>('Huy Hoàng')
    const [fontSize, setFontSize] = useState<string>('24')
    const [letterSpacing, setLetterSpacing] = useState<string>('0')
    const [fontFamily, setFontFamily] = useState<string>(
        engraveFonts[0].style.fontFamily,
    )
    // const [fontSize, setFontSize] = useState<string>('37')
    // Lorem ipsum

    function handleChangeName(value: string) {
        setName(value)
    }

    function handleChangeFontSize(value: string) {
        setFontSize(value)
    }

    function handleChangeLetterSpacing(value: string) {
        setLetterSpacing(value)
    }

    function handleChangeFontFamily(value: string) {
        const idFont = parseInt(value)
        setFontFamily(engraveFonts[idFont].style.fontFamily)
    }

    return (
        <main className="p-24">
            <div className="">
                <div className="p-4 fixed top-1/4 right-0 z-10 bg-white shadow">
                    <h2 className="text-main font-bold">Tùy chỉnh</h2>
                    <div className="mt-3">
                        <p className="text-sm">Tên:</p>
                        <input
                            type="text"
                            name="contentEngrave"
                            className="w-full py-2 px-2 rounded border bg-gray-100 text-main font-bold"
                            placeholder="Nhập nội dung bạn muốn khắc"
                            onChange={(e) => handleChangeName(e.target.value)}
                        />
                    </div>
                    <div className="mt-3 relative">
                        <p className="text-sm">Kích cỡ:</p>
                        <span className="text-sm font-bold text-main absolute left-1/2 top-0 -translate-x-1/2">
                            {fontSize}
                        </span>
                        <input
                            type="range"
                            name="sizeEngrave"
                            className="rounded w-full mt-2"
                            placeholder=""
                            value={fontSize}
                            min={10}
                            max={50}
                            onChange={(e) =>
                                handleChangeFontSize(e.target.value)
                            }
                        />
                    </div>
                    <div className="mt-3 relative">
                        <p className="text-sm">Khoảng cách:</p>
                        <span className="text-sm font-bold text-main absolute left-1/2 top-0 -translate-x-1/2">
                            {letterSpacing}
                        </span>
                        <input
                            type="range"
                            name="sizeEngrave"
                            className="rounded w-full mt-2"
                            placeholder=""
                            value={letterSpacing}
                            min={0}
                            max={10}
                            onChange={(e) =>
                                handleChangeLetterSpacing(e.target.value)
                            }
                        />
                    </div>
                    <div className="mt-3">
                        <span className="text-sm">Font:</span>
                        <select
                            name="fontFamily"
                            className="text-lg px-4"
                            style={{ fontFamily: fontFamily }}
                            onChange={(e) =>
                                handleChangeFontFamily(e.target.value)
                            }
                        >
                            {engraveFonts.map((fonts, index) => (
                                <option
                                    key={index}
                                    value={index}
                                    className="py-2"
                                    style={fonts.style}
                                >
                                    {index + 1} - {name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="pic">
                    <Image
                        src="/g30-3-mau.jpg"
                        width={2000}
                        height={2000}
                        alt={''}
                        className="w-full"
                    />
                    {[...Array(3)].map((a, i) => (
                        <div key={i} className={`engraved engrave-${i + 1}`}>
                            <span
                                className="engraveText cn"
                                style={{
                                    fontFamily: fontFamily,
                                    fontSize: `${fontSize}px`,
                                    letterSpacing: `${letterSpacing}px`,
                                }}
                            >
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
