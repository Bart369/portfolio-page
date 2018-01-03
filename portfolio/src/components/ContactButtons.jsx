import React from 'react'

const ContactButtons = (props) => {
    return (
        <div>
            <button className='button' onClick={props.previous('portfolio')}>Portfolio</button>
            <button className='button' onClick={props.next('aboutme')}>About Me</button>
        </div>
    )
}

export default ContactButtons