import React from 'react'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import AboutMeButtons from './AboutMeButtons'
import portfolioButtons from './PortfolioButtons'
import ContactButtons from './ContactButtons'

import Slider from 'react-slick'
import PortfolioButtons from './PortfolioButtons';


class Controller extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loadPage: props.loadPage,
            pageButtons: 'aboutMe',
            count: 0,
        }
        this.renderPageButtons = this.renderPageButtons.bind(this)
        // this.aboutMeButtons = this.aboutMeButtons.bind(this)
        // this.portfolioButtons = this.portfolioButtons.bind(this)
        // this.contactButtons = this.contactButtons.bind(this)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        // this.buttonLoader = this.buttonLoader.bind(this)
    }

    componentDidMount(){
        // this.slider.slickGoTo(parseInt(this.state.loadPage))
    }

    

    renderPageButtons(){
        switch(this.state.pageButtons){
            case 'portfolio':
                return <PortfolioButtons />
                break
            case 'contact':
                return <ContactButtons />
                break
            default:
                return <AboutMeButtons next={this.next} previous ={this.previous} />
                break
        }
    }
    next() {
        // this.setState({
        //     count: this.state.count + 1
        // })
        // console.log(this.state.count)
        this.slider.slickNext()
        // this.buttonLoader()
    }
    previous() {
        // this.setState({
        //     count: this.state.count - 1
        // })
        // console.log(this.state.count)
        this.slider.slickPrev()
        // this.buttonLoader()
    }

    // buttonLoader(){

    //     if (this.state.count === 0) {
    //         this.setState({
    //             pageButtons: 'aboutMe'
    //         })
    //     }
    //     else if (this.state.count === 1) {
    //         this.setState({
    //             pageButtons: 'portfolio'
    //         })
    //     } else {
    //         this.setState({
    //             pageButtons: 'contact'
    //         })
    //     }
    // }

    // aboutMeButtons(){
    //     this.setState({
    //         pageButtons: 'aboutMe'
    //     })
    // }

    // portfolioButtons(){
    //     this.setState({
    //         pageButtons: 'portfolio'
    //     })
    // }

    // contactButtons(){
    //     this.setState({
    //         pageButtons: 'contact'
    //     })
    // }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
        };
        return(
            <div className = 'main'>
                <Slider ref={c => this.slider = c} {...settings}>
                    <div key={1}>
                        <AboutMe />
                    </div>
                    <div key={2}>
                        <Portfolio />
                    </div>
                    <div key={3}>
                        <Contact />
                    </div>
                </Slider>
                {/* {this.renderPageButtons()} */}
                <div style={{ textAlign: 'center' }}>
                    <button className='button' onClick={this.previous}>Previous</button>
                    <button className='button' onClick={this.next}>Next</button>
                </div>
            </div>
        )
    }
    
}

export default Controller
