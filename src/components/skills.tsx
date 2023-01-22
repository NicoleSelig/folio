import React from 'react'
import {SiTypescript, SiMicrosoftazure, SiAzurepipelines, SiJavascript, SiGithubactions, SiTerraform} from 'react-icons/si'

export default function Skills() {
  return (
        <div className='col-span-2'>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <div className='flex items-center justify-between max-w-[600px] m-auto py-4'>

            <div className="grid-cols-3 rounded-full shadow-lg shadow-[#ff514d] p-6 m-4 cursor-pointer hover:scale-110 ease-in duration-400">
                  <SiTypescript color="#ED009C" size={35} />
            </div>
            <div className="rounded-full shadow-lg shadow-[#ff514d] p-6 m-4 cursor-pointer hover:scale-110 ease-in duration-400">
                  <SiJavascript color="#ED009C" size={35} />
            </div>
            <div className="rounded-full shadow-lg shadow-[#ff514d] p-6 m-4 cursor-pointer hover:scale-110 ease-in duration-400">
                  <SiMicrosoftazure color="#ED009C" size={35} />
            </div>
            <div className="rounded-full shadow-lg shadow-[#ff514d] p-6 m-4 cursor-pointer hover:scale-110 ease-in duration-400">
                  <SiTerraform color="#ED009C" size={35} />
            </div>
            <div className="rounded-full shadow-lg shadow-[#ff514d] p-6 m-4 cursor-pointer hover:scale-110 ease-in duration-400">
                  <SiAzurepipelines color="#ED009C" size={35} />
            </div>
            <div className="rounded-full shadow-lg shadow-[#ff514d] p-6 m-4 cursor-pointer hover:scale-110 ease-in duration-400">
                  <SiGithubactions color="#ED009C" size={35} />
            </div>
        </div>
    </div>
  )
}