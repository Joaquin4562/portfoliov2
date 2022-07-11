import React from 'react'
import { useState } from 'react'
import { ButtonAppBarCustom } from './ButtonAppBar'
import { LinkAppBar } from './LinkAppBar'
import { SandwitchButton } from './SandwitchButton'
export const Appbar = () => {
    const [active, setActive] = useState(true);
    const navActive = () => {
        setActive(!active);
        console.log(active);
    }
    return (
        <header className='transition-height duration-500 ease-in-out delay-75 flex sticky top-0 z-50 items-center justify-start flex-wrap p-2 bg-white lg:bg-white shadow-md'>
            <a href='#inicio' className="block w-auto items-center flex-grow flex-shrink-0 text-teal-900 mr-6 lg:ml-6 ml-4"> 
                <p className='font-semibold text-xl tracking-tight'>{"<Gerardo>"}</p>
                <p className='font-semibold text-xl tracking-tight'>{"<Joaquin/>"}</p>
            </a>
            <div className="block lg:hidden">
                <SandwitchButton click={navActive} />
            </div>
            <nav className={"visible animate-nav-animate w-full flex-grow-0 lg:flex lg:items-center lg:w-auto".concat(active ? " hidden": " block")}>
                <div className="text-sm lg:flex-grow">
                    <LinkAppBar click={() => {setActive(true)}} path="#about" routeName="Acerca de mi" content="Conocimientos, habilidades, etc."></LinkAppBar>
                    <LinkAppBar click={() => {setActive(true)}} path="#projects" routeName="Experiencia" content="Proyectos personales y de trabajo"></LinkAppBar>
                    <LinkAppBar click={() => {setActive(true)}} path="#contact" routeName="Contacto" content="Datos de contacto (correo, telefono, etc.)"></LinkAppBar>
                </div>
            </nav>
            <div className='flex-grow-0 hidden lg:block'>
                <ButtonAppBarCustom name="Descargar CV" />
            </div>
        </header>
    )
}
