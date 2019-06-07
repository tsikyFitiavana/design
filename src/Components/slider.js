import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Slide } from 'react-slideshow-image';
import './slider.css'

const slideImages = [
  '',

];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = () => {
  return (
    <div>
      <div className="container">
       
        <div className="row">
          <div className="col-md-3 div1">
          <img src="images/HI.png" alt="hi" width="50"/>
          <h2 className="firstTitle">find your <br/> people</h2>

          <p className="text">Connect in spaces designed to bring <br/>
          incredible people together. Our <br/> 
          community might just contain your <br/>
          next friend, lover or mentor.
          </p>
          </div>
          <div className="col-md-3 div2">
          <img src="images/yes.png" alt="hi" width="60"/>
          <h2>experience <br/> more</h2>

            <p className="text">
            Learn a new skill, expand your mind <br/>
            and let loose and unwind. Our <br/>
            boundary-pushing cultural events <br/>
            come to you, live from your living <br/>
            room.
            </p>
          </div>
          <div className="col-md-3 div3">
            <img src="images/Oooh.png" alt="hi"/>   
            <h2>stay or <br/>live</h2>

            <p className="text">Discover true flexibility and join us <br/>
            for as long as you want: dip your <br/>
            toes in for a few nights, or go steady <br/>
            for a year. This is home.
            </p>
          </div>
          <div className="col-md-3 div4">
            <img src="images/aahhh.png" alt="hi"/> 
            <h2>stress<br/>less</h2>
            <p className="text">Find game-changing convenience in <br/>
            one all-inclusive bill. We take care <br/>
            of the life admin, so you can focus <br/>
            on what moves you.
            </p>
          </div>
        </div>
      </div>      
      <div>
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 361 329" class="collective-community__shape collective-community__shape--2"><path fill="#C2E1BB" fill-rule="evenodd" d="M327.775 185.887c-100.942 116.027-98.05 152.438-194.445 140.61-96.395-11.828-62.76-60.837-118.302-170.13C-40.514 47.076 76.749-9.384 173.144 2.445 269.54 14.272 428.718 69.86 327.775 185.887z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 32 32" class="collective-community__shape collective-community__shape--3">
            <path d="M23.027 10L30 17.01 23.026 24l-1.789-1.803 5.179-5.191-5.18-5.206 
            1.791-1.8zm-10.632 5.996l4.678-2.268 5.299 2.515-1.082 2.303-4.205-1.995-4.63 
            2.243-5.222-2.256L3.1 18.541 2 16.249l5.172-2.508 5.223 2.255z"></path>
            </svg>
            </div>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
              <img src="images/shape-4.jpg" alt="shi" />
              <img src="images/shape-5.jpg" alt="shap5" />
            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
              <img src="images/shape-6.jpg" alt="shape6" />
              <img src="images/shape-7.jpg" alt="shape7" />
            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
              <img src="images/shape-9.jpg" alt="shape9" />
            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
              <img src="images/shape-10.jpg" alt="shape10" />
              <img src="images/shape-11.jpg" alt="shape11" />
            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
              <div>
                <img src="images/shape-12.jpg" alt="shap12"/>
              </div>
              <div className="slide6_2">
                <img src="images/shape-13.jpg" alt="shap13" width="600" height="500" />
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>

  )
}
export default Slideshow