import Image from 'next/image'
const download = require('downloadjs')
import { toPng } from 'html-to-image'

export interface IWrapperImgEngraveProps {
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
            <div className="pic">
                <Image
                    src={props.src}
                    width={1500}
                    height={2000}
                    alt={''}
                    priority={true}
                    className="w-full"
                />
                {props.children}
            </div>
        </>
    )
}
