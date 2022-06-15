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
    width: ${props => props.width};
    position: fixed;
    background-color: black;
    height: 100vh;
    transition : all 0.3s ease-in-out;
    z-index: 40;
    top:0;
    left:0;

`
const Icon = styledComponents.div`
    position: absolute;
    right: -2rem;
    top: 2rem;
    width:3rem;
    height:3rem;
    background-color: #000B0F;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`
const Wrapper = styledComponents.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    padding:0 1rem;
    width: 100%;
    row-gap:2rem;
    align-items: ${props => props.align};
    height: 100%;

    div{
        display: flex;
        column-gap: 1rem;
        cursor: pointer;
        align-items: center;
        color: ${props => props.color};

    }
`
const Over =  styledComponents.div`
    font-size: 1.5rem; 
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
            return 'center'
        }
        else {
            return 'center'
        }
    }

    let location = useLocation();
    const getActive = (path) => {
        if(location.pathname === path) {
            return '#B0B0B0'
        }
        else{
            return 'white'
        }
    }
    const handleLogout = () => {
        localStorage.removeItem('access_token')
        window.location.reload()
    }

    return (
        <Container width={width}>
            <Icon >
                <Hamburger size={20} color="#fff" onToggle={handleNav}/>
            </Icon>
            <Wrapper align = {`${getJustify}`}>
                <Link to='/'>
                    <div color={`${getActive("/overview")}`}>
                        <Over>
                        <RiDashboardFill/>
                        </Over>
                        { isOpen && <h3>Overview</h3>}  
                    </div>
                </Link>
                <Link to='/requests'>
                    <div color={`${getActive("/team")}`}>
                        <Over>
                        <IoMdInformationCircle/>
                        </Over>
                        { isOpen && <h3>Teams</h3>}
                    </div>
                </Link>
                <Link to='/messages'>
                    <div color={`${getActive("/exxpenses")}`}>
                    <Over>
                        <AiFillMessage />
                    </Over>
                        { isOpen && <h3>Expenses</h3>}
                    </div>
                </Link>
                <Link to='/partner'>
                    <div color={`${getActive("/activity")}`}>
                        <Over>
                        <MdPersonAddAlt1 />
                        </Over>
                        { isOpen && <h3>Activity</h3>}
                    </div>
                </Link>
                <Link to='/setting'>
                    <div color={`${getActive("/inventory")}`}>
                        <Over>
                        <IoMdSettings/>
                        </Over>
                        { isOpen && <h3>Inventory</h3>}
                    </div>
                </Link>
                <Link to='/gallery'>
                    <div color={`${getActive("/seetting")}`}>
                        <Over>
                        <RiGalleryFill/>
                        </Over>
                        { isOpen && <h3>Setting</h3>}
                    </div>
                </Link>
                <div color={`${getActive("/overview")}`} onClick={handleLogout}>
                    <Over>
                    <AiOutlineLogout/>
                    </Over>
                    { isOpen && <h3>Logout</h3>}
                </div>
            </Wrapper>          
        </Container>
    )
}

export default Navbar;