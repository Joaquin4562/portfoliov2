import React from 'react'

export const AboutCard = ({ title, description, Icon, subDescription, list }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-2">
            <Icon style={{ fontSize: '3rem', color: '#14b8a6' }} className="mb-2 lg:mt-0 mt-5" />
            <div className="text-4xl font-poppins font-bold text-teal-500">
                {title}
            </div>
            <p className='text-lg w-96 text-center mt-2 h-28'>
                {description}
            </p>
            <p className='mt-2 font-bold text-lg font-poppins text-teal-800'>
                {subDescription}
            </p>
            <ul className='grid grid-cols-2 marker:text-teal-500 pt-2'>
                {
                    list.map((value) =>
                        <li key={value} className='pl-5 flex items-center justify-start'>
                            <div className="rounded-full p-1 bg-teal-500 mr-2">
                            </div>
                            <div className="text-md">
                                {value}
                            </div>
                        </li>)
                }
            </ul>
        </div>
    )
}
