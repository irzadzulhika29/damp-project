import React from 'react'
import HomeIcon from '../assets/svg/home-icon.svg'
import ClassIcon from '../assets/svg/classes-icon.svg'
import ChatIcon from '../assets/svg/chat-icon.svg'
import ProfileIcon from '../assets/svg/profile-icon.svg'

const Navbar = () => {
    return (
        <nav className='w-full py-2 px-6 right-1/2 left-1/2 -translate-x-1/2 fixed bottom-0 z-50 bg-blue '>
            <div className='flex justify-between items-center'>
                <button className='text-white flex flex-col items-center gap-1'>
                    <img className='w-6 h-6' src={HomeIcon} alt="home-icon" />
                    <p>Home</p>
                </button>
                <button className='text-white flex flex-col items-center gap-1'>
                    <img className='w-6 h-6' src={ClassIcon} alt="class-icon" />
                    <p>Classes</p>
                </button>
                <button className='text-white flex flex-col items-center gap-1'>
                    <img className='w-6 h-6' src={ChatIcon} alt="chat-icon" />
                    <p>Chat</p>
                </button>
                <button className='text-white flex flex-col items-center gap-1'>
                    <img className='w-6 h-6' src={ProfileIcon} alt="profile-icon" />
                    <p>Profile</p>
                </button>
            </div>
        </nav>
    )
}

export default Navbar