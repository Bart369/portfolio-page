import React from 'react'

const ContactButtons = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <button className='button' onClick={props.previous}>Portfolio</button>
            <button className='button current_Button'>Contact</button>
            <button className='button' onClick={props.next}>About Me</button>
        </div>
    )
}

export default ContactButtons