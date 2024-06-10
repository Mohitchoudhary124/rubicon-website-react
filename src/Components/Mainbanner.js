import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import vector from '../Components/images/Vector.png'
import bannerimage from '../Components/images/banner-img.png'
import studentimage from '../Components/images/001-student.png'
import videolessonimage from '../Components/images/002-video-lesson.png'
import userimage from '../Components/images/003-user.png'

function Mainbanner () {
  return (
    <div className='top-sec-cover'>
      <section className='banner-section container'>
         <div className='banner-row row d-flex align-items-center'>
           <div className='item-tag-line col'>
            <div className='tag-line'>
              <h1>Master Any Subject or Language With Online <span className='underline'>Teachers</span></h1>
              <p>Prepare to achieve your goals anytime, anywhere.</p>
            </div>
            <div className='searchbox'>
              <form action='#' method='post'>
                <div className='input-group mb-3'>
                  <img src={vector} alt=''></img>
                  <input type='text' className='form-control' placeholder='What would you like to learn ?' aria-label='What would you like to learn ?'></input>
                  <input type='submit'value='Go'></input>
                </div>
              </form>
            </div>
            <div className='popular-key-word'>
              <strong>Popular :</strong>
              <span>Russian</span>,
              <span>Finnish</span>,
              <span>Portuguese</span>,
              <span>Hindi</span>,
              <span>Italian</span>,
              <span>Hebrew</span>
            </div>
           </div>
           <div className='item-pic col'>
              <img src={bannerimage} className='img-fluid' alt=''></img>
           </div>
         </div>

         <div className='language-row row d-flex align-items-center'>
            <div className='item language-title col-lg-4'>
               <h2>We Make Language Learning Easy & Simpler</h2>
            </div>
            <div className='col-md-8 col-sm-8 col-lg-8 col-xs-12'>
              <div className='row language-items'>
                <div className='item col-md-4 col-sm-4 col-lg-4 col-xs-12'>
                  <img src={studentimage} alt=''></img>
                  <h2>Professional Tutors</h2>
                  <p>Choose from over a myriad of professional &experienced teachers to be fluent in any language.</p>
                </div>
                <div className='item col-md-4 col-sm-4 col-lg-4 col-xs-12'>
                  <img src={videolessonimage} alt=''></img>
                  <h2>1-on-1 Live sessions</h2>
                  <p>Connect with your teachers via 1-on-1 live chat sessions and build a deeper understanding of a language.</p>
                </div>
                <div className='item col-md-4 col-sm-4 col-lg-4 col-xs-12'>
                  <img src={userimage} alt=''></img>
                  <h2>Group Classes</h2>
                  <p>Feel motivated, enthusiastic, and improve your social interaction via group lessons. What Language You Want To Learn?</p>
                </div>
              </div>
            </div>
         </div>
      </section>
    </div>
  )
}

export default Mainbanner;