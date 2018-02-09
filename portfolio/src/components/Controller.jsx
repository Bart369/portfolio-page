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
                // console.log(currentSlide);
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
                        <li><a href="https://drive.google.com/open?id=146i4Ke7VvY4NwYzQG6Djx-j4B4rJHpmd" title='Resume'><i className="fa fa-file-text-o" aria-hidden="true"></i></a></li>
                    </ul>
                </div>

                <div className='main'>
                    {/* <!-- TOP SECTION
                  --> */}
                    <div className='about_me_container'>
                        <div className='about_me_content'>
                            <div className='headerHolder'>
                            <div className='my_highlights'>
                                <div className='header'>
                                    <h1>Bartin Peguero</h1>
                                </div>
                                
                                <h2>
                                    <span className='second_Header'>Full-Stack Developer</span>
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
                                        <div key={8}>
                                            <h2>
                                                <span className='full slider'>Customer Service Exp.</span>
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
                                        <div key={7}>
                                            <h2>
                                                <span className='full slider'>Always Working</span>
                                            </h2>
                                        </div>
                                        <div key={9}>
                                            <h2>
                                                <span className='full slider'>Always Learning</span>
                                            </h2>
                                        </div>
                                    </Slider>
                                </div>
                                 <br />
                            </div>
                            </div>
                            <br />
                            <div className='aboutme_holder'>
                                <div className='about_me_description'>
                                    {/* <div className='aboutme_text'> */}
                                    <b><h2>More <span className='about_span'>about me</span>...</h2></b><br />
                                    <p>
                                        I have a passion for unique tech, video games and creating fun and clean looking apps. I'm always improving my skills and learning
                                        new ones to make the best apps possible, and would love to join a team that is equally driven. When I'm not coding, I'm most likely
                                        watching movies, on my pull-up bar, eating Chipotle with my girlfriend or walking my crazy-super-hyper Boston Terrier.
                                        <br /> <br />
                                        If you're interested in collaborating on a project or just want to contact me, checkout the icons to the left. Thanks for checking out my work!
                                    </p>
                                    {/* </div> */}
                                </div>
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
                                <a href='https://github.com/Bart369/Space-Shooter' title='Github'><h2>Space Shooter <i className="fa fa-github-alt" aria-hidden="true"></i></h2></a><br/>
                                <p style={styles.pStyle}><b>Javascript / Collision Detection</b></p><br/>
                                
                                <img src='img/Space Shooter.png'/>
                                <div className='item_description'>                     
                                    <p>
                                        Space Shooter is a game similar to old school games such as Space Invaders and Galaga where the
                                        player controls a space ship and has to avoid being hit by other flying projectiles. The player moves
                                        the ship with the arrow keys and can shoot the enemy ships by pressing the space bar. The objective
                                        is to collect the gold coins that randomly appear while trying to kill as many enemies as possible to get
                                        a high score. There's currently a bug where the player's shield randomly depletes when shooting,
                                        so I added collectible hearts that do the opposite and heal the player.<br />
                                        <br />
                                        <b><a href='http://spaceshooterbartinpeguero.bitballoon.com/'>Click here</a></b> to play Space Shooter! <br/> (*** sorry desktop only ***)
                                    </p>
                                </div>
                            </div>
                            <div className='portfolio_item '>
                                <a href='https://github.com/Bart369/Project-2' title='Github'><h2>ShowBot <i className="fa fa-github-alt" aria-hidden="true"></i></h2></a><br />
                                <p style={styles.pStyle}><b>EJS / Express.JS / Auth / API</b><br/></p>
                                <br />
                                <img src='img/ShowBot.png'/>
                                <div className='item_description'>                                            
                                    <p>
                                        ShowBot allows users to search for tv shows, and get information such as the plot, the number of seasons and episodes and more.
                                        As the user browses the search results, they have the option of adding any of those shows to their favorites list or just see more
                                        information. Each user must register under a unique username so that they will have their own favorites list. <br />
                                        <br />
                                        <b><a href='https://showbotapp.herokuapp.com/'>Click here</a></b> to search your favorite shows on ShowBot!
                                    </p>
                                </div>
                            </div>
                            <div className='portfolio_item'>
                                <a href='https://github.com/Bart369/Time-To-Vote' title='Github'><h2>Time To Vote <i className="fa fa-github-alt" aria-hidden="true"></i></h2></a><br/>
                                <p style={styles.pStyle}><b>React.JS / Express.JS / API</b><br /></p>
                                <br />
                                <img src='img/timetovote.png'/>
                                <div className='item_description'>                                                
                                    <p>
                                        Time To Vote allows the user to look up any US zipcode to see the elected officials in that area and any relevant
                                        information about them. The user can also see upcoming primary election dates in 2018 and soon I would like to allow 
                                        users to share specific dates straight to social media. Authentication is currently disabled.<br />
                                        <br />
                                        <b><a href='https://timetovoteapp.herokuapp.com/'>Click here</a></b> to look up elected officials near you!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer><p>&copy; 2018 Bartin Peguero All Rights Reserved</p></footer>
                </div>
            </div>   
        )
    }
    
}

const styles = {
    pStyle: {
        textAlign: 'center'
    }
}

export default Controller
