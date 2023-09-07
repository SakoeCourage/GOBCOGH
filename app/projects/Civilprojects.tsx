import React from 'react'
import { projects } from './projectlist'
function Civilprojects() {
    return (
        <div className='container-content text-gray-400 py-7'>
            <nav className='flex items-center gap-8 mb-20'>
                <nav role='list-item-indicator' className=' w-4 h-4 bg-deep-dark'></nav>
                <h1 className=' font-bold text-4xl uppercase text-deep-dark add_underline' >PROJECTS</h1>
            </nav>

            <div className="relative overflow-x-auto thick-gray-bs">
                <table className="w-full text-left text-gray-500 dark:text-gray-400">
                    <thead className=" text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                Project
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                Status/Year
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Client
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, i) => {
                            return (
                                <tr key={i} className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        {project.index}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        {project.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {project.location}
                                    </td>
                                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                        {project.status}
                                    </td>
                                    <td className="px-6 py-4">
                                        {project.client}
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Civilprojects