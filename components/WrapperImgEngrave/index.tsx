import { Ref } from 'react'
import Image from 'next/image'

const download = require('downloadjs')
import { toPng } from 'html-to-image'

export interface IWrapperImgEngraveProps {
    refDiv: Ref<HTMLDivElement>
    children: React.ReactNode
    src: string
}

export function WrapperImgEngrave(props: IWrapperImgEngraveProps) {
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

    return (
        <>
            <div className="pic" ref={props.refDiv}>
                <Image
                    // ref={props.ref}
                    src={props.src}
                    width={1500}
                    height={2000}
                    alt={''}
                    className="w-full"
                />
                {props.children}
            </div>
        </>
    )
}
