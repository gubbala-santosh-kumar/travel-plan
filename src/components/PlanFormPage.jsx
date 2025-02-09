import React from 'react'
import DashHeader from './DashHeader'
import './PlanFormPage.css'
import Footer from './Footer'

const PlanFormPage = () => {
  return (
    <>
        <DashHeader/>
        <div>
            <div className='PlanFormPageImageDiv'>
              <img className='PlanFormPageImage' src="https://www.shutterstock.com/image-illustration/road-map-city-route-planner-260nw-1756618301.jpg" alt="" />
            </div>
            
            <div className='PlanForm'>
  <form>
    <center><h2>Plan Trip</h2></center>
    <div className="form-group form-group-locations">
      <div>
        <label htmlFor="currentLocation">Current Location:</label>
        <input type="text" placeholder="Enter your current location" required />
      </div>

      <div>
      <label htmlFor="destination">Destination:</label>
      <input type="text" placeholder="Enter your destination" required/>
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="noOfDays">Number of Days to Explore:</label>
      <input
        type="number"
        id="noOfDays"
        name="noOfDays"
        placeholder="Enter number of days"
        min="1"
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="date">Start Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        required
      />
    </div>

    <center>
      <button type="submit" className="submit-button">Plan My Trip</button>
    </center>

  </form>
</div>
        </div>
        <Footer/>
    </>
  )
}

export default PlanFormPage