import React from 'react'
import { BsTerminal } from 'react-icons/bs'
import { IoIosDesktop } from 'react-icons/io'
import { BiCode } from 'react-icons/bi'
import { AboutCard } from '../components/AboutCard'
import {habilidades} from '../assets/data/habilidades'
import {aboutMe} from '../assets/data/habilidades'
export const AcercaDeMi = () => {
    return (
        <div id='habilidades'>
            <section id='about' className='bg-teal-500 lg:h-middle h-96 flex justify-center lg:items-start lg:pt-32 items-center lg:mb-5 mb-36'>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-start justify-start w-full lg:px-40 px-10 pb-3">
                        <p className='text-white text-4xl font-poppins font-bold'>
                            Acerca de mi.
                        </p>
                    </div>
                    <p className='lg:px-40 px-5 text-white text-xl text-center'>
                        {aboutMe}
                    </p>
                </div>
            </section>
            <section className='h-auto mb-8 p-5 pb-12 grid xl:grid-cols-3 lg:grid-cols-2 md:gird-cols-2 gird-cols-1 md:mx-20 sm:mx-10 mx-0 -mt-40 bg-white rounded-md shadow-lg'>
                <AboutCard
                Icon={BsTerminal}
                title='Lenguajes'
                description='Comence aprendiendo a programar en Java, de ahí comense a explorar mas el mundo de la programación aprendiendo mas lenguajes por cuenta propia'
                subDescription='Experiencia con estos lenguajes:'
                list={habilidades['lenguajes']}
                />
                <AboutCard
                Icon={IoIosDesktop}
                title='Frameworks'
                description='Angular es uno de los frameworks en los que mas experiencia tengo, pero me gusta aprender de mas ya que dependiendo de las necesidades se aplican soluciones diferentes'
                subDescription='Experiencia con estos frameworks:'
                list={habilidades['frameworks']}
                />
                <AboutCard
                Icon={BiCode}
                title='Tecnologías'
                description='Mi capacidad de aprendizaje nunca se queda corta, siempre me es increible aprender nuevas tecnologías que satisfagan las necesidades de los proyectos'
                subDescription='Experiencia con estos frameworks:'
                list={habilidades['otras']}
                />
            </section>
        </div>
    )
}
