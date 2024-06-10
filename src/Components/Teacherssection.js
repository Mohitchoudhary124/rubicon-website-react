import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faStar,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import teacher1 from '../Components/images/teacher1.jpg'
import teacher2 from '../Components/images/teacher2.jpg'
import teacher3 from '../Components/images/teacher3.jpg'
import teacher4 from '../Components/images/teacher4.jpg'
import teacher5 from '../Components/images/teacher5.jpg'
import teacher6 from '../Components/images/teacher6.jpg'
import teacher7 from '../Components/images/teacher7.jpg'
import teacher8 from '../Components/images/teacher8.jpg'

function Teacherssection() {
  return (
    <section className='teachers-container'>
        <div className='how-inner'>
            <div className='how-title'>
                <h4>Teachers</h4>
                <h2>Top Rated <span className='underline'>Teachers</span></h2>
            </div>
        </div>
        <div className='teachers-inner container'>
            <div className='teachers-row row'>
                {/* single teachers section started */}
                <div className='item col-lg-3 col-md-3 col-sm-3 col-xs-12'>
                    <img src={teacher1} className='img-fluid' alt=''></img>
                    <div className='heading'>
                        <div className='item-heading'>
                            <h4>Jacklyn Reichel</h4>
                        </div>
                        <div className='item-review'>
                        <span>5.0  <FontAwesomeIcon icon={faStar} />  </span>(2)                            
                        </div>
                    </div>
                    <div className='location'>
                    <FontAwesomeIcon icon={faLocationDot} style={{fontFamily: "FontAwesome",color: "#fd6727", marginRight: "8px",}} />  Guinea-Bissau
                    </div>
                </div>
                {/* single teachers section repeating */}
                <div className='item col-lg-3 col-md-3 col-sm-3 col-xs-12'>
                    <img src={teacher2} className='img-fluid' alt=''></img>
                    <div className='heading'>
                        <div className='item-heading'>
                            <h4>Jacklyn Reichel</h4>
                        </div>
                        <div className='item-review'>
                        <span>5.0  <FontAwesomeIcon icon={faStar} style={{
  fontFamily: "FontAwesome",
  color: "#fd6727",
  marginRight: "8px",
}}/>  </span>(2)                            
                        </div>
                    </div>
                    <div className='location'>
                    <FontAwesomeIcon icon={faLocationDot} style={{
  fontFamily: "FontAwesome",
  color: "#fd6727",
  marginRight: "8px",
}}/>  Guinea-Bissau
                    </div>
                </div>
                {/* single teachers section repeating */}
                <div className='item col-lg-3 col-md-3 col-sm-3 col-xs-12'>
                    <img src={teacher3} className='img-fluid' alt=''></img>
                    <div className='heading'>
                        <div className='item-heading'>
                            <h4>Jacklyn Reichel</h4>
                        </div>
                        <div className='item-review'>
                        <span>5.0  <FontAwesomeIcon icon={faStar} style={{
  fontFamily: "FontAwesome",
  color: "#fd6727",
  marginRight: "8px",
}}/>  </span>(2)                            
                        </div>
                    </div>
                    <div className='location'>
                    <FontAwesomeIcon icon={faLocationDot} style={{
  fontFamily: "FontAwesome",
  color: "#fd6727",
  marginRight: "8px",
}}/>  Guinea-Bissau
                    </div>
                </div>
                {/* single teachers section repeating */}
                <div className='item col-lg-3 col-md-3 col-sm-3 col-xs-12'>
                    <img src={teacher4} className='img-fluid' alt=''></img>
                    <div className='heading'>
                        <div className='item-heading'>
                            <h4>Jacklyn Reichel</h4>
                        </div>
                        <div className='item-review'>
                        <span>5.0  <FontAwesomeIcon icon={faStar} style={{
  fontFamily: "FontAwesome",
  color: "#fd6727",
  marginRight: "8px",
}}/>  </span>(2)                            
                        </div>
                    </div>
                    <div className='location'>
                    <FontAwesomeIcon icon={faLocationDot} style={{
  fontFamily: "FontAwesome",
  color: "#fd6727",
  marginRight: "8px",
}}/>  Guinea-Bissau
                    </div>
                </div>
                {/* single teachers section repeating */}
                <div className='item col-lg-3 col-md-3 col-sm-3 col-xs-12'>
                    <img src={teacher5} className='img-fluid' alt=''></img>
                    <div className='heading'>
                        <div className='item-heading'>
                            <h4>Jacklyn Reichel</h4>
                        </div>
                        <div className='item-review'>
                        <span>5.0  <FontAwesomeIcon icon={faStar} style={{
  fontFamily: "FontAwesome",
  color: "#fd6727",
  marginRight: "8px",
}}/>  </span>(2)                            
                        </div>
                    </div>
                    <div className='location'>
                    <FontAwesomeIcon icon={faLocationDot} style={{
  fontFamily: "FontAwesome",
  color: "#fd6727",
  marginRight: "8px",
}}/>  Guinea-Bissau
                    </div>
                </div>
                {/* single teachers section repeating */}
                <div className='item col-lg-3 col-md-3 col-sm-3 col-xs-12'>
                    <img src={teacher6} className='img-fluid' alt=''></img>
                    <div className='heading'>
                        <div className='item-heading'>
                            <h4>Jacklyn Reichel</h4>
                        </div>
                        <div className='item-review'>
                        <span>5.0  <FontAwesomeIcon icon={faStar} style={{
  fontFamily: "FontAwesome",
  color: "#fd6727",
  marginRight: "8px",
}}/>  </span>(2)                            
                        </div>
                    </div>
                    <div className='location'>
                    <FontAwesomeIcon icon={faLocationDot} style={{
  fontFamily: "FontAwesome",
  color: "#fd6727",
  marginRight: "8px",
}}/>  Guinea-Bissau
                    </div>
                </div>
                {/* single teachers section repeating */}
                <div className='item col-lg-3 col-md-3 col-sm-3 col-xs-12'>
                    <img src={teacher7} className='img-fluid' alt=''></img>
                    <div className='heading'>
                        <div className='item-heading'>
                            <h4>Jacklyn Reichel</h4>
                        </div>
                        <div className='item-review'>
                        <span>5.0  <FontAwesomeIcon icon={faStar} style={{
  fontFamily: "FontAwesome",
  color: "#fd6727",
  marginRight: "8px",
}} />  </span>(2)                            
                        </div>
                    </div>
                    <div className='location'>
                    <FontAwesomeIcon icon={faLocationDot} style={{
  fontFamily: "FontAwesome",
  color: "#fd6727",
  marginRight: "8px",
}}/>  Guinea-Bissau
                    </div>
                </div>
                {/* single teachers section repeating */}
                <div className='item col-lg-3 col-md-3 col-sm-3 col-xs-12'>
                    <img src={teacher8} className='img-fluid' alt=''></img>
                    <div className='heading'>
                        <div className='item-heading'>
                            <h4>Jacklyn Reichel</h4>
                        </div>
                        <div className='item-review'>
                        <span>5.0  <FontAwesomeIcon icon={faStar} style={{
  fontFamily: "FontAwesome",
  color: "#fd6727",
  marginRight: "8px",
}}/>  </span>(2)                            
                        </div>
                    </div>
                    <div className='location'>
                    <FontAwesomeIcon icon={faLocationDot} style={{fontFamily: "FontAwesome",color: "#fd6727", marginRight: "8px",}}/>  Guinea-Bissau
                    </div>
                </div>
                {/* single teachers section repeating */}

            </div>
        </div>
    </section>
  )
}

export default Teacherssection