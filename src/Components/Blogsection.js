import React from 'react'
import blog1 from '../Components/images/blogi1.jpg'
import blog2 from '../Components/images/blogi2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faCalendar,faClock} from '@fortawesome/free-solid-svg-icons';

function Blogsection() {
  return (
    <section className='blog-section'>
        <div className='container'>
            <div className='how-inner'>
                <div className='how-title'>
                    <h4>Blog</h4>
                    <h2>Latest <span className='underline'>Blogs</span></h2>
                    <div className='viewBtn'>
                        <a href='#' className='viewAllbtn'>View All</a>
                    </div>
                </div>
            </div>
            <div className='blog-inner'>
                <div className='blog-row row'>
                    <div className='item1 col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        <div className='over-caption'>
                            <div className='blog-content'>
                            <div className='button'>
                                <a href='' className='primary-bg small-rubicon-btn'>Online coaching</a>
                            </div>
                            <h3>How To Launch An Online Coaching Business & Start Scaling</h3>
                            <div className='date'>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCalendar} style={{color: "#fd6727",}}/>  Mar 31, 2023 </li>
                                    <li><FontAwesomeIcon icon={faClock} style={{color: "#fd6727",}}/>  06:50 (120 Minutes) </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='item1 item col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        <div className='blog-2'>
                            <div className='blog-content'>
                            <div className='button'>
                                <a href='' className='primary-bg small-rubicon-btn'>Online coaching</a>
                            </div>
                            <h3>How To Launch An Online Coaching Business & Start Scaling</h3>
                            <div className='date'>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCalendar} style={{color: "#fd6727",}}/>  Mar 31, 2023 </li>
                                    <li><FontAwesomeIcon icon={faClock} style={{color: "#fd6727",}}/>  06:50 (120 Minutes) </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blogsection