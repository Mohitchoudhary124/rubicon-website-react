import React from 'react'
import review from '../Components/images/review.jpg'

function Customerreview() {
  return (
    <section className='customer-review'>
        <div className='container'>
            <div className='customer-review-row row d-flex align-items-center'>
                <div className='item-pic col-lg-3 col-md-3 col-sm-3 col-xs-12'>
                    <img src={review} alt=''></img>
                </div>
                <div className='item-content col-lg-9 col-md-9 col-sm-9 col-xs-12'>
                    <div className='desc'>Rubicon tutors is perfect for people who have little time, not enough to pay for a private tutor & especially those who like the idea of talking with people from around the world.</div>
                    <span>Sofia</span>                  
                </div>
            </div>
        </div>
    </section>
  )
}

export default Customerreview