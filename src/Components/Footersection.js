import React from 'react';
import playstore from '../Components/images/playstore.png'
import appstore from '../Components/images/playstore.png'
import fbicon from '../Components/images/fb.png'
import twitericon  from '../Components/images/twitter.png'
import instaicon from '../Components/images/insta.png'
import youtubeicon from '../Components/images/youtube.png'

function Footersection (){
    return (
       <section>
        <div className='container-fluid top-footer'>
            <div className='footer-container container'>
                <div className='footer-row row'>
                    <div className='item-app col-lg-5 col-md-5 col-sm-5 col-xs-12'>
                        <h6>Get the Rubicon Tutors app</h6>
                        <p>Download our free app for tutors and students</p>
                        <div className='app-box'>
                            <img src={playstore} alt=''></img>
                            <img src={appstore} alt=''></img>
                        </div>
                    </div>
                    <div className='item-support col-lg-3 col-md-3 col-sm-3 col-xs-12'>
                        <h6>Support</h6>
                        <p>Follow us for news and update</p>
                        <div className='social-link'>
                            <ul>
                                <li><a><img src={fbicon} alt=''></img></a></li>
                                <li><a><img src={twitericon} alt=''></img></a></li>
                                <li><a><img src={instaicon} alt=''></img></a></li>
                                <li><a><img src={youtubeicon} alt=''></img></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='item-language col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                        <h6>Language and Currency</h6>
                        <select className='form-select mb-3'>
                            <option value=''>English</option>                            
                        </select>
                        <select className='form-select'>
                            <option className='form-control'>GBP</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid bottom-footer'>
            <div className='footer-container container'>
                <div className='footer-bottom-row'>
                    <div className='item' >
                        <h6>Rubicon Tutors</h6>
                        <ul>
                            <li><a href='https://www.w3schools.com/'>About us</a></li>
                            <li><a href=''>Contact us</a></li>
                            <li><a href=''>Rubicon Tutors Reviews</a></li>
                            <li><a href=''>How It Works</a></li>
                            <li><a href=''>Browse Countries</a></li>
                            <li><a href=''>Browse Subjects</a></li>
                            <li><a href=''>Tutoring Jobs</a></li>
                        </ul>
                    </div>
                    <div className='item' >
                        <h6>Support</h6>
                        <ul>
                            <li><a href=''>Sign up</a></li>
                            <li><a href=''>Student FAQs</a></li>
                        </ul>
                        <h6>Tutors</h6>
                        <ul>
                            <li><a href=''>Become A Tutor </a></li>
                            <li><a href=''>Tutor FAQs</a></li>
                        </ul>
                    </div>
                    <div className='item' >
                    <h6>Subject</h6>
                        <ul>
                            <li><a href=''>Maths Tutors</a></li>
                            <li><a href=''>English Tutors</a></li>
                            <li><a href=''>Science Tutors</a></li>
                            <li><a href=''>French Tutors</a></li>
                            <li><a href=''>Spanish Tutors</a></li>
                            <li><a href=''>Guitar Tutors</a></li>
                            <li><a href=''>Piano Tutors</a></li>
                        </ul>
                    </div>
                    <div className='item' >
                        <h6>Group Classes</h6>
                        <ul>
                            <li><a href=''>Browse Group Classes</a></li>
                            <li><a href=''>How it works?</a></li>
                        </ul>
                    </div>
                    <div className='item' >
                        <h6>Resourses</h6>
                        <ul>
                            <li><a href=''>Help Center</a></li>
                            <li><a href=''>How It Works?</a></li>
                            <li><a href=''>Terms & Condition</a></li>
                            <li><a href=''>Privacy Policy</a></li>
                            <li><a href=''>Cookies Policy</a></li>
                            <li><a href=''>Blog</a></li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className='text-center copyright'>© 2023 Rubicon Tutors</div>
            </div>
        </div>
       </section>
    )
}

export default Footersection 


