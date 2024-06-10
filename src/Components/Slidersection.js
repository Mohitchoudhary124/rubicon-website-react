import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import s1 from '../Components/images/s1.jpg';
import s2 from '../Components/images/s2.jpg';
import s3 from '../Components/images/s3.jpg';
import s4 from '../Components/images/s4.jpg';
import s5 from '../Components/images/s5.jpg';
import a1 from '../Components/images/a1.jpg';
import a2 from '../Components/images/a2.jpg';
import a3 from '../Components/images/a3.jpg';
import a4 from '../Components/images/a4.jpg';
import a5 from '../Components/images/a5.jpg';
import a6 from '../Components/images/a6.jpg';
import a7 from '../Components/images/a7.jpg';

const options = {
    stagePadding:90,
    loop: true,
    margin: 10,
    nav: false,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2.5,
      },
      1000: {
        items: 4,
      },
    },
  };
  const options1 = {
    stagePadding:90,
    loop: true,
    margin: 10,
    nav: false,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2.5,
        },
        1000: {
          items: 4,
        },
      },   
  };
function Slidersection() {
  return (   
    <section className='slider-sec'>
        <div className='slider1'>
    <OwlCarousel className="owl-theme" {...options}>
        
    <div className="item">
      <img src={s1} className="owl-item-img" alt=''/>
      <div className='ovarlay'><a>Spanish</a></div>
    </div>
    <div className="item">
      <img src={s2} className="owl-item-img" alt=''/>
      <div className='ovarlay'><a>Spanish</a></div>           
    </div>
    <div className="item">
      <img src={s3} className="owl-item-img" alt=''/>
      <div className='ovarlay'><a>Spanish</a></div>        
    </div>
    <div className="item">
      <img src={s4} className="owl-item-img" alt=''/>
      <div className='ovarlay'><a>Spanish</a></div>           
    </div>
    <div className="item">
      <img src={s5} className="owl-item-img" alt=''/>
      <div className='ovarlay'><a>Spanish</a></div>        
    </div>
    <div className="item">
      <img src={s3} className="owl-item-img" alt=''/>
      <div className='ovarlay'><a>Spanish</a></div>           
    </div>
    <div className="item">
        <img src={s1} className="owl-item-img" alt=''/>
      <div className='ovarlay'><a>Spanish</a></div>           
    </div>
    <div className="item">
      <img src={s4} className="owl-item-img" alt=''/>
      <div className='ovarlay'><a>Spanish</a></div>           
    </div>
    <div className="item">
      <img src={s3} className="owl-item-img" alt=''/>
      <div className='ovarlay'><a>Spanish</a></div>           
    </div>
    <div className="item">
      <img src={s5} className="owl-item-img" alt=''/>
      <div className='ovarlay'><a>Spanish</a></div>           
    </div>
    <div className="item">
      <img src={s1} className="owl-item-img" alt=''/>
      <div className='ovarlay'><a>Spanish</a></div>           
    </div>
    <div className="item">
      <img src={s4} className="owl-item-img" alt=''/>
      <div className='ovarlay'><a>Spanish</a></div>           
    </div>
  
  </OwlCarousel>
  </div>
  <div className='bwtween-title'>
    <div className='how-inner'>
        <div className='how-title'>
            <h4>subjects</h4>
            <h2>learn various <span className='underline'>Subjects</span> of your choice</h2>
        </div>
    </div>
  </div>
      <OwlCarousel className='owl-carousel owl-theme slider2 owlSliderIteam owl-loaded owl-drag' {...options1}>
      <div className='owl-stage-outer'>
     <div className='owl-stage'>
    <div class='owl-item item'>
       <div className='item'>
        <div className='swiper-slide swiper-slide--one'>
            <div className='set_slides'>
                <img src={a1} alt='' className='img-fluid'/>
                <div className='ovarlay'><a>Spanish</a></div>
            </div>
        </div>
       </div>
         </div><div class='owl-item item'>
       <div className='item'>
        <div className='swiper-slide swiper-slide--one'>
            <div className='set_slides'>
                <img src={a2} alt='' className='img-fluid'/>
                <div className='ovarlay'><a>Spanish</a></div>
            </div>
        </div>
       </div>
    </div>
    <div class='owl-item item'>
       <div className='item'>
        <div className='swiper-slide swiper-slide--one'>
            <div className='set_slides'>
                <img src={a3} alt='' className='img-fluid'/>
                <div className='ovarlay'><a>Spanish</a></div>
            </div>
        </div>
       </div>
    </div>
    <div class='owl-item item'>
       <div className='item'>
        <div className='swiper-slide swiper-slide--one'>
            <div className='set_slides'>
                <img src={a4} alt='' className='img-fluid'/>
                <div className='ovarlay'><a>Spanish</a></div>
            </div>
        </div>
       </div>
    </div>
    <div class='owl-item item'>
       <div className='item'>
        <div className='swiper-slide swiper-slide--one'>
            <div className='set_slides'>
                <img src={a5} alt='' className='img-fluid'/>
                <div className='ovarlay'><a>Spanish</a></div>
            </div>
        </div>
       </div>
    </div>
    <div class='owl-item item'>
       <div className='item'>
        <div className='swiper-slide swiper-slide--one'>
            <div className='set_slides'>
                <img src={a6} alt='' className='img-fluid'/>
                <div className='ovarlay'><a>Spanish</a></div>
            </div>
        </div>
       </div>
    </div>
    <div class='owl-item item'>
       <div className='item'>
        <div className='swiper-slide swiper-slide--one'>
            <div className='set_slides'>
                <img src={a7} alt='' className='img-fluid'/>
                <div className='ovarlay'><a>Spanish</a></div>
            </div>
        </div>
       </div>
    </div>
    <div class='owl-item item'>
       <div className='item'>
        <div className='swiper-slide swiper-slide--one'>
            <div className='set_slides'>
                <img src={a1} alt='' className='img-fluid'/>
                <div className='ovarlay'><a>Spanish</a></div>
            </div>
        </div>
       </div>
    </div>
    <div class='owl-item item'>
       <div className='item'>
        <div className='swiper-slide swiper-slide--one'>
            <div className='set_slides'>
                <img src={a2} alt='' className='img-fluid'/>
                <div className='ovarlay'><a>Spanish</a></div>
            </div>
        </div>
       </div>
    </div>
    <div class='owl-item item'>
       <div className='item'>
        <div className='swiper-slide swiper-slide--one'>
            <div className='set_slides'>
                <img src={a3} alt='' className='img-fluid'/>
                <div className='ovarlay'><a>Spanish</a></div>
            </div>
        </div>
       </div>
    </div>
    <div class='owl-item item'>
       <div className='item'>
        <div className='swiper-slide swiper-slide--one'>
            <div className='set_slides'>
                <img src={a4} alt='' className='img-fluid'/>
                <div className='ovarlay'><a>Spanish</a></div>
            </div>
        </div>
       </div>
    </div>
    <div class='owl-item item'>
       <div className='item'>
        <div className='swiper-slide swiper-slide--one'>
            <div className='set_slides'>
                <img src={a5} alt='' className='img-fluid'/>
                <div className='ovarlay'><a>Spanish</a></div>
            </div>
        </div>
       </div>
    </div>
      </div>
  </div>
</OwlCarousel>
  </section>
  )
}

export default Slidersection