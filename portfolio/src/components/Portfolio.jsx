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
                        <li className='portfolio_items highlight_one' onClick={this.resetHover.bind(this)} onMouseLeave={this.mouseOffOne.bind(this)} >                
                            <a href='http://sailor-seal-22603.bitballoon.com/'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut praesentium ipsa minima eligendi corrupti a deleniti numquam voluptatibus, explicabo, necessitatibus, dolorum earum incidunt dolore? Maiores debitis laborum cumque obcaecati.</p></a>                            
                            <a href='http://sailor-seal-22603.bitballoon.com/'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut praesentium ipsa minima eligendi corrupti a deleniti numquam voluptatibus, explicabo, necessitatibus, dolorum earum incidunt dolore? Maiores debitis laborum cumque obcaecati.</p></a>                            
                            <a href='http://sailor-seal-22603.bitballoon.com/'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut praesentium ipsa minima eligendi corrupti a deleniti numquam voluptatibus, explicabo, necessitatibus, dolorum earum incidunt dolore? Maiores debitis laborum cumque obcaecati.</p></a>                            
                            <a href='http://sailor-seal-22603.bitballoon.com/'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut praesentium ipsa minima eligendi corrupti a deleniti numquam voluptatibus, explicabo, necessitatibus, dolorum earum incidunt dolore? Maiores debitis laborum cumque obcaecati.</p></a>                            
                            <a href='http://sailor-seal-22603.bitballoon.com/'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut praesentium ipsa minima eligendi corrupti a deleniti numquam voluptatibus, explicabo, necessitatibus, dolorum earum incidunt dolore? Maiores debitis laborum cumque obcaecati.</p></a>                            
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverTwo.bind(this)}>
                            <img src='img/ShowBot.png' />
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverThree.bind(this)}>
                            <img src='img/ShowBot.png' />                        
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverFour.bind(this)}>                        
                            <img src='img/ShowBot.png' />                            
                        </li>
                    </ul>
                )
            break
            case 'two':
                return (
                    <ul className='portfolio_list'>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverOne.bind(this)} >
                            <img src='img/Space Shooter.png'/>                    
                        </li>
                        <li className='portfolio_items highlight_one' onClick={this.resetHover.bind(this)} onMouseLeave={this.mouseOffTwo.bind(this)}>
                            <a href='https://www.mmo-champion.com/content/'><h1>This is ShowBot</h1></a>
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverThree.bind(this)}>                            
                            <img src='img/ShowBot.png' />                        
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverFour.bind(this)}>                        
                            <img src='img/ShowBot.png' />
                        </li>
                    </ul>
                )
            break
            case 'three':
                return (
                    <ul className='portfolio_list'>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverOne.bind(this)} >                    
                            <img src='img/Space Shooter.png' />
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverTwo.bind(this)}>                    
                            <img src='img/ShowBot.png' />
                        </li>
                        <li className='portfolio_items highlight_one' onClick={this.resetHover.bind(this)} onMouseLeave={this.mouseOffThree.bind(this)}>
                            <a href='https://www.mmo-champion.com/content/'>
                                <h1>This is project 3</h1>
                            </a>
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverFour.bind(this)}>                            
                            <img src='img/ShowBot.png' />                        
                        </li>
                    </ul>
                )
            break
            case 'four':
                return (
                    <ul className='portfolio_list'>
                        <li className='portfolio_items'  onMouseEnter={this.mouseOverOne.bind(this)} >                            
                            <img src='img/Space Shooter.png' />                            
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverTwo.bind(this)}>                        
                            <img src='img/ShowBot.png' />                        
                        </li>
                        <li className='portfolio_items' onMouseEnter={this.mouseOverThree.bind(this)}>                        
                            <img src='img/ShowBot.png' />                            
                        </li>
                        <li className='portfolio_items highlight_one' onClick={this.resetHover.bind(this)} onMouseLeave={this.mouseOffFour.bind(this)}>
                            <a href='https://www.mmo-champion.com/content/'>
                                <h1>This is project 4</h1>
                            </a>
                        </li>
                    </ul>
                )
            break
        }
    }

    resetHover() {
        this.setState({
            hoverOn: null
        })
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