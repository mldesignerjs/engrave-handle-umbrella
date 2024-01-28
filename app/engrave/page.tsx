'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { engraveFonts, optionFonts } from '@/constants'
import Modal from '@/components/Modal'
import Select from '@/components/Select'

export default function Engrave() {
    const [name, setName] = useState<string>('Huy Hoàng')
    const [fontSize, setFontSize] = useState<string>('24')
    const [letterSpacing, setLetterSpacing] = useState<string>('0')
    const [fontFamily, setFontFamily] = useState<string>(
        engraveFonts[0].style.fontFamily,
    )

    const [scale1, setScale1] = useState<number>(100)
    const [selectedOption, setSelectedOption] = useState<optionFonts>({
        value: engraveFonts[0],
        label: `1 - ${name}`,
    })

    const fontsArray: optionFonts[] = engraveFonts.map((font, index) => ({
        value: font,
        label: `${index + 1} - ${name}`,
    }))

    const [fonts, setFonts] = useState<optionFonts[]>(fontsArray)

    const imageRef1 = useRef(null)
    // const [fontSize, setFontSize] = useState<string>('37')

    function handleChangeName(value: string) {
        setName(value)
        const Fontss: optionFonts[] = engraveFonts.map((font, index) => ({
            value: font,
            label: `${index + 1} - ${value}`,
        }))

        console.log(Fontss)
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

    const handleSelectChange = (option: optionFonts) => {
        setSelectedOption(option)
    }

    useEffect(() => {
        const elementImg1: any = imageRef1?.current

        setScale1((elementImg1.width / 1344) * 100)
    }, [])

    return (
        <div className="container mx-auto py-10">
            <Modal>
                <div className="p-4">
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
                        <Select
                            options={fonts}
                            defaultObject={selectedOption}
                            onChange={handleSelectChange}
                        />
                        {/* <select
                            name="fontFamily"
                            className="text-lg px-4"
                            style={{ fontFamily: fontFamily }}
                            onChange={(e) =>
                                handleChangeFontFamily(e.target.value)
                            }
                        >
                            {engraveFonts.map((font, index) => (
                                <option
                                    key={index}
                                    value={index}
                                    className="py-2"
                                    style={font.style}
                                >
                                    {index + 1} - {name}
                                </option>
                            ))}
                        </select> */}
                    </div>
                </div>
            </Modal>

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
                            width: '310px',
                            height: '77.5px',
                            lineHeight: '77.5px',
                            top: '44.8%',
                            left: '55.74%',
                            transform: `translate(-50%,-50%) rotateX(-46deg) rotateY(0deg) rotateZ(-29deg) scale(${scale1}%)`,
                        }}
                    >
                        <span
                            className="engraveText cn"
                            style={{
                                fontFamily:
                                    selectedOption.value.style.fontFamily,
                                fontSize: `${fontSize}pt`,
                                letterSpacing: `${letterSpacing}px`,
                                transform: 'scale(68%)',
                            }}
                        >
                            {name}
                        </span>
                    </div>
                    <div
                        className="engraved engrave-2"
                        style={{
                            width: '296px',
                            height: '74px',
                            lineHeight: '74px',
                            top: '57.15%',
                            left: '22.3%',
                            transform: `translate(-50%,-50%) rotateX(34deg) rotateY(0deg) rotateZ(-115deg) scale(${scale1}%)`,
                        }}
                    >
                        <span
                            className="engraveText cn"
                            style={{
                                fontFamily:
                                    selectedOption.value.style.fontFamily,
                                fontSize: `${fontSize}pt`,
                                letterSpacing: `${letterSpacing}px`,
                                transform: 'scale(66%)',
                            }}
                        >
                            {name}
                        </span>
                    </div>
                    <div
                        className="engraved"
                        style={{
                            width: '324px',
                            height: '81px',
                            lineHeight: '81px',
                            top: '83%',
                            left: '42.34%',
                            transform: `translate(-50%,-50%) rotateX(41deg) rotateY(-11deg) rotateZ(-23deg) scale(${scale1}%)`,
                        }}
                    >
                        <span
                            className="engraveText cn"
                            style={{
                                fontFamily:
                                    selectedOption.value.style.fontFamily,
                                fontSize: `${fontSize}pt`,
                                letterSpacing: `${letterSpacing}px`,
                                transform: 'scale(70%)',
                            }}
                        >
                            {name}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
