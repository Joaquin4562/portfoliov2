import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonAppBarCustom = ({name}) => {
    return (
        <Link
        to={'/files/cv.pdf'}
        target= "_blank"
        className='transition-all delay-100 inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-teal-500 hover:text-white hover:bg-teal-500 mt-4 lg:mt-0'>
            {name}
        </Link>
    )
}