import React from 'react'

class Portfolio extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hoverOff: true,
            hoverOn: null,
        }

    }


    renderList(){
        switch(this.state.hoverOn){
            case 'one':
                return (
                    <ul className='portfolio_list' >
                        <li className='portfolio_items' onMouseLeave={this.mouseOffOne.bind(this)} >
                            <a href='http://sailor-seal-22603.bitballoon.com/'>
                                <img src='img/crunch2.jpg' />
                            </a>
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverTwo.bind(this)}>
                            <a href='https://www.mmo-champion.com/content/'>
                                <img src='img/ShowBot.png' />
                            </a>
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverThree.bind(this)}>
                            <a href='https://www.mmo-champion.com/content/'>
                                <img src='img/ShowBot.png' />
                            </a>
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverFour.bind(this)}>
                            <a href='https://www.mmo-champion.com/content/'>
                                <img src='img/ShowBot.png' />
                            </a>
                        </li>
                    </ul>
                )
            break
            case 'two':
                return (
                    <ul className='portfolio_list'>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverOne.bind(this)} >
                            <a href='http://sailor-seal-22603.bitballoon.com/'>
                                <img src='img/Space Shooter.png' />
                            </a>
                        </li>
                        <li className='portfolio_items' onMouseLeave={this.mouseOffTwo.bind(this)}>
                            <a href='https://www.mmo-champion.com/content/'>
                                <img src='img/crunch2.jpg' />
                            </a>
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverThree.bind(this)}>
                            <a href='https://www.mmo-champion.com/content/'>
                                <img src='img/ShowBot.png' />
                            </a>
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverFour.bind(this)}>
                            <a href='https://www.mmo-champion.com/content/'>
                                <img src='img/ShowBot.png' />
                            </a>
                        </li>
                    </ul>
                )
            break
            case 'three':
                return (
                    <ul className='portfolio_list'>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverOne.bind(this)} >
                            <a href='http://sailor-seal-22603.bitballoon.com/'>
                                <img src='img/Space Shooter.png' />
                            </a>
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverTwo.bind(this)}>
                            <a href='https://www.mmo-champion.com/content/'>
                                <img src='img/ShowBot.png' />
                            </a>
                        </li>
                        <li className='portfolio_items' onMouseLeave={this.mouseOffThree.bind(this)}>
                            <a href='https://www.mmo-champion.com/content/'>
                                <img src='img/crunch2.jpg' />
                            </a>
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverFour.bind(this)}>
                            <a href='https://www.mmo-champion.com/content/'>
                                <img src='img/ShowBot.png' />
                            </a>
                        </li>
                    </ul>
                )
            break
            case 'four':
                return (
                    <ul className='portfolio_list'>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverOne.bind(this)} >
                            <a href='http://sailor-seal-22603.bitballoon.com/'>
                                <img src='img/Space Shooter.png' />
                            </a>
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverTwo.bind(this)}>
                            <a href='https://www.mmo-champion.com/content/'>
                                <img src='img/ShowBot.png' />
                            </a>
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverThree.bind(this)}>
                            <a href='https://www.mmo-champion.com/content/'>
                                <img src='img/ShowBot.png' />
                            </a>
                        </li>
                        <li className='portfolio_items' onMouseLeave={this.mouseOffFour.bind(this)}>
                            <a href='https://www.mmo-champion.com/content/'>
                                <img src='img/crunch2.jpg' />
                            </a>
                        </li>
                    </ul>
                )
            break
        }
    }

    mouseOverOne(){
        this.setState({
            hoverOn: 'one',
            hoverOff: false,
        })    
    }

    mouseOffOne() {
        this.setState({
            // hoverOn: null,      
            hoverOff: true,
        })
    }

    mouseOverTwo() {
        this.setState({
            hoverOn: 'two',
            hoverOff: false,
        })
    }

    mouseOffTwo() {
        this.setState({
            // hoverOn: null,      
            hoverOff: true,
        })
    }

    mouseOverThree() {
        this.setState({
            hoverOn: 'three',
            hoverOff: false,
        })
    }

    mouseOffThree() {
        this.setState({      
            // hoverOn: null,            
            hoverOff: true,
        })
    }

    mouseOverFour() {
        this.setState({
            hoverOn: 'four',
            hoverOff: false,
        })
    }

    mouseOffFour() {
        this.setState({  
            // hoverOn: null,          
            hoverOff: true,
        })
    }


    render(){
        return(
            <div className='portfolio'>
                {this.state.hoverOn ? 
                    <div>
                        {this.renderList()}
                    </div>

                :
                    <ul className='portfolio_list'>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverOne.bind(this)} >
                            <a href='http://sailor-seal-22603.bitballoon.com/'>
                                <img src='img/Space Shooter.png' />
                            </a>
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverTwo.bind(this)} >
                            <a href='https://www.mmo-champion.com/content/'>
                                <img src='img/ShowBot.png' />
                            </a>
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverThree.bind(this)}>
                            <a href='https://www.mmo-champion.com/content/'>
                                <img src='img/ShowBot.png' />
                            </a>
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverFour.bind(this)}>
                            <a href='https://www.mmo-champion.com/content/'>
                                <img src='img/ShowBot.png' />
                            </a>
                        </li>
                    </ul>
                }   
            </div>
        )
    }
}

export default Portfolio