import React from 'react'
import './body2.css'

const Body2 = () => {
  return (
    <div className='body2'>
        <div className='inbin'>
            <h5>
                Testimonials
            </h5>
            <h1>
                What our Customers Are saying
            </h1>
        </div>
        <div className='flex'>
            <div>
                <img src='./images/last2.jpeg'/>
            </div>
            <div className='ex'>
                    <p>
                        cm industries
                    </p>
                    <p>
                   <span>
                            When i first heard about Fintrack
                    </span>
                    And how they're going to make their user's financial life easier. I had to sign up. Best decision i ever made.
                    </p>
                    <h5>
                        Big Don
                    </h5>
                    <p>
                        CEO
                        <h5>
                            Don industries
                        </h5>
                    </p>
            </div>

        </div>
      
    </div>
  )
}

export default Body2

