import React from 'react';
import './DashBody.css';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Footer from './Footer';
import DashBodyMainImage from './DashBodyMainImage.jpg'

function DashBody() {

  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="dashBodyMainImage">
          <div className="overlay">
            <div>
              <h1 className="typewriter">Plan our Tourism Spot Here</h1>
              <center><button className="dashBodyImageButton" >Plan Now</button></center>
            </div>
          </div>
          <img className="dashBodyMainImageTag" src={DashBodyMainImage} alt="Tour Places Image"/>
        </div>
        <div className="dashBodyCards">
          <div className="card flip-scale-up-hor">
            <div className="card-inner">
              <div className="card-front">
                <img
                  src="https://img.freepik.com/premium-photo/plan-word-business-planning-concept_361816-7824.jpg"
                  alt="Plan"
                />
              </div>
              <div className="card-back">
                <h2>Plan</h2>
                <p>
                  This is the plan about.. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Repellat placeat, soluta dolorum reprehenderit
                  nesciunt tempore voluptates asperiores.
                </p>
              </div>
            </div>
          </div>

          <div className="card flip-scale-up-hor">
            <div className="card-inner">
              <div className="card-front">
                <img
                  src="https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/map-route-image-6807-68565d04f06014aba2f90b32d2c61f45@1x.jpg"
                  alt="Route"
                />
              </div>
              <div className="card-back">
                <h2>Route</h2>
                <p>
                  Details about the route.. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Minima voluptas culpa obcaecati placeat eum
                  magnam, distinctio aperiam deleniti.
                </p>
              </div>
            </div>
          </div>
          

          <div className="card flip-scale-up-hor">
            <div className="card-inner">
              <div className="card-front">
                <img
                  src="https://m.economictimes.com/thumb/msid-112714907,width-1200,height-900,resizemode-4,imgsize-47754/rupees-record-lows-mask-currencys-trade-weighted-overvaluation.jpg"
                  alt="Budget"
                />
              </div>
              <div className="card-back">
                <h3>Budget</h3>
                <p>
                  Information about the budget.. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Molestiae sed, ipsa optio odit
                  dolorum, voluptate ab rem dolores voluptatem.
                </p>
              </div>
            </div>
          </div>

          <div className="card flip-scale-up-hor">
            <div className="card-inner">
              <div className="card-front">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-I8uVLzNt0BL5ZarkUfCpfAyJscMF5dBlQ&s"
                  alt="Route"
                />
              </div>
              <div className="card-back">
                <h2>Explore</h2>
                <p>
                  Details about the route.. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Minima voluptas culpa obcaecati placeat eum
                  magnam, distinctio aperiam deleniti.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="dashboard-places">
          <center><h1>Most Popular Places to Visit</h1></center>
          <div className='PlaceCardWrapper'>
            <div className="PlaceCard">
              <img src="https://150429065.v2.pressablecdn.com/wp-content/uploads/2011/01/Taj-Mahal.jpg" alt="" />
              <button className="hover-button" onClick={() => navigate("/places", { state: { someValue: "https://www.tajmahal.gov.in/" } })}>View Details</button>
            </div>
            <div className="PlaceCard">
              <img src="https://images.unsplash.com/photo-1551161242-b5af797b7233?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcm1pbmFyfGVufDB8fDB8fHww" alt="" />
              <button className="hover-button" onClick={()=>{navigate("/places", {state :{someValue : "https://en.wikipedia.org/wiki/Charminar"}})}}>View Details</button>
            </div>
            <div className="PlaceCard">
              <img src="https://plus.unsplash.com/premium_photo-1697730324062-c012bc98eb13?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29sZGVuJTIwdGVtcGxlfGVufDB8fDB8fHww" alt="" />
              <button className="hover-button" onClick={()=>{navigate("/places",{state:{someValue: "https://en.wikipedia.org/wiki/Golden_Temple"}})}}>View Details</button>
            </div>
            <div className="PlaceCard">
              <img src="https://media.istockphoto.com/id/1025312988/photo/lotus-temple.jpg?s=612x612&w=0&k=20&c=YMWRgFFdjp75c7iHNRWKdcHBQjTvTJb-X4ji80nUVy0=" alt="" />
              <button className="hover-button" onClick={()=>{navigate("/places",{state:{someValue:"https://bahaihouseofworship.in/"}})}}>View Details</button>
            </div>
            <div className="PlaceCard">
              <img src="https://ichef.bbci.co.uk/news/480/cpsprodpb/143BF/production/_124897828_gettyimages-541363304-170667a.jpg.webp" alt="" />
              <button className="hover-button" onClick={()=>{navigate("/places",{state:{someValue:"https://en.wikipedia.org/wiki/Qutb_Minar"}})}}>View Details</button>
            </div>
          </div>
        </div>

        <div className='top-Searchs'>
          <center><h1>Top Searches Tourism places</h1></center>
            <div className="searches">
              <ul className='top-Searchs-ul'>
                <li className='top-Search-li'>
                  <h3>Agra</h3>
                  <p>Home to the iconic Taj Mahal, Agra is a must-visit for its rich Mughal heritage.</p>
                  <button className='' onClick={()=>navigate("/places", {state:{someValue:"https://www.tajmahal.gov.in/"}} )} ><SearchIcon /></button>
                </li>
                <li className='top-Search-li'>
                  <h3>Jaipur</h3>
                  <p>Known as the 'Pink City', Jaipur offers architectural marvels like the Amber Fort, City Palace, and Hawa Mahal.</p>
                  <button className='' onClick={()=>navigate("/places", {state:{someValue:"https://www.tourism.rajasthan.gov.in/jaipur.html"}} )} ><SearchIcon /></button>
                </li>
                <li className='top-Search-li'>
                  <h3>Varanasi</h3>
                  <p>One of the world's oldest cities, Varanasi is the spiritual heart of India.</p>
                  <button className='' onClick={()=>navigate("/places", {state:{someValue:"https://www.lonelyplanet.com/india/uttar-pradesh/varanasi"}} )} ><SearchIcon /></button>
                </li>
                <li className='top-Search-li'>
                  <h3>Kerala</h3>
                  <p>Often referred to as 'God's Own Country', Kerala is renowned for its serene backwaters, lush tea gardens, and pristine beaches.</p>
                  <button className='' onClick={()=>navigate("/places", {state:{someValue:"https://www.keralatourism.org/"}} )} ><SearchIcon /></button>
                </li>
                <li className='top-Search-li'>
                  <h3>Goa</h3>
                  <p>Famous for its golden-sand beaches, vibrant nightlife, and Portuguese heritage</p>
                  <button className='' onClick={()=>navigate("/places", {state:{someValue:"https://en.wikipedia.org/wiki/Goa"}} )} ><SearchIcon /></button>
                </li>
              </ul>
            </div>
        </div>

        <div className="about">
          <section id="about">
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus pariatur quos aliquam ad
              dicta quo recusandae veritatis consequuntur accusantium animi? Illo, magni! Porro aperiam velit,
              consequuntur quas et tempore saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae aut magnam ad voluptate debitis, fugit id molestias suscipit numquam et, repudiandae
              delectus ab cum repellendus amet voluptatum vero inventore incidunt.
            </p>
          </section>
        </div>

      </div>

      <Footer/>
    </>
  );
}

export default DashBody;
