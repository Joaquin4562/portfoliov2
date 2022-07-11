import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsStackOverflow } from 'react-icons/bs'
import { links } from '../assets/data/links'
import { SocialButton } from '../components/SocialButton'

export const Contact = () => {
    return (
        <section id='contact' className='h-auto bg-teal-500 flex flex-col p-10 justify-center items-center mt-10'>
            <div className="text-white text-5xl font-poppins font-bold mb-10">
                Contacto
            </div>
            <div className="w-full max-w-lg">
                <form className="bg-white shadow-lg rounded px-6 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Correo
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="correo" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Nombre completo
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder='Nombre completo' />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Num. Telefono
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder='Número de telefono' />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Mensaje
                        </label>
                        <textarea className="h-32 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline max-h-32 " placeholder='Mensaje...' />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex justify-center items-center pt-3">
                <SocialButton link={links['linkedIn']} Icon={BsLinkedin} />
                <SocialButton link={links['instagram']} Icon={BsInstagram} />
                <SocialButton link={links['stackoverflow']} Icon={BsStackOverflow} />
                <SocialButton link={links['github']} Icon={BsGithub} />
            </div>
        </section>
    )
}
