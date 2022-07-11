import React from 'react'
import { useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { laboralProyects, personalProjects } from '../assets/data/projects_data'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchProjects, projectSelector } from '../features/projects/projectsSlice'
// import { useEffect } from 'react'

export const Projects = () => {
    // const dispatch = useDispatch();
    // const { projects, loading } = useSelector(projectSelector)
    // useEffect(() => {
    //     dispatch(fetchProjects())
    // }, [dispatch])
    const [activeScreen, setActiveScreen] = useState([true, false]);
    const changeScreen = (page) => {
        switch (page) {
            case 1:
                setActiveScreen([true, false])
                break;
            case 2:
                setActiveScreen([false, true])
                break;
            default:
        }
    }
    const renderProjectsList = () => {
        return <>
            <div className="flex items-center justify-evenly w-full text-white text-4xl font-poppins font-bold mt-10 mb-5">
                <button onClick={() => changeScreen(1)} className={`transition-all duration-500 hover:cursor-pointer ${!activeScreen[0] ? 'text-gray-300' : 'text-teal-500'}`}>
                    Trabajo
                </button>
                <button onClick={() => changeScreen(2)} className={`transition-all duration-500 hover:cursor-pointer ${!activeScreen[1] ? 'text-gray-300' : 'text-teal-500'}`}>
                    Personal
                </button>
            </div>
            <div className={`transition-all duration-500 ease-in animate-nav-animate grid lg:grid-cols-3 md:grid-cols-2 gird-cols-1 gap-4 my-3 pb-10 ${activeScreen[0] ? 'visible' : 'hidden'}`}>
                {
                    laboralProyects.map((project) =>
                        <ProjectCard project={project} key={project.id} />
                    )
                }
            </div>
            <div className={`transition-all duration-500 ease-in animate-nav-animate grid lg:grid-cols-3 md:grid-cols-2 gird-cols-1 gap-4 my-3 pb-10 ${activeScreen[1] ? 'visible' : 'hidden'}`}>
                {
                    personalProjects.map((project) =>
                        <ProjectCard project={project} key={project.id} />
                    )
                }
            </div>
        </>
    }
    return (
        <section id='projects' className='bg-white h-auto flex flex-col justify-center items-center pt-20'>
            <div className="text-5xl font-poppins font-bold text-teal-500">
                Experiencia
            </div>
            {renderProjectsList()}
        </section >
    )
}
