'use client'
import { useEffect, useRef, useState } from 'react'
import { TextEngraved } from '@/components/TextEngraved'
import { WrapperImgEngrave } from '@/components/WrapperImgEngrave'
export interface IChagoiProps {}

export function Chagoi(props: IChagoiProps) {
    const [scale1, setScale1] = useState<number>(100)

    const imageRef1 = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const elementImg1: any = imageRef1?.current
        setScale1(elementImg1.offsetWidth / 1344)
    }, [])

    return (
        <>
            <WrapperImgEngrave refDiv={imageRef1} src="/aoc-5-colors.jpg">
                <div
                    className="engraved"
                    style={{
                        top: '50.8%',
                        left: '10.5%',
                        transform: `translate(-50%,-50%) rotateX(0deg) rotateY(0deg) rotateZ(90deg) scale(${
                            scale1 * 0.7
                        })`,
                    }}
                >
                    <TextEngraved handle="tm" />
                </div>
                <div
                    className="engraved oac"
                    style={{
                        top: '50.8%',
                        left: '31%',
                        transform: `translate(-50%,-50%) rotateX(0deg) rotateY(0deg) rotateZ(90deg) scale(${
                            scale1 * 0.7
                        })`,
                    }}
                >
                    <TextEngraved handle="tm" />
                </div>
                <div
                    className="engraved oac"
                    style={{
                        top: '50.8%',
                        left: '51%',
                        transform: `translate(-50%,-50%) rotateX(0deg) rotateY(0deg) rotateZ(90deg) scale(${
                            scale1 * 0.7
                        })`,
                    }}
                >
                    <TextEngraved handle="tm" />
                </div>
                <div
                    className="engraved oac"
                    style={{
                        top: '50.8%',
                        left: '71.3%',
                        transform: `translate(-50%,-50%) rotateX(0deg) rotateY(0deg) rotateZ(90deg) scale(${
                            scale1 * 0.7
                        })`,
                    }}
                >
                    <TextEngraved handle="tm" />
                </div>
                <div
                    className="engraved oac"
                    style={{
                        top: '50.8%',
                        left: '91%',
                        transform: `translate(-50%,-50%) rotateX(0deg) rotateY(0deg) rotateZ(90deg) scale(${
                            scale1 * 0.7
                        })`,
                    }}
                >
                    <TextEngraved handle="tm" />
                </div>
            </WrapperImgEngrave>
            <WrapperImgEngrave src="/aoc-in-box.jpg" refDiv={imageRef1}>
                <div
                    className="engraved oac"
                    style={{
                        top: '75.4%',
                        left: '31.2%',
                        transform: `translate(-50%,-50%) rotateX(0deg) rotateY(0deg) rotateZ(-47deg) scale(${
                            scale1 * 1.04
                        })`,
                    }}
                >
                    <TextEngraved handle="tm" />
                </div>
            </WrapperImgEngrave>
            <WrapperImgEngrave src="/aoc-handle.jpg" refDiv={imageRef1}>
                <div
                    className="engraved oac"
                    style={{
                        top: '62.4%',
                        left: '59.4%',
                        transform: `translate(-50%,-50%) rotateX(12deg) rotateY(-12deg) rotateZ(-108deg) scale(${
                            scale1 * 2.06
                        })`,
                    }}
                >
                    <TextEngraved handle="tm" />
                </div>
            </WrapperImgEngrave>
            <WrapperImgEngrave src="/aoc-khong-trung.jpg" refDiv={imageRef1}>
                <div
                    className="engraved oac"
                    style={{
                        top: '62%',
                        left: '50.25%',
                        transform: `translate(-50%,-50%) rotateX(0deg) rotateY(0deg) rotateZ(-90deg) scale(${
                            scale1 * 0.8
                        })`,
                    }}
                >
                    <TextEngraved handle="tm" />
                </div>
            </WrapperImgEngrave>
            <WrapperImgEngrave src="/aoc-on-floor.jpg" refDiv={imageRef1}>
                <div
                    className="engraved oac"
                    style={{
                        top: '36.05%',
                        left: '50.25%',
                        transform: `translate(-50%,-50%) rotateX(0deg) rotateY(0deg) rotateZ(90deg) scale(${
                            scale1 * 0.78
                        })`,
                    }}
                >
                    <TextEngraved handle="tm" />
                </div>
            </WrapperImgEngrave>
        </>
    )
}
