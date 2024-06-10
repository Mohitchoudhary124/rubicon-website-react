import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faStar, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import sp2 from '../Components/images/sp2.jpg'
import image8 from '../Components/images/image-8.png'
import russiaflag from '../Components/images/emojione_flag-for-russia.png'
import bookingimg from '../Components/images/pics.png'
import dateimg from '../Components/images/date.png'
import timeimg from '../Components/images/time.png'
import seatimg from '../Components/images/seats.png'
import s3 from '../Components/images/s3.jpg'


const options = {
    loop: true,
    margin: 20,
    nav: false,
    dots:true,
   // stagePadding:50,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3.3,
      },
    },
  };

function Upcomingsection() {
  return (
    <section className='upcoming'>
    <div className='container'>
        <div className='how-inner'>
            <div className='how-title'>
                <h4>Classes</h4>
                <h2>Upcoming Group <span className='underline'>Classes</span></h2>
                <div className='viewBtn'>
                    <a className='viewAllbtn' href=''>View All</a>
                </div>
            </div>
        </div>
    </div>
    <div className='container-fluid p-0'>
        <div className='upcomingOuter'>
        <OwlCarousel className='owl-theme owl-carousel owlSlider owl-loaded owl-drag' {...options} >
    <div class='item owlSlider_item '>
        <div className='owlItemInner'>
            <div className='cardSlider_img'>
                <img src={sp2} className='img-fluid' alt=''></img>
            </div>
            <div className='card_innerLayer'>
                <div className='CardFlag'>
                    <div className='flagImg'>
                        <img src={russiaflag} alt=''></img>
                        <span className='namecountry'>Russian</span>
                    </div>
                </div>
                <div className='title_flag'>
                    <h3>436 Phrases Every Russian Intermediate Learner Must-Know</h3>
                </div>
                <div className='timeDate'>
                    <div className='mdate'>
                        <div className='iconDate'>
                            <img src={dateimg} alt=''></img>
                        </div>
                        <div className='mdateInner'><p> Mar 31, 2023</p></div>
                    </div>
                    <div className='mdate'>
                        <div className='iconDate'>
                            <img src={timeimg} alt=''></img>
                        </div>
                        <div className='mdateInner'><p>6:50 <span>(120 Minutes)</span></p></div>
                    </div>
                    <div className='mdate'>
                        <div className='iconDate'>
                            <img src={seatimg} alt=''></img>
                        </div>
                        <div className='mdateInner'>
                            <p><span>7</span> Seats</p>
                        </div>
                    </div>
                </div>
                <div className='priceInner'>
                    <h3>£57.00</h3>
                </div>
                <div className='bookingBlock'>
                    <div className='BookingBlockInner'>
                        <div className='bookipic'>
                            <img src={bookingimg} alt=''/>
                        </div>
                        <div className='bookPicInner'>
                            <div className='picName'>
                                <h3>Jacklyn Reichel</h3>
                            </div>
                            <div className='starItem'>
                                <p>
                                    <span className='star_five'>5.0 </span>
                                    <span className='starblock'> <FontAwesomeIcon icon={faStar} /> </span>
                                    <span className='setcounter'> (2)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='btncounter'>
                        <a href='' className='signup primary-bg small-rubicon-btn'>Book Now <FontAwesomeIcon icon={faChevronRight} /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class='item owlSlider_item'>
        <div className='owlItemInner'>
            <div className='cardSlider_img'>
                <img src={image8} className='img-fluid' alt=''></img>
            </div>
            <div className='card_innerLayer'>
                <div className='CardFlag'>
                    <div className='flagImg'>
                        <img src={russiaflag} alt=''></img>
                        <span className='namecountry'>Russian</span>
                    </div>
                </div>
                <div className='title_flag'>
                    <h3>436 Phrases Every Russian Intermediate Learner Must-Know</h3>
                </div>
                <div className='timeDate'>
                    <div className='mdate'>
                        <div className='iconDate'>
                            <img src={dateimg} alt=''></img>
                        </div>
                        <div className='mdateInner'><p> Mar 31, 2023</p></div>
                    </div>
                    <div className='mdate'>
                        <div className='iconDate'>
                            <img src={timeimg} alt=''></img>
                        </div>
                        <div className='mdateInner'><p>6:50 <span>(120 Minutes)</span></p></div>
                    </div>
                    <div className='mdate'>
                        <div className='iconDate'>
                            <img src={seatimg} alt=''></img>
                        </div>
                        <div className='mdateInner'>
                            <p><span>7</span> Seats</p>
                        </div>
                    </div>
                </div>
                <div className='priceInner'>
                    <h3>£57.00</h3>
                </div>
                <div className='bookingBlock'>
                    <div className='BookingBlockInner'>
                        <div className='bookipic'>
                            <img src={bookingimg} alt=''/>
                        </div>
                        <div className='bookPicInner'>
                            <div className='picName'>
                                <h3>Jacklyn Reichel</h3>
                            </div>
                            <div className='starItem'>
                                <p>
                                    <span className='star_five'>5.0 </span>
                                    <span className='starblock'>< FontAwesomeIcon icon={faStar} /> </span>
                                    <span className='setcounter'> (2)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='btncounter'>
                        <a href='' className='signup primary-bg small-rubicon-btn'>Book Now <FontAwesomeIcon icon={faChevronRight} /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class='item owlSlider_item'>
        <div className='owlItemInner'>
            <div className='cardSlider_img'>
                <img src={s3} className='img-fluid' alt=''></img>
            </div>
            <div className='card_innerLayer'>
                <div className='CardFlag'>
                    <div className='flagImg'>
                        <img src={russiaflag} alt=''></img>
                        <span className='namecountry'>Russian</span>
                    </div>
                </div>
                <div className='title_flag'>
                    <h3>436 Phrases Every Russian Intermediate Learner Must-Know</h3>
                </div>
                <div className='timeDate'>
                    <div className='mdate'>
                        <div className='iconDate'>
                            <img src={dateimg} alt=''></img>
                        </div>
                        <div className='mdateInner'><p> Mar 31, 2023</p></div>
                    </div>
                    <div className='mdate'>
                        <div className='iconDate'>
                            <img src={timeimg} alt=''></img>
                        </div>
                        <div className='mdateInner'><p>6:50 <span>(120 Minutes)</span></p></div>
                    </div>
                    <div className='mdate'>
                        <div className='iconDate'>
                            <img src={seatimg} alt=''></img>
                        </div>
                        <div className='mdateInner'>
                            <p><span>7</span> Seats</p>
                        </div>
                    </div>
                </div>
                <div className='priceInner'>
                    <h3>£57.00</h3>
                </div>
                <div className='bookingBlock'>
                    <div className='BookingBlockInner'>
                        <div className='bookipic'>
                            <img src={bookingimg} alt=''/>
                        </div>
                        <div className='bookPicInner'>
                            <div className='picName'>
                                <h3>Jacklyn Reichel</h3>
                            </div>
                            <div className='starItem'>
                                <p>
                                    <span className='star_five'>5.0</span>
                                    <span className='starblock'><FontAwesomeIcon icon={faStar} /></span>
                                    <span className='setcounter'>(2)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='btncounter'>
                        <a href='' className='signup primary-bg small-rubicon-btn'>Book Now <FontAwesomeIcon icon={faChevronRight} /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class='item owlSlider_item'>
        <div className='owlItemInner'>
            <div className='cardSlider_img'>
                <img src={sp2} className='img-fluid' alt=''></img>
            </div>
            <div className='card_innerLayer'>
                <div className='CardFlag'>
                    <div className='flagImg'>
                        <img src={russiaflag} alt=''></img>
                        <span className='namecountry'>Russian</span>
                    </div>
                </div>
                <div className='title_flag'>
                    <h3>436 Phrases Every Russian Intermediate Learner Must-Know</h3>
                </div>
                <div className='timeDate'>
                    <div className='mdate'>
                        <div className='iconDate'>
                            <img src={dateimg} alt=''></img>
                        </div>
                        <div className='mdateInner'><p> Mar 31, 2023</p></div>
                    </div>
                    <div className='mdate'>
                        <div className='iconDate'>
                            <img src={timeimg} alt=''></img>
                        </div>
                        <div className='mdateInner'><p>6:50 <span>(120 Minutes)</span></p></div>
                    </div>
                    <div className='mdate'>
                        <div className='iconDate'>
                            <img src={seatimg} alt=''></img>
                        </div>
                        <div className='mdateInner'>
                            <p><span>7</span> Seats</p>
                        </div>
                    </div>
                </div>
                <div className='priceInner'>
                    <h3>£57.00</h3>
                </div>
                <div className='bookingBlock'>
                    <div className='BookingBlockInner'>
                        <div className='bookipic'>
                            <img src={bookingimg} alt=''/>
                        </div>
                        <div className='bookPicInner'>
                            <div className='picName'>
                                <h3>Jacklyn Reichel</h3>
                            </div>
                            <div className='starItem'>
                                <p>
                                    <span className='star_five'>5.0</span>
                                    <span className='starblock'><FontAwesomeIcon icon={faStar} /></span>
                                    <span className='setcounter'>(2)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='btncounter'>
                        <a href='' className='signup primary-bg small-rubicon-btn'>Book Now <FontAwesomeIcon icon={faChevronRight} /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class='item owlSlider_item'>
        <div className='owlItemInner'>
            <div className='cardSlider_img'>
                <img src={image8} className='img-fluid' alt=''></img>
            </div>
            <div className='card_innerLayer'>
                <div className='CardFlag'>
                    <div className='flagImg'>
                        <img src={russiaflag} alt=''></img>
                        <span className='namecountry'>Russian</span>
                    </div>
                </div>
                <div className='title_flag'>
                    <h3>436 Phrases Every Russian Intermediate Learner Must-Know</h3>
                </div>
                <div className='timeDate'>
                    <div className='mdate'>
                        <div className='iconDate'>
                            <img src={dateimg} alt=''></img>
                        </div>
                        <div className='mdateInner'><p> Mar 31, 2023</p></div>
                    </div>
                    <div className='mdate'>
                        <div className='iconDate'>
                            <img src={timeimg} alt=''></img>
                        </div>
                        <div className='mdateInner'><p>6:50 <span>(120 Minutes)</span></p></div>
                    </div>
                    <div className='mdate'>
                        <div className='iconDate'>
                            <img src={seatimg} alt=''></img>
                        </div>
                        <div className='mdateInner'>
                            <p><span>7</span> Seats</p>
                        </div>
                    </div>
                </div>
                <div className='priceInner'>
                    <h3>£57.00</h3>
                </div>
                <div className='bookingBlock'>
                    <div className='BookingBlockInner'>
                        <div className='bookipic'>
                            <img src={bookingimg} alt=''/>
                        </div>
                        <div className='bookPicInner'>
                            <div className='picName'>
                                <h3>Jacklyn Reichel</h3>
                            </div>
                            <div className='starItem'>
                                <p>
                                    <span className='star_five'>5.0</span>
                                    <span className='starblock'><FontAwesomeIcon icon={faStar} /></span>
                                    <span className='setcounter'>(2)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='btncounter'>
                        <a href='' className='signup primary-bg small-rubicon-btn'>Book Now <FontAwesomeIcon icon={faChevronRight} /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class='item owlSlider_item'>
        <div className='owlItemInner'>
            <div className='cardSlider_img'>
                <img src={image8} className='img-fluid' alt=''></img>
            </div>
            <div className='card_innerLayer'>
                <div className='CardFlag'>
                    <div className='flagImg'>
                        <img src={russiaflag} alt=''></img>
                        <span className='namecountry'>Russian</span>
                    </div>
                </div>
                <div className='title_flag'>
                    <h3>436 Phrases Every Russian Intermediate Learner Must-Know</h3>
                </div>
                <div className='timeDate'>
                    <div className='mdate'>
                        <div className='iconDate'>
                            <img src={dateimg} alt=''></img>
                        </div>
                        <div className='mdateInner'><p> Mar 31, 2023</p></div>
                    </div>
                    <div className='mdate'>
                        <div className='iconDate'>
                            <img src={timeimg} alt=''></img>
                        </div>
                        <div className='mdateInner'><p>6:50 <span>(120 Minutes)</span></p></div>
                    </div>
                    <div className='mdate'>
                        <div className='iconDate'>
                            <img src={seatimg} alt=''></img>
                        </div>
                        <div className='mdateInner'>
                            <p><span>7</span> Seats</p>
                        </div>
                    </div>
                </div>
                <div className='priceInner'>
                    <h3>£57.00</h3>
                </div>
                <div className='bookingBlock'>
                    <div className='BookingBlockInner'>
                        <div className='bookipic'>
                            <img src={bookingimg} alt=''/>
                        </div>
                        <div className='bookPicInner'>
                            <div className='picName'>
                                <h3>Jacklyn Reichel</h3>
                            </div>
                            <div className='starItem'>
                                <p>
                                    <span className='star_five'>5.0</span>
                                    <span className='starblock'><FontAwesomeIcon icon={faStar} /></span>
                                    <span className='setcounter'>(2)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='btncounter'>
                        <a href='' className='signup primary-bg small-rubicon-btn'>Book Now <FontAwesomeIcon icon={faChevronRight} /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</OwlCarousel>
        </div>
      </div>
    </section>
  )
}

export default Upcomingsection