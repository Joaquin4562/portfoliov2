import React from 'react'

export const SocialButton = ({ link, Icon }) => {
    return (
        <a 
        href={link} 
        rel='noreferrer' 
        target="_blank" 
        className="bg-white rounded-full p-6 mx-2 shadow-lg hover:bg-teal-300 transition-all delay-50"
        >
            <Icon style={{color: '#0c0d0d', fontSize: '21px'}} />
        </a>
    )
}
