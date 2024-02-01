'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useQueryState } from 'nuqs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import {
    engraveFonts,
    kindHandle,
    umbrellas,
    handleO,
    umbrellaO,
} from '@/constants'

import { EditContent } from './EditContent'
import Modal from '@/components/Modal'
import { useSearchParams } from 'next/navigation'

export default function Home() {
    const searchParam = useSearchParams()
    const [name, setName] = useQueryState('name')
    const [type, setType] = useQueryState('type')
    const [size, setSize] = useQueryState('size')
    const [spacing, setSpacing] = useQueryState('spacing')

    const kindUmbrella: string = searchParam.get('type') || 'g30'
    const getName: string = searchParam.get('name') || 'Tên Của Bạn'
    const indexFont: string = searchParam.get('font') || '0'
    const indexFontInt: number = parseInt(indexFont)
    const getSize: string = searchParam.get('size') || '22'
    const getSpacing: string = searchParam.get('spacing') || '0'

    const [lineNumber, setLineNumber] = useState<string>('1')
    const [lineHeight, setLineHeight] = useState<string>('0')
    const [currentUmbrella, setCurrentUmbrella] = useState<umbrellaO>(
        umbrellas[0],
    )
    const [handle, setHandle] = useState<handleO>(umbrellas[0].handle[0])

    const [text1, setText1] = useState<string>('Tên Của Bạn')
    const [fontSize1, setFontSize1] = useState<string>('22')
    const [letterSpacing1, setLetterSpacing1] = useState<string>('0')

    const [text2, setText2] = useState<string>('0888.888.888')
    const [fontSize2, setFontSize2] = useState<string>('22')
    const [letterSpacing2, setLetterSpacing2] = useState<string>('0')

    function handleChangeLineNumber(value: string) {
        setLineNumber(value)
    }

    function handleChangeLineHeight(value: string) {
        setLineHeight(value)
    }

    function handleChangeContent1(value: string) {
        setText1(value)
        setName(value)
    }

    function handleChangeFontSize1(value: string) {
        setFontSize1(value)
        setSize(value)
    }

    function handleChangeLetterSpacing1(value: string) {
        setLetterSpacing1(value)
        setSpacing(value)
    }

    function handleChangeContent2(value: string) {
        setText2(value)
    }

    function handleChangeFontSize2(value: string) {
        setFontSize2(value)
    }

    function handleChangeLetterSpacing2(value: string) {
        setLetterSpacing2(value)
    }

    function handleChangeUmbrella(value: string) {
        const index: number = Number(value)
        let nextUmbrella: any = umbrellas.find(
            (umbrella) => umbrella.id === index,
        )
        setCurrentUmbrella(nextUmbrella)
        setHandle(nextUmbrella.handle[0])
    }

    function handleChangeKindWood(value: string) {
        const nextHandle: any = currentUmbrella?.handle.find(
            (umbrella) => umbrella.value === value,
        )
        setHandle(nextHandle)
    }

    return (
        <div className="lg:px-24 max-lg:px-4 lg:pt-20 max-lg:pt-20 container mx-auto">
            <h2 className="text-center text-xl" style={engraveFonts[10].style}>
                Hãy chọn font, kích cỡ chữ để khắc tên lên tay cầm ô dù
            </h2>
            <Modal>
                <div className="p-4">
                    <p className="pr-6">Số dòng chữ:</p>
                    <div className="flex items-center my-4">
                        <label
                            className="cursor-pointer mr-6"
                            htmlFor="lineNumber1"
                        >
                            <input
                                type="radio"
                                className="peer sr-only"
                                name="lineNumber"
                                id="lineNumber1"
                                value="1"
                                checked={lineNumber === '1'}
                                onChange={(e) =>
                                    handleChangeLineNumber(e.target.value)
                                }
                            />
                            <div className="w-32 max-w-xl rounded-md bg-white p-2 text-gray-300 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-blue-600 peer-checked:ring-blue-400 peer-checked:ring-offset-0">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-semibold uppercase text-gray-500">
                                            1 dòng
                                        </p>
                                        <FontAwesomeIcon
                                            icon={faCircleCheck}
                                            className="text-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </label>
                        <label className="cursor-pointer" htmlFor="lineNumber2">
                            <input
                                type="radio"
                                className="peer sr-only"
                                name="lineNumber"
                                id="lineNumber2"
                                value="2"
                                checked={lineNumber === '2'}
                                onChange={(e) =>
                                    handleChangeLineNumber(e.target.value)
                                }
                            />
                            <div className="w-32 max-w-xl rounded-md bg-white p-2 text-gray-300 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-blue-600 peer-checked:ring-blue-400 peer-checked:ring-offset-0">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-semibold uppercase text-gray-500">
                                            2 dòng
                                        </p>
                                        <FontAwesomeIcon
                                            icon={faCircleCheck}
                                            className="text-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="flex items-center border-t-gray-300 border-t">
                        <select
                            className="py-2 mr-4 rounded"
                            id="umbrella"
                            name="umbrella"
                            value={currentUmbrella.id}
                            onChange={(e) =>
                                handleChangeUmbrella(e.target.value)
                            }
                        >
                            {umbrellas.map((umbrella) => (
                                <option key={umbrella.id} value={umbrella.id}>
                                    {umbrella.name}
                                </option>
                            ))}
                        </select>
                        <select
                            className="py-2 rounded"
                            id="handle"
                            name="handle"
                            value={handle?.value}
                            onChange={(e) =>
                                handleChangeKindWood(e.target.value)
                            }
                        >
                            {currentUmbrella.handle.map((handle) => (
                                <option key={handle.id} value={handle.value}>
                                    {
                                        kindHandle.find(
                                            (wood) =>
                                                wood.value === handle.value,
                                        )?.name
                                    }
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="border-t-gray-300 py-4 border-t">
                        {lineNumber === '2' && (
                            <p className="font-bold text-center">Dòng 1</p>
                        )}
                        <EditContent
                            text={text1}
                            fontSize={fontSize1}
                            letterSpacing={letterSpacing1}
                            onChangeContent={handleChangeContent1}
                            onChangeFontSize={handleChangeFontSize1}
                            onChangeLetterSpacing={handleChangeLetterSpacing1}
                        />
                    </div>
                    {lineNumber === '2' && (
                        <>
                            <div className="border-t-gray-300 py-4 border-t">
                                <p className="font-bold text-center">Dòng 2</p>
                                <EditContent
                                    text={text2}
                                    fontSize={fontSize2}
                                    letterSpacing={letterSpacing2}
                                    onChangeContent={handleChangeContent2}
                                    onChangeFontSize={handleChangeFontSize2}
                                    onChangeLetterSpacing={
                                        handleChangeLetterSpacing2
                                    }
                                />
                            </div>
                            <div className="border-t-gray-300 border-t">
                                <div className="py-2 relative">
                                    <label
                                        className="pr-6 block"
                                        htmlFor="letterSpacing"
                                    >
                                        Khoảng cách 2 dòng:
                                    </label>
                                    <span className="font-bold text-main absolute left-1/2 -translate-x-1/2">
                                        {lineHeight}
                                    </span>
                                    <input
                                        type="range"
                                        name="letterSpacing"
                                        className="rounded w-full mt-6"
                                        placeholder=""
                                        value={lineHeight}
                                        min={-20}
                                        max={20}
                                        onChange={(e) =>
                                            handleChangeLineHeight(
                                                e.target.value,
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </Modal>
            <div className="mt-6">
                {engraveFonts.map((font, key) => (
                    <div
                        key={key}
                        style={font.style}
                        className="w-full overflow-hidden justify-center pb-6 relative"
                    >
                        <span className="max-sm:text-sm text-xl absolute max-sm:top-2 max-sm:left-2 top-4 left-4 z-10 flex max-sm:w-5 max-sm:h-5 w-10 h-10 rounded-full bg-main text-white justify-center items-center">
                            {key + 1}
                        </span>
                        <div className="flex items-center w-full overflow-hidden text-center leading-normal">
                            <Link
                                target="_blank"
                                href={{
                                    pathname: '/detail',
                                    query: {
                                        type: currentUmbrella.sku,
                                        text: text1,
                                        font: key,
                                        size: fontSize1,
                                        spacing: letterSpacing1,
                                    },
                                }}
                            >
                                <div className="relative">
                                    <img
                                        src={handle.urlImg}
                                        alt=""
                                        className="handle-image"
                                    />
                                    <div className="content">
                                        <span
                                            className={`engrave leading-none block ${handle.value}`}
                                            style={{
                                                width: `${currentUmbrella.sizeHandle}px`,
                                                letterSpacing: `${letterSpacing1}px`,
                                                fontSize: `${fontSize1}pt`,
                                            }}
                                        >
                                            {text1}
                                        </span>
                                        {lineNumber === '2' && (
                                            <span
                                                className={`engrave ${handle.value}`}
                                                style={{
                                                    width: `${currentUmbrella.sizeHandle}px`,
                                                    letterSpacing: `${letterSpacing2}px`,
                                                    fontSize: `${fontSize2}pt`,
                                                    marginTop: `${lineHeight}px`,
                                                }}
                                            >
                                                {text2}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
