import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import star from '../Components/images/star.png';

function Specialsection() {
  return (
    <section className='special-section'>
        <div className='container'>
            <div className='special-box'>
                <div className='caption'>
                    <div className='item-caption'>
                    <h2>Speak any language fluently with the help of professional tutors</h2>
                    <div className='button'>
                        <a className='signup primary-bg small-rubicon-btn'>Browse Tutors <FontAwesomeIcon icon={faArrowRight} /></a>
                    </div>
                    </div>
                </div>
                <div className='reviewbox'>
                    <div className='reviewbox_inner'>
                        <h6>Marine K.</h6>
                        <span>ESL Tutor</span>
                        <div className='reviw-point'>
                            <span>
                                5.0 <img src={star} alt=''/>
                            </span> (20 Reviews)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Specialsection