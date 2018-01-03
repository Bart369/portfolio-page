import React from 'react'

const AboutMeButtons = (props) =>{
    return (
        <div style={{ textAlign: 'center' }}>                 
            <button className='button' onClick={props.previous}>Contact</button>
            <button className='button' onClick={props.next}>Portfolio</button>
        </div>
    )
}

export default AboutMeButtons