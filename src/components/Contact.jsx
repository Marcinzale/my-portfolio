import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-blue-950 flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/b5cc7f7f-3109-471b-9fa8-39271a35aaa9" className='flex flex-col max-w-xl w-full'>
            <div className='pb-6'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below to send me an email</p>
            </div>
            <input className='p-2 bg-gray-300 focus:outline-pink-600 focus:bg-teal-50' type="text" placeholder='Name' name='name' required />
            <input className='my-4 p-2 bg-gray-300 focus:outline-pink-600 focus:bg-teal-50' type="email" placeholder='Email' name='email' required/>
            <textarea className='p-2 bg-gray-300 focus:outline-pink-600 focus:bg-teal-50' name="message" rows="10" placeholder='Type here' required></textarea>
            <button className='text-white border-2 px-4 py-3 hover:bg-pink-600 hover:border-pink-600 my-8 mx-auto flex items-center'>Let's cooperate!</button>
        </form>
        
    </div>
  )
}

export default Contact