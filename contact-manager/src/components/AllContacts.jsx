import React from 'react'
import ContactCard from './ContactCard'

const AllContacts = () => {
    return (
        <div className='m-4 p-4 border-4 border-amber-400'>
            <h1 className='text-center text-4xl text-gray-600 font-bold'>All Contacts</h1>
            <ContactCard />
        </div>
    )
}

export default AllContacts