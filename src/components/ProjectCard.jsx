import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineLink } from 'react-icons/ai'

export const ProjectCard = ({ project }) => {
    return (
        <div className='bg-white max-w-sm rounded overflow-hidden shadow-xl hover:bg-blue-100 hover:cursor-pointer transition-all duration-100'>
            <img className='w-full' src={project.img} alt="" />
            <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="font-bold text-xl mb-2 font-poppins">
                        {project.name}
                    </div>
                    <div className="flex items-center">
                        {
                            project.github === undefined
                                ?
                                <button>
                                    <BsGithub className='text-red-600 transition-all duration-100 cursor-no-drop mr-5' style={{ fontSize: '25px' }} />
                                </button>
                                :
                                <a href={project.github} target='_blank' rel='noreferrer'>
                                    <BsGithub className='hover:text-sky-700 transition-all duration-100 mr-5' style={{ fontSize: '25px' }} />
                                </a>
                        }
                        {
                            project.url === undefined
                                ?
                                <button>
                                    <AiOutlineLink className='text-red-600 transition-all duration-100 cursor-no-drop' style={{ fontSize: '25px' }} />
                                </button>
                                :
                                <a href={project.url} target='_blank' rel='noreferrer'>
                                    <AiOutlineLink className='hover:text-sky-700 transition-all duration-100' style={{ fontSize: '25px' }} />
                                </a>
                        }
                    </div>
                </div>
                <div className="text-gray-700 text-base h-14">
                    {project.description}
                </div>
            </div>
            <div className="px-6 pt-4 pb-1">
                {
                    project.tech_used.map((tech) =>
                        <div key={tech} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                            {tech}
                        </div>
                    )
                }
            </div>
        </div>
    )
}
