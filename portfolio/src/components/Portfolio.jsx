import React from 'react'

class Portfolio extends React.Component{
    constructor(){
        super()
        this.state = {
            viewProject: null,
        }

    }

    render(){
        return(
            <div className='portfolio'>
                <ul className='portfolio_list'>
                    <a href='http://sailor-seal-22603.bitballoon.com/'><li className='portfolio_items'><img src='img/Space Shooter.png'/></li></a>
                    <li className='portfolio_items'><img src='img/ShowBot.png' /></li>
                    <li className='portfolio_items'><img src='img/ShowBot.png' /></li>
                    <li className='portfolio_items'><img src='img/ShowBot.png' /></li>
                </ul>
            </div>
        )
    }
}

export default Portfolio