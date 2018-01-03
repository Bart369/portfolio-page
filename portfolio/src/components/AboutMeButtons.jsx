import React from 'react'

const AboutMeButtons = (props) =>{
    return (
        <div>                    
            <button className='button' onClick={props.previous('contact')}>Contact</button>
            <button className='button' onClick={props.next('portfolio')}>Portfolio</button>
        </div>
    )
}

export default AboutMeButtons