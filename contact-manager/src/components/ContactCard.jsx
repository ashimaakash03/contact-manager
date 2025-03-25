import React, { useEffect } from 'react';
import { contacts } from '../assets/data/contacts_data';
import heart_outline from '../assets/icons/heart_outline.png';
import edit_icon from '../assets/icons/edit_icon.png';
import delete_icon from '../assets/icons/delete_icon.png';

const ContactCard = () => {

  const fetchAllContacts = async () => {
    try {
      await fetch(contacts);
    } catch (error) {
      console.log("Error..." + error);

    }
  }

  useEffect(() => {
    fetchAllContacts();
  })
  return (
    <div className="m-3">
      <div className='grid grid-cols-3 p-3'>
        {contacts.map((person, idx) => (
          <div key={idx} className='flex flex-row border-[1px] rounded-2xl flex-auto p-3 m-2 bg-gray-200'>
            <img src={person.image} alt={person.fullname} className='rounded-full' height={100} width={100} />
            <div className='flex flex-col'>
              <h2 className='text-3xl font-bold mx-3'>{person.fullname}</h2>
              <h2 className='mx-3'><strong>{person.code}</strong> {person.phone}</h2>
              <h2 className='mx-3'>{person.email}</h2>
              <div className='border-1 p-2 w-[60px] mx-3 rounded-2xl bg-black text-white'>{person.category}</div>
            </div>
            <div className="flex flex-col justify-between mr-1">
              <button><img src={heart_outline} alt="like"/></button>
              <button><img src={edit_icon} alt="edit" /></button>
              <button><img src={delete_icon} alt="delete" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactCard