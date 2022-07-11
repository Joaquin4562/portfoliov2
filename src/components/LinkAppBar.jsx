import React from 'react'
import flecha from '../assets/icons/flecha.png'

export const LinkAppBar = ({ path, routeName, content, click }) => {
    return (
        <a href={path} onClick={click} className='block mt-4 lg:inline-block lg:mt-0 mr-6 ml-2 transition delay-100 text-teal-800 hover:text-black'>
            <div className="lg:border-t-2 lg:border-black">
                <div className="flex items-center lg:justify-between">
                    <div className='text-lg font-bold mr-3'>
                        {routeName}
                    </div>
                    <img className='w-4 h-4 -rotate-45' src={flecha} alt="x" />
                </div>
                <div className="text-black text-xs">
                    {content}
                </div>
            </div>
        </a>
    )
}
