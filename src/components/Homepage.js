import React from 'react'
import './Homepage.css'

export default function Homepage() {
  return (
    <div className="parent-container d-flex flex-column justify-content-center align-items-center">
        <div className="home-container d-flex flex-column flex-md-row justify-content-center align-items-center rounded-3 p-5">
            <div className="findroom-container">
                <p className="title">Need a room/hostel? Tired of searching around the city? Find one near your college now!</p>
                <div className="sub-title"> Find A Room</div>
            </div>
            <div className="vertical-divide rounded-4"></div>
            <div className="findmate-container">
                <p className="title">Already have a room and want to share? Find someone and split the expenses now!</p>
                <div className="sub-title"> Find A Room-Mate</div>      
            </div> 
        </div>
    </div>
  )
}
