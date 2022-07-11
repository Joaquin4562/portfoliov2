import React from 'react'

export const Login = () => {
    return (
        <div className='h-screen bg-gray-900 flex items-center justify-center flex-col'>
            <div className="text-4xl text-white font-poppins font-bold pb-10">
                PANEL ADMIN
            </div>
            <div className="max-w-md p-6 bg-white w-full rounded-md">
                <form className="bg-white shadow-lg rounded px-3 pt-10 pb-10 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="username" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder='*********' />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Iniciar sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
