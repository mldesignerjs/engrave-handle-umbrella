'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import { faCircleXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export interface ModalProps {
    children: React.ReactNode
}

function Modal(props: ModalProps) {
    const [showEditMode, setShowEditMode] = useState<boolean>(true)

    function handleShowEditMode() {
        setShowEditMode(!showEditMode)
    }
    return (
        <>
            <button
                className="fixed top-[18%] right-0 z-30 w-[50px] h-[50px] bg-white rounded border text-xl"
                onClick={handleShowEditMode}
            >
                {showEditMode ? (
                    <FontAwesomeIcon
                        className="text-red-400"
                        icon={faCircleXmark}
                    />
                ) : (
                    <FontAwesomeIcon
                        className="text-blue-400"
                        icon={faPenToSquare}
                    />
                )}
            </button>
            <div
                className="fixed top-[18%] right-0 z-20 overflow-y-scroll transition-all rounded bg-white shadow border max-h-[50%]"
                style={{ width: `${showEditMode ? '350px' : '0'}` }}
            >
                {props.children}
            </div>
        </>
    )
}

export default Modal
