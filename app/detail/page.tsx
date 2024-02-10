'use client'
import { umbrellas } from '@/constants'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function DetailEngrave() {
    const searchParam = useSearchParams()
    const kindUmbrella: string = searchParam.get('type') || 'g30'
    const [umbrellaPage, setUmbrellaPage] = useState<React.ReactElement>(<></>)

    useEffect(() => {
        umbrellas.find((umbrella) => {
            setUmbrellaPage(umbrella.detailPage)
            return umbrella.sku === kindUmbrella
        })
    }, [])

    return (
        <div className="container mx-auto py-10">
            <div className="mt-8">{umbrellaPage}</div>
        </div>
    )
}
