import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {            
    return (
        <div className='nav_links'>
            <nav>
                <Link to='/'>
                    <li>About Me</li>
                </Link>
                <Link to='/portfolio'>
                    <li>Portfolio</li>
                </Link>
                <Link to='/contact'>
                    <li>Contact</li>
                </Link>
            </nav>
        </div>
    ) 
}

export default Nav