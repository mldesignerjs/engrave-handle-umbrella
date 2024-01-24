'use client'
import Link from 'next/link'
import { NavLinks, listSocialMediaLink, nameSite } from '@/constants'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export interface HeaderProps {}

function Header(props: HeaderProps) {
    const pathname = usePathname()
    const [isCloseMenu, setIsCloseMenu] = useState<boolean>(true)
    function handleCloseMenu() {
        setIsCloseMenu(!isCloseMenu)
    }

    return (
        <header className="w-full fixed bg-white border-b border-gray-100 z-50">
            <div className="container mx-auto py-4">
                <h2>Cảm ơn bạn đã lựa chọn chúng tôi.</h2>
            </div>
        </header>
    )
}

export default Header
