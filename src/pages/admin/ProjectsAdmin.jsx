import React from 'react'
import { useState } from 'react'

export const ProjectsAdmin = () => {
    const [techList, setTechList] = useState([])
    const addTechList = (tech) => {
        setTechList([
            ...techList,
            tech
        ])
    }
    return (
        <div className='h-auto bg-gray-900 flex items-center justify-center flex-col'>
            <div className="text-4xl text-white font-poppins font-bold pb-2">
                AÑADIR PROYECTO
            </div>
            <div className="max-w-md p-2 bg-white w-full rounded-md">
                <form className="bg-white shadow-lg rounded px-3 pt-5 pb-5 mb-1">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Nombre
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="username" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Github
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="github" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Url
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Url" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Imagen
                        </label>
                        <div className="flex items-center justify-start">
                            <div className="text-md w-full">
                                /files/projects-img/
                            </div>
                            <input className="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="img.png" />
                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Descripcion
                        </label>
                        <textarea className="h-32 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline max-h-32 " placeholder='Mensaje...' />                    </div>
                    <div className="mb-2 px-1 overflow-scroll max-h-28">
                        {
                            techList.map((tech) =>
                                <div className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{tech}</div>
                            )
                        }
                    </div>
                    <div className="flex items-center justify-end">
                        <button onClick={() => addTechList('x')} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Añadir tecnologia
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Añadir proyecto
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
