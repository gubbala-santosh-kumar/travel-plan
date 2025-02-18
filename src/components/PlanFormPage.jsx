import React from 'react'
import DashHeader from './DashHeader'
import './PlanFormPage.css'
import Footer from './Footer'
import TravelPlanningForm from './TravelPlanningForm'
const PlanFormPage = () => {
  return (
    <>
        <DashHeader/>
        <div>
            <div className='PlanFormPageImageDiv'>
              <img className='PlanFormPageImage' src="https://www.shutterstock.com/image-illustration/road-map-city-route-planner-260nw-1756618301.jpg" alt="" />
            </div>
            
            <div className='PlanForm'>
              <TravelPlanningForm/>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default PlanFormPage
