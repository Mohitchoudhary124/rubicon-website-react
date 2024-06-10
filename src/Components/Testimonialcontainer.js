import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import userimage from "../Components/images/user1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

function Testimonialcontainer() {
  return (
    <section className='testimonial-container'>
        <div className='testimonial-inner'>
            <div className='testimonial-title'>
                <h4>Testimonials</h4>
                <h2>What our Students are saying</h2>
            </div>
            <div className='testimonial-wrap'>
                {/* single testimonial started */}
                <div className='single-testimonials'>
                    <div className='single-testimonials-box'>
                        <img src={userimage} alt=''></img>
                        <div className='name'>Leslie A</div>
                        <h6 className='teacher-of'>Maths Tution</h6>
                        <div className='ratings'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfStroke} />
                        </div>
                        <div className='lessons'>
                            <span>150+</span>lesson complete
                        </div>
                        <div className='years'>3 years course done</div>
                        <div className='pricing'>
                            <b>£30</b>/per hour
                        </div>
                    </div>                    
                </div>
                {/* single testimonials are repeating */}
                <div className='single-testimonials'>
                    <div className='single-testimonials-box'>
                        <img src={userimage} alt=''></img>
                        <div className='name'>Leslie A</div>
                        <h6 className='teacher-of'>Maths Tution</h6>
                        <div className='ratings'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfStroke} />
                        </div>
                        <div className='lessons'>
                            <span>150+</span>lesson complete
                        </div>
                        <div className='years'>3 years course done</div>
                        <div className='pricing'>
                            <b>£30</b>/per hour
                        </div>
                    </div>                    
                </div>
                {/* single testimonials are repeating */}
                <div className='single-testimonials'>
                    <div className='single-testimonials-box'>
                        <img src={userimage} alt=''></img>
                        <div className='name'>Leslie A</div>
                        <h6 className='teacher-of'>Maths Tution</h6>
                        <div className='ratings'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfStroke} />
                        </div>
                        <div className='lessons'>
                            <span>150+</span>lesson complete
                        </div>
                        <div className='years'>3 years course done</div>
                        <div className='pricing'>
                            <b>£30</b>/per hour
                        </div>
                    </div>                    
                </div>
                {/* single testimonials are repeating */}
                <div className='single-testimonials'>
                    <div className='single-testimonials-box'>
                        <img src={userimage} alt=''></img>
                        <div className='name'>Leslie A</div>
                        <h6 className='teacher-of'>Maths Tution</h6>
                        <div className='ratings'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfStroke} />
                        </div>
                        <div className='lessons'>
                            <span>150+</span>lesson complete
                        </div>
                        <div className='years'>3 years course done</div>
                        <div className='pricing'>
                            <b>£30</b>/per hour
                        </div>
                    </div>                    
                </div>
                {/* single testimonials are repeating */}
                <div className='single-testimonials'>
                    <div className='single-testimonials-box'>
                        <img src={userimage} alt=''></img>
                        <div className='name'>Leslie A</div>
                        <h6 className='teacher-of'>Maths Tution</h6>
                        <div className='ratings'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfStroke} />
                        </div>
                        <div className='lessons'>
                            <span>150+</span>lesson complete
                        </div>
                        <div className='years'>3 years course done</div>
                        <div className='pricing'>
                            <b>£30</b>/per hour
                        </div>
                    </div>                    
                </div>
                {/* single testimonials are repeating */}

            </div>
        </div>
    </section>
  )
}

export default Testimonialcontainer