import React from 'react'
import ContactCard from './ContactCard'

const AllContacts = () => {
    return (
        <div className='m-4 p-4'>
            <h1 className='text-center text-4xl text-gray-600 font-bold'>All Contacts</h1>
            <ContactCard />
            <div className='grid grid-cols-3'>
                <button className='bg-green-600 rounded-full p-3 m-3 text-white text-2xl'>Add Contact</button>
                <button className='bg-yellow-400 rounded-full p-3 m-3 text-white text-2xl'>Update Contact</button>
                <button className='bg-red-600 rounded-full p-3 m-3 text-white text-2xl'>Delete Contact</button>
            </div>
        </div>
    )
}

export default AllContacts