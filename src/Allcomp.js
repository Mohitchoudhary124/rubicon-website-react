import React from 'react'
import Blogsection from './Components/Blogsection';
import Customerreview from './Components/Customerreview';
import Footersection from './Components/Footersection';
import Howsection from './Components/Howsection';
import Mainbanner from './Components/Mainbanner';
import Newslettersection from './Components/Newslettersection';
import Slidersection from './Components/Slidersection';
import Specialsection from './Components/Specialsection';
import Teacherssection from './Components/Teacherssection';
import Testimonialcontainer from './Components/Testimonialcontainer';
import Upcomingsection from './Components/Upcomingsection';


function Allcomp() {
  return (
    <div>
        <Mainbanner/>     
        <Testimonialcontainer/>       
        <Howsection/>
        <Slidersection/>
        <Teacherssection/>
        <Customerreview/>
        <Upcomingsection/>
        <Specialsection/>
        <Blogsection/>
        <Newslettersection/>
        <Footersection/>
    </div>
  )
}

export default Allcomp