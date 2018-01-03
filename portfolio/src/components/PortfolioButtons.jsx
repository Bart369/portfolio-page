import React from 'react'

const PortfolioButtons = (props) =>{
    return(
        <div>
            <button className='button' onClick={props.previous('aboutme')}>About Me</button>
            <button className='button' onClick={props.next('contact')}>Contact</button>
        </div>
    )
}

export default PortfolioButtons