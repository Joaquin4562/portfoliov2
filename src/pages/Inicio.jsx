import React from 'react'
import { SocialButton } from '../components/SocialButton'
import { BsGithub, BsLinkedin, BsInstagram, BsStackOverflow } from 'react-icons/bs'
import {links} from '../assets/data/links'
import me from '../assets/me.png'
export const Inicio = () => {
    return (
        <section id='inicio' className="flex flex-nowrap items-center lg:justify-center lg:h-screen h-middle lg:pb-36 pb-24">
            <div className="flex items-center justify-items-center flex-col">
                <div className="flex mb-10">
                    <SocialButton link={links['linkedIn']} Icon={BsLinkedin} />
                    <SocialButton link={links['instagram']} Icon={BsInstagram} />
                    <SocialButton link={links['stackoverflow']} Icon={BsStackOverflow} />
                    <SocialButton link={links['github']} Icon={BsGithub} />
                </div>
                <p className="text-sm text-left">Desarrollador jr</p>
                <p className='text-4xl font-bold font-poppins text-center'>¡Hola!, soy <span className='text-teal-500'>Gerardo Joaquin</span></p>
                <p className='text-md mt-2 text-center px-7 font-poppins'>Soy un desarrollador front-end con experiencia en el desarrollo web y móvil me gusta trabajar en equipo y aportar conocimientos.</p>
            </div>
            <div className="pr-20 lg:block hidden">
                <img src={me} alt="imagen me" className='rounded-full' />
            </div>
        </section>
    )
}
