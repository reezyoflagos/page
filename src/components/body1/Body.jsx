import React from 'react'
import './body.css'

const Body = () => {
  return (
    <div>
    <div className='body1'>
        <div className='line'>
          <h1>
            Simplify    
            
       
            <span>
                  Financial Mamagement With Fintrack
            </span>
         </h1>

        <div className='inline'>
             <p>
                With Fintrack. you can now track your spending easily,make Payments,pay your bills and Simplify your Financial life. Let Fintrack help you become finacially preudent.
            </p>
        </div>
        <div className='din'>
             <button className='btn'>
                
                <div className='imga'>
                    <img src='./images/googleplay.png'/>
                    </div>
                    <p>
                        Get From
                        <h3>
                            Goggle play
                        </h3>
                    </p>
            </button>
            <button className='btn'>
                <div className='imga'>
            <img src='./images/apple2.png'/>
            </div>
                    <p>
                        Get From
                        <h3>
                            App store
                        </h3>
                    </p>
            </button>

          </div>
          </div>
          
    </div>
    <div className='line2'>
                            <div className='ex'>
                                <h2>
                                100% 
                                </h2>
                            <p>
                                Secuirty on all savings and investments
                            </p>
                             </div>
                            <div className='ex'>
                                <h2>
                                    24
                                </h2>
                                <p>
                                    hours customer support
                                </p>
                            </div>
                            <div className='ex'>
                                <h2>
                                     10
                                </h2>
                                <p>
                                    Years banking Experience
                                </p>
                            </div>
    </div>
</div>
  
    

  )
}

export default Body
