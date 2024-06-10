import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import  Frame  from "../Components/images/Frame.png";
import  object  from "../Components/images/OBJECT.png";
import  objects  from "../Components/images/OBJECTS.png";

function Howsection() {
  return (
    <section className='how-container'>
        <div className='how-inner'>
            <div className='how-title'>
                <h4>learning</h4>
                <h2>
                    How to start <span className='underline'>learning</span> with Rubicon ?
                </h2>
            </div>
            <div className='how-content'>
                <div className='how-container'>
                    <div className='row how-1 d-flex align-items-center'>
                        <div className='item-pic col'>
                             <img src={Frame} alt='' className='img-fluid'></img>                             
                        </div>
                        <div className='item-content col'>
                            <div className='number'>1</div>
                            <h4>Search through hundreds of the best teachers</h4>
                            <div className='desc'>
                                <p>Use filters like price, language, proficiency, subject, and location, to search for your preferred teacher</p>
                            </div>
                            <a href='' className='rubicon-btn'>Browse Tutors  <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </div>
                    </div>
                    <div className='row how-2 d-flex align-items-center'>
                    <div className='item-content col'>
                            <div className='number'>2</div>
                            <h4>Book lessons with the best teacher for you</h4>
                            <div className='desc'>
                                <p>Go through the teacher’s profile and book a lesson after making the payment.</p>
                            </div>
                            <a href='' className='rubicon-btn'>Browse Tutors  <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </div>
                        <div className='item-pic col'>
                             <img src={object} alt='' className='img-fluid'></img>                             
                        </div>
                    </div>
                    <div className='row how-3 d-flex align-items-center'> 
                    <div className='item-pic col'>
                             <img src={objects} alt='' className='img-fluid'></img>                             
                        </div>
                    <div className='item-content col'>                      
                            <div className='number'>3</div>
                            <h4>Log in to start learning</h4>
                            <div className='desc'>
                                <p>Attend online lessons and start learning.</p>
                            </div>
                            <a href='' className='rubicon-btn'>Browse Tutors  <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </div></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Howsection