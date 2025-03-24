import React from 'react'
import logo from '../assets/icons/favicon.ico';
import search_icon from '../assets/icons/search_icon.png';
import help_icon from '../assets/icons/help_icon.png'
import settings_icon from '../assets/icons/settings_icon.png'
import apps_icon from '../assets/icons/apps_icon.png'

const Navbar = () => {
    return (
        <div className='m-4 p-2 flex flex-row'>
            <div className='flex flex-row'>
                <div className='flex mx-10'><img src={logo} alt="logo" /><div className='text-3xl text-gray-500 font-bold flex flex-col'><h1>Contacts</h1><h1>Manager</h1></div></div>
            </div>
            <div className="flex flex-row gap-x-4 bg-gray-100 px-5 rounded-full">
                <input type="text" placeholder='Search' className='h-[60px] w-[600px] my-1' />
                <button><img src={search_icon} alt="search_icon" height={20} width={30} /></button>
            </div>
            <div className="flex flex-row px-4 gap-10">
                <button><img src={help_icon} alt="help_icon" height={20} width={40} /></button>
                <button><img src={settings_icon} alt="settings_icon" height={20} width={40} /></button>
                <button><img src={apps_icon} alt="apps_icon" height={20} width={40} /></button>
                <h1 className='text-3xl text-white 4xl bg-blue-900 p-3 rounded-xl border-rounded'>A</h1>
            </div>
        </div>
    )
}

export default Navbar