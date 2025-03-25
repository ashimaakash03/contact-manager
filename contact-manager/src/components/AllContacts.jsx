import React from 'react'
import ContactCard from './ContactCard'
import { contacts } from '../assets/data/contacts_data';
import add_user_icon from '../assets/icons/add_user_icon.png';

const AllContacts = () => {
    return (
        <div className='m-4 p-4'>
            <h1 className='text-center text-4xl text-gray-600 font-bold mb-5'>All Contacts</h1>
            <ContactCard fullname={contacts.fullname} image={contacts.image} code={contacts.code} phone={contacts.phone} email={contacts.email} category={contacts.category} />
            <div>
                {/* <button className='bg-green-600 rounded-full p-3 m-3 text-white text-2xl'>Add Contact</button>
                <button className='bg-yellow-400 rounded-full p-3 m-3 text-white text-2xl'>Update Contact</button>
                <button className='bg-red-600 rounded-full p-3 m-3 text-white text-2xl'>Delete Contact</button> */}
                <button onClick={()=> alert("Add User")}><img src={add_user_icon} alt="add" className='flex flex-1 border-1 ml-[660px] p-5 rounded-4xl bg-green-600' /></button>
            </div>
        </div>
    )
}

export default AllContacts