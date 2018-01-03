import React from 'react'

const PortfolioButtons = (props) =>{
    return(
        <div style={{ textAlign: 'center' }}>
            <button className='button' onClick={props.previous}>About Me</button>
            <button className='button' onClick={props.next}>Contact</button>
        </div>
    )
}

export default PortfolioButtons