'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
const download = require('downloadjs')
import { toPng } from 'html-to-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { TextEngraved } from '@/components/TextEngraved'

export interface IG30Props {}

export function G30(props: IG30Props) {
    const [scale1, setScale1] = useState<number>(100)

    const imageRef1 = useRef(null)

    function handleDownLoadImg(id: number) {
        const element: any = document.getElementById(`pic-${id}`)
        toPng(element)
            .then(function (dataUrl) {
                download(dataUrl, 'my-nason-umbrella.png')
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error)
            })
    }

    useEffect(() => {
        const elementImg1: any = imageRef1?.current
        setScale1(elementImg1.width / 1344)
    }, [])
    return (
        <>
            <div className="pic">
                <span
                    className="cursor-pointer md:text-md text-xs absolute max-sm:top-8 max-sm:left-2 top-16 left-4 z-10 flex max-sm:w-5 max-sm:h-5 w-10 h-10 rounded-full bg-main text-white justify-center items-center"
                    onClick={() => handleDownLoadImg(1)}
                >
                    <FontAwesomeIcon icon={faDownload} />
                </span>
                <div className="" id="pic-1">
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
                        <TextEngraved handle="cn" />
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
                        <TextEngraved handle="cn" />
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
                        <TextEngraved handle="cn" />
                    </div>
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
                    <TextEngraved handle="cn" />
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
                    <TextEngraved handle="cn" />
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
                    <TextEngraved handle="tm" />
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
                    <TextEngraved handle="tm" />
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
        </>
    )
}
