import React from 'react'

class Portfolio extends React.Component{
    constructor(){
        super()
        this.state = {
            hoverOff: true,
            hoverOn: null,
        }

    }

    renderList(){
        switch(this.state.hoverOn){
            case 'one':
                return (
                    <ul className='portfolio_list'>
                        <a href='http://sailor-seal-22603.bitballoon.com/'>
                            <li className='portfolio_items' onMouseLeave={this.mouseOffOne.bind(this)} >
                                <img src='img/crunch2.jpg' />
                            </li>
                        </a>
                        <a href='https://www.mmo-champion.com/content/'>
                            <li className='portfolio_items' onMouseEnter={this.mouseOverTwo.bind(this)}>
                                <img src='img/ShowBot.png' />
                            </li>
                        </a>
                        <li className='portfolio_items'><img src='img/ShowBot.png' /></li>
                        <li className='portfolio_items'><img src='img/ShowBot.png' /></li>
                    </ul>
                )
            break
            case 'two':
                return (
                    <ul className='portfolio_list'>
                        <a href='http://sailor-seal-22603.bitballoon.com/'>
                            <li className='portfolio_items' onMouseEnter={this.mouseOverOne.bind(this)} >
                                <img src='img/Space Shooter.png' />
                            </li>
                        </a>
                        <a href='https://www.mmo-champion.com/content/'>
                            <li className='portfolio_items' onMouseLeave={this.mouseOffTwo.bind(this)}>
                                <img src='img/crunch2.jpg' />
                            </li>
                        </a>
                        <li className='portfolio_items'><img src='img/ShowBot.png' /></li>
                        <li className='portfolio_items'><img src='img/ShowBot.png' /></li>
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
            hoverOn: null,
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
            hoverOn: null,
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
            hoverOn: null,
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
            hoverOn: null,
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
                        <a href='http://sailor-seal-22603.bitballoon.com/'>
                            <li className='portfolio_items' onMouseEnter={this.mouseOverOne.bind(this)} >
                                <img src='img/Space Shooter.png' />
                            </li>
                        </a>
                        <a href='https://www.mmo-champion.com/content/'>
                            <li className='portfolio_items' onMouseEnter={this.mouseOverTwo.bind(this)} >
                                <img src='img/ShowBot.png' />
                            </li>
                        </a>
                        <li className='portfolio_items'><img src='img/ShowBot.png' /></li>
                        <li className='portfolio_items'><img src='img/ShowBot.png' /></li>
                    </ul>
                }   
            </div>
        )
    }
}

export default Portfolio