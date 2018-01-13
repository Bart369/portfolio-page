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
            pageButtons: 'aboutme',
        }
        // this.renderPageButtons = this.renderPageButtons.bind(this)
        // this.aboutMeButtons = this.aboutMeButtons.bind(this)
        // this.portfolioButtons = this.portfolioButtons.bind(this)
        // this.contactButtons = this.contactButtons.bind(this)
        // this.next = this.next.bind(this)
        // this.previous = this.previous.bind(this)
        // this.buttonLoader = this.buttonLoader.bind(this)
        // this.aboutMeNext = this.aboutMeNext.bind(this)
        // this.aboutMePrev = this.aboutMePrev.bind(this)
        // this.portfolioNext = this.portfolioNext.bind(this)
        // this.portfolioPrev = this.portfolioPrev.bind(this)
        // this.contactNext = this.contactNext.bind(this)
        // this.contactPrev = this.contactPrev.bind(this)
    }

    // componentDidMount(){
    //     // this.slider.slickGoTo(parseInt(this.state.loadPage))
    // }

    

    // renderPageButtons(){
    //     switch(this.state.pageButtons){
    //         case 'portfolio':
    //             return <PortfolioButtons next={this.portfolioNext} previous={this.portfolioPrev} />
    //             break
    //         case 'contact':
    //             return <ContactButtons next={this.contactNext} previous={this.contactPrev} />
    //             break
    //         default:
    //             return <AboutMeButtons next={this.aboutMeNext} previous={this.aboutMePrev} />
    //             break
    //     }
    // }

    // aboutMeNext(){
    //     this.setState({
    //         pageButtons: 'portfolio'
    //     })
    //     this.slider.slickNext()
    // }

    // aboutMePrev() {
    //     this.setState({
    //         pageButtons: 'contact'
    //     })
    //     this.slider.slickPrev()
    // }

    // portfolioNext() {
    //     this.setState({
    //         pageButtons: 'contact',
    //     })
    //     this.slider.slickNext()
    // }

    // portfolioPrev() {
    //     this.setState({
    //         pageButtons: 'aboutme',
    //     })
    //     this.slider.slickPrev()
    // }

    // contactNext() {
    //     this.setState({
    //         pageButtons: 'aboutme'
    //     })
    //     this.slider.slickNext()
    // }

    // contactPrev() {
    //     this.setState({
    //         pageButtons: 'portfolio'
    //     })
    //     this.slider.slickPrev()
    // }

    render() {
        const settings = {
            // dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // initialSlide: this.state.loadPage, 
            fade: true,
            arrows: false,
            afterChange: function (currentSlide) {      
                console.log(currentSlide);
            }
            // swipeToSlide: true
        };
        return(
            
            <div className='page_container'>

                <div className='contact'>
                    <ul>
                        <li><a href='https://www.linkedin.com/in/bartinpeguero/' title='LinkedIn'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                        <li><a href='https://github.com/Bart369' title='Github'><i className="fa fa-github-square" aria-hidden="true"></i></a></li>
                        <li><a href='mailto:BartinPeguero@gmail.com' title='E-Mail'><i className="fa fa-envelope-square" aria-hidden="true"></i></a></li>
                        <li><a href="https://drive.google.com/open?id=1EvwexIIwOfhqnt1ae_joyJ4YOe_vNsQP" title='Resume'><i className="fa fa-file-text-o" aria-hidden="true"></i></a></li>
                    </ul>
                </div>

                <div className='main'>
                    {/* <!-- TOP SECTION
                  --> */}
                    <div className='about_me_container'>
                        <div className='about_me_content'>
                            <div className='my_highlights'>
                                <div className='header'>
                                    <h1>Bartin Peguero</h1>
                                </div>
                                {/* <br /> */}
                                <h2>
                                    <span className='full'>Full-Stack Developer</span>
                                </h2>
                                {/* <br /> */}
                                <div className='slider_container'>
                                    <Slider ref={c => this.slider = c} {...settings}>
                                        <div key={0}>
                                            <h2>
                                                <span className='full slider'>Accounting Degree</span>
                                            </h2>
                                        </div>
                                        <div key={1}>
                                            <h2>
                                                <span className='full slider'>Tenacious Work Ethic</span>
                                            </h2>
                                        </div>
                                        <div key={0}>
                                            <h2>
                                                <span className='full slider'>Customers Love Me</span>
                                            </h2>
                                        </div>
                                        <div key={2}>
                                            <h2>
                                                <span className='full slider'>Team First Mentality</span>
                                            </h2>
                                        </div>
                                        <div key={3}>
                                            <h2>
                                                <span className='full slider'>Problem Solver</span>
                                            </h2>
                                        </div>
                                        <div key={4}>
                                            <h2>
                                                <span className='full slider'>Marvel Movie Fanatic</span>
                                            </h2>
                                        </div>
                                        <div key={5}>
                                            <h2>
                                                <span className='full slider'>Shine Under Pressure</span>
                                            </h2>
                                        </div>
                                        <div key={7}>
                                            <h2>
                                                <span className='full slider'>Always Working...</span>
                                            </h2>
                                        </div>
                                        <div key={7}>
                                            <h2>
                                                <span className='full slider'>Always Improving</span>
                                            </h2>
                                        </div>
                                    </Slider>
                                </div>
                                 <br />
                            </div>
                            <br />
                            <div className='about_me_description'>
                                <b><h3>More <span className='about_span'>about me</span>...</h3></b><br />
                                <p>
                                    I have a passion for unique tech, video games and creating fun and clean looking apps. I'm always improving my skills to make
                                    the best apps I can, and would love to join a team that is equally driven. When I'm not coding, I'm most likely eating
                                    chipotle with my girlfriend or walking my super hyper Boston Terrier. If you're interested in collaborating on a project
                                    or just want to contact me, checkout the icons to the left.
                                 </p>
                            </div>
                        </div>
                    </div>

                    <div className='splitter'>
                        <div className='splitter_content'>
                            <i className="fa fa-arrow-down" aria-hidden="true"></i>
                            <h2>Projects</h2>
                            <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        </div>
                    </div>

                    {/* <!-- PORTFOLIO SECTION
                  --> */}
    <div className='portfolio_container'>
                        <div className='portfolio_content'>
                            <div className='portfolio_item'>
                                <img src='img/Space Shooter.png'/>
                                    <div className='item_description'>
                                        <h2>Space Shooter</h2>
                                        <br />
                                        <p>
                                            Space Shooter is a game similar to old school games such as Space Invaders and Galaga where the
                                            player controls a space ship and has to avoid being hit by other flying projectiles. The player moves
                                            the ship with the arrow keys and can shoot the enemy ships by pressing the space bar. The objective
                                            is to collect the gold coins that randomly appear while trying to kill as many enemies as possible to get
                                            a high score.<br />
                                            <br />
                                            Space Shooter was made with <b>HTML</b>, <b>CSS</b> and <b>Javascript</b> for <b>DOM manipulation</b> and <b>Collision Detection</b>.<br />
                                            <br />
                                            The first thing I would like to improve is the actual code since I repeated myself too much.
                                            I also would like to let each player enter their initials and save their score to a leaderboard,
                                            which would be updated and displayed after the player wins or loses the game. There is also
                                            a bug where the player sometimes takes damage when shooting, and this is what made me decide
                                            to create the items the player can collect by flying to them. There's a heart the player can get that will refill
                                            the player's shield. In other words <b>I took the bug, and turned it into a feature!</b>
                                        </p>
                                    </div>
                            </div>

                                <div className='portfolio_item'>
                                    <img src='img/ShowBot.png'/>
                                        <div className='item_description'>
                                            <h2>ShowBot</h2>
                                            <br />
                                            <p>
                                                ShowBot allows users to search for tv shows, and get information such as the plot, the number of seasons and episodes and more.
                                                As the user browses the search results, they have the option of adding any of those shows to their favorites list or just see more
                                                information. Each user must register a username so each user will have their own favorite list of shows. <br />
                                                    <br />
                                                ShowBot was made with <b>EJS</b> for the front-end, and <b>Node.js/Express.js</b> for the backend and authentication.The tv
                                                show data comes from www.themoviedb.org's <b>API</b>.<br />
                                                <br />
                                                A feature I would like to add is to notify the user when a new episode of the their favorite show is released. This also
                                                means I would need to add views that display episodes. I would also like to expand this app to
                                                also deliver information for Movies.
                                            </p>
                                        </div>
                                </div>
                                    <div className='portfolio_item'>
                                        <img src='img/timetovote.png'/>
                                            <div className='item_description'>
                                                <h2>Time To Vote</h2>
                                                <br />
                                                <p>
                                                    I decided to make Time To Vote because I felt that as a US Citizen, I was (well I'm still working on this) not as
                                                    informed as I should be about our government. This app may not be the answer to that issue but it's my way of trying to help.
                                                    Time To Vote allows the user to look up any US zipcode to see who are the elected officials in that area and any relevant
                                                    information about them. The user can also see the upcoming primary elections in 2018 and pickwhich states they would like
                                                    to receive a notification for to remind them it's time to vote! I am currently working on this feature.<br />
                                                    <br />
                                                    Time To Vote has a <b>React</b> front end, <b>Node.js/Express.js</b> backend, Google's Civic <b>API</b> for the elected officials data and made my own API
                                                     to get the election dates.<br />
                                                    <br />
                                                    I would like to allow the user to share the election dates and even the elected officials data on facebook. I want to be able to show
                                                    information on the candidates running but this data is not yet available. I think this app would work
                                                    best on mobile so I need to do some tweeking to improve its functionality on those platforms.
                                                </p>
                                            </div>
                                    </div>
                                        {/* <!-- <div className='portfolio_item'>
                                            <img src='img/numbers-01.jpg'>
                                                <div className='item_description'>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam esse minus quis reiciendis expedita nesciunt magni,
              iusto nemo quod officia, voluptatibus quo exercitationem quam alias nostrum eos nulla dolorum quia.</p>
                                                </div>
        </div> --> */}
      </div>
                                    </div>

                                </div>
                            </div>
                
                
            
        )
    }
    
}

export default Controller
