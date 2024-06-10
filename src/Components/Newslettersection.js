import React from 'react'

function Newslettersection() {
    return (
        <section newsletter-section>
            <div className='newsletter-container container'>
                <div className='row'>
                    <div className='news-letter-box'>
                        <h2>Newsletter</h2>
                        <p className='text-center'>
                        Enter Your Email And Subscribe To Recieve Notifications Of New Posts By Email
                        </p>
                        <div className='form-box flex-wrap'>
                            <div className='item'>
                                <input type='text' className='form-control' placeholder='Your email address'></input>
                            </div>
                            <div className='item'>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Newslettersection