'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { engraveFonts } from '@/constants'
import { useSearchParams } from 'next/navigation'

export default function DetailEngrave() {
    const searchParam = useSearchParams()
    const kindUmbrella: string = searchParam.get('type') || 'g30'
    const indexFont: string = searchParam.get('font') || '0'
    const indexFontInt: number = parseInt(indexFont)
    const text: string = searchParam.get('text') || 'Tên Của Bạn'
    const size: string = searchParam.get('size') || '22'
    const spacing: string = searchParam.get('spacing') || '0'

    const text2: string = searchParam.get('text2') || '0888.888.888'
    const size2: string = searchParam.get('size2') || '22'
    const spacing2: string = searchParam.get('spacing2') || '0'
    const dis: string = searchParam.get('dis') || '0'
    const line: string = searchParam.get('line') || '1'

    const [scale1, setScale1] = useState<number>(100)

    const imageRef1 = useRef(null)

    useEffect(() => {
        const elementImg1: any = imageRef1?.current

        setScale1(elementImg1.width / 1344)
    }, [])

    return (
        <div className="container mx-auto py-10">
            <div className="title text-center text-white relative top-10 z-10">
                <p className="2xl:text-[80px] lg:text-[40px] md:text-[30px] sm:text-[20px] text-[20px] font-bold uppercase">
                    Gentleman
                </p>
                <h2 className="2xl:text-[250px] lg:text-[130px] md:text-[90px] sm:text-[70px] text-[70px] font-bold leading-none -mt-4 lg:-mt-8 md:-mt-6 sm:-mt-4">
                    G30
                </h2>
            </div>
            <div className="2xl:-mt-[300px] xl:-mt-[120px] lg:-mt-[120px] md:-mt-[80px] sm:-mt-[50px] -mt-[50px]">
                <div className="pic">
                    <Image
                        ref={imageRef1}
                        src="/g30-banner.jpg"
                        width={1500}
                        height={2000}
                        alt={''}
                        className="w-full"
                    />
                    <div
                        className="engraved"
                        style={{
                            top: '44.8%',
                            left: '55.74%',
                            transform: `translate(-50%,-50%) rotateX(-46deg) rotateY(0deg) rotateZ(-29deg) scale(${
                                scale1 * 0.68
                            })`,
                        }}
                    >
                        <span
                            className="engraveText cn"
                            style={{
                                fontFamily:
                                    engraveFonts[indexFontInt].style.fontFamily,
                                fontSize: `${size}pt`,
                                letterSpacing: `${spacing}px`,
                            }}
                        >
                            {text}
                        </span>
                        {line === '2' && (
                            <span
                                className="engraveText cn"
                                style={{
                                    fontFamily:
                                        engraveFonts[indexFontInt].style
                                            .fontFamily,
                                    fontSize: `${size2}pt`,
                                    letterSpacing: `${spacing2}px`,
                                    marginTop: `${dis}px`,
                                }}
                            >
                                {text2}
                            </span>
                        )}
                    </div>
                    <div
                        className="engraved"
                        style={{
                            top: '57.15%',
                            left: '22.3%',
                            transform: `translate(-50%,-50%) rotateX(34deg) rotateY(0deg) rotateZ(-115deg) scale(${
                                scale1 * 0.66
                            })`,
                        }}
                    >
                        <span
                            className="engraveText cn"
                            style={{
                                fontFamily:
                                    engraveFonts[indexFontInt].style.fontFamily,
                                fontSize: `${size}pt`,
                                letterSpacing: `${spacing}px`,
                            }}
                        >
                            {text}
                        </span>
                        {line === '2' && (
                            <span
                                className="engraveText cn"
                                style={{
                                    fontFamily:
                                        engraveFonts[indexFontInt].style
                                            .fontFamily,
                                    fontSize: `${size2}pt`,
                                    letterSpacing: `${spacing2}px`,
                                    marginTop: `${dis}px`,
                                }}
                            >
                                {text2}
                            </span>
                        )}
                    </div>
                    <div
                        className="engraved"
                        style={{
                            top: '83%',
                            left: '42.34%',
                            transform: `translate(-50%,-50%) rotateX(41deg) rotateY(-11deg) rotateZ(-23deg) scale(${
                                scale1 * 0.7
                            })`,
                        }}
                    >
                        <span
                            className="engraveText cn"
                            style={{
                                fontFamily:
                                    engraveFonts[indexFontInt].style.fontFamily,
                                fontSize: `${size}pt`,
                                letterSpacing: `${spacing}px`,
                            }}
                        >
                            {text}
                        </span>
                        {line === '2' && (
                            <span
                                className="engraveText cn"
                                style={{
                                    fontFamily:
                                        engraveFonts[indexFontInt].style
                                            .fontFamily,
                                    fontSize: `${size2}pt`,
                                    letterSpacing: `${spacing2}px`,
                                    marginTop: `${dis}px`,
                                }}
                            >
                                {text2}
                            </span>
                        )}
                    </div>
                </div>
                <div className="pic">
                    <Image
                        ref={imageRef1}
                        src="/tay-cam.jpg"
                        width={1500}
                        height={2000}
                        alt={''}
                        className="w-full"
                    />
                    <div
                        className="engraved"
                        style={{
                            top: '24.5%',
                            left: '35%',
                            transform: `translate(-50%,-50%) rotateX(10deg) rotateY(21deg) rotateZ(53deg) scale(${
                                scale1 * 2.3
                            })`,
                        }}
                    >
                        <span
                            className="engraveText cn"
                            style={{
                                fontFamily:
                                    engraveFonts[indexFontInt].style.fontFamily,
                                fontSize: `${size}pt`,
                                letterSpacing: `${spacing}px`,
                            }}
                        >
                            {text}
                        </span>
                        {line === '2' && (
                            <span
                                className="engraveText cn"
                                style={{
                                    fontFamily:
                                        engraveFonts[indexFontInt].style
                                            .fontFamily,
                                    fontSize: `${size2}pt`,
                                    letterSpacing: `${spacing2}px`,
                                    marginTop: `${dis}px`,
                                }}
                            >
                                {text2}
                            </span>
                        )}
                    </div>
                </div>
                <div className="pic">
                    <Image
                        ref={imageRef1}
                        src="/g30-3-loai-go.jpg"
                        width={1500}
                        height={2000}
                        alt={''}
                        className="w-full"
                    />
                    <div
                        className="engraved"
                        style={{
                            top: '12.7%',
                            left: '23%',
                            transform: `translate(-50%,-50%) rotateX(14deg) rotateY(3deg) rotateZ(113deg) scale(${
                                scale1 * 1.5
                            })`,
                        }}
                    >
                        <span
                            className="engraveText cn"
                            style={{
                                fontFamily:
                                    engraveFonts[indexFontInt].style.fontFamily,
                                fontSize: `${size}pt`,
                                letterSpacing: `${spacing}px`,
                            }}
                        >
                            {text}
                        </span>
                        {line === '2' && (
                            <span
                                className="engraveText cn"
                                style={{
                                    fontFamily:
                                        engraveFonts[indexFontInt].style
                                            .fontFamily,
                                    fontSize: `${size2}pt`,
                                    letterSpacing: `${spacing2}px`,
                                    marginTop: `${dis}px`,
                                }}
                            >
                                {text2}
                            </span>
                        )}
                    </div>
                    <div
                        className="engraved"
                        style={{
                            top: '74%',
                            left: '28%',
                            transform: `translate(-50%,-50%) rotateX(15deg) rotateY(6deg) rotateZ(-65deg) scale(${
                                scale1 * 1.5
                            })`,
                        }}
                    >
                        <span
                            className="engraveText tm"
                            style={{
                                fontFamily:
                                    engraveFonts[indexFontInt].style.fontFamily,
                                fontSize: `${size}pt`,
                                letterSpacing: `${spacing}px`,
                            }}
                        >
                            {text}
                        </span>
                        {line === '2' && (
                            <span
                                className="engraveText tm"
                                style={{
                                    fontFamily:
                                        engraveFonts[indexFontInt].style
                                            .fontFamily,
                                    fontSize: `${size2}pt`,
                                    letterSpacing: `${spacing2}px`,
                                    marginTop: `${dis}px`,
                                }}
                            >
                                {text2}
                            </span>
                        )}
                    </div>
                    <div
                        className="engraved"
                        style={{
                            top: '77%',
                            left: '81%',
                            transform: `translate(-50%,-50%) rotateX(15deg) rotateY(6deg) rotateZ(113deg) scale(${
                                scale1 * 1.5
                            })`,
                        }}
                    >
                        <span
                            className="engraveText tm"
                            style={{
                                fontFamily:
                                    engraveFonts[indexFontInt].style.fontFamily,
                                fontSize: `${size}pt`,
                                letterSpacing: `${spacing}px`,
                            }}
                        >
                            {text}
                        </span>
                        {line === '2' && (
                            <span
                                className="engraveText tm"
                                style={{
                                    fontFamily:
                                        engraveFonts[indexFontInt].style
                                            .fontFamily,
                                    fontSize: `${size2}pt`,
                                    letterSpacing: `${spacing2}px`,
                                    marginTop: `${dis}px`,
                                }}
                            >
                                {text2}
                            </span>
                        )}
                    </div>
                </div>
                {[...Array(3)].map((a, i) => (
                    <div className="pic" key={i}>
                        <Image
                            ref={imageRef1}
                            src={`/mau-g30-${i + 1}.jpg`}
                            width={1500}
                            height={2000}
                            alt={''}
                            className="w-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
