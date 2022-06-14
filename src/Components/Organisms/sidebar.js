import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styledComponents from 'styled-components'

import { Turn as Hamburger } from 'hamburger-react'

import { RiDashboardFill } from 'react-icons/ri'
import { IoMdInformationCircle, IoMdSettings } from 'react-icons/io'
import { AiFillMessage, AiOutlineLogout } from 'react-icons/ai'
import { MdPersonAddAlt1 } from 'react-icons/md'
import { RiGalleryFill } from 'react-icons/ri'

const Container = styledComponents.nav`
    width: ${props => props.width}
`

const Navbar = () => {
    const [width, setWidth] = useState("4rem")
    const [isOpen, setIsOpen] = useState(false)

    const handleNav = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setWidth("12rem")
        } else {
            setWidth("4rem")
        }
    }

    const getJustify = () => {
        if(!isOpen) {
            return 'items-center'
        }
        else {
            return 'items-start'
        }
    }

    let location = useLocation();
    const getActive = (path) => {
        if(location.pathname === path) {
            return 'text-red hover:text-red-dark'
        }
        else{
            return 'text-white hover:text-gray_dark'
        }
    }
    const handleLogout = () => {
        localStorage.removeItem('access_token')
        window.location.reload()
    }

    return (
        <Container className='fixed hidden md:flex bg-black h-screen transition-all z-40' width={width}>
            <div className='absolute top-4 -right-4 w-12 h-12 bg-red rounded-full flex justify-center items-center'>
                <Hamburger size={20} color="#fff" onToggle={handleNav}/>
            </div>
            <div className={`flex flex-col justify-center px-4 ${getJustify} w-full gap-y-8`}>
                <Link to='/'>
                    <div className={`flex gap-x-4 cursor-pointer ${getActive('/dashboard')}`}>
                        <RiDashboardFill className='w-6 h-6'/>
                        { isOpen && <h3>Overview</h3>}
                    </div>
                </Link>
                <Link to='/requests'>
                    <div className={`flex gap-x-4 cursor-pointer ${getActive('/requests')}`}>
                        <IoMdInformationCircle className='w-6 h-6'/>
                        { isOpen && <h3>Requests</h3>}
                    </div>
                </Link>
                <Link to='/messages'>
                    <div className={`flex gap-x-4 cursor-pointer ${getActive('/messages')}`}>
                        <AiFillMessage className='w-6 h-6'/>
                        { isOpen && <h3>Messages</h3>}
                    </div>
                </Link>
                <Link to='/partner'>
                    <div className={`flex gap-x-4 cursor-pointer ${getActive('/partner')}`}>
                        <MdPersonAddAlt1 className='w-6 h-6'/>
                        { isOpen && <h3>Add Partners</h3>}
                    </div>
                </Link>
                <Link to='/setting'>
                    <div className={`flex gap-x-4 cursor-pointer ${getActive('/setting')}`}>
                        <IoMdSettings className='w-6 h-6'/>
                        { isOpen && <h3>Settings</h3>}
                    </div>
                </Link>
                <Link to='/gallery'>
                    <div className={`flex gap-x-4 cursor-pointer ${getActive('/gallery')}`}>
                        <RiGalleryFill className='w-6 h-6'/>
                        { isOpen && <h3>Gallery</h3>}
                    </div>
                </Link>
                <div className='flex gap-x-4 cursor-pointer text-white' onClick={handleLogout}>
                    <AiOutlineLogout className='w-6 h-6'/>
                    { isOpen && <h3>Logout</h3>}
                </div>
            </div>        
        </Container>
    )
}

export default Navbar