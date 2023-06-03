import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="container-fluid d-flex flex-row justify-content-around align-item-center bg-dark text-white p-5"
    style={{width:"auto", height:"10vh"}}>
        
        <div>
            <p>&#169; 2022 News Wala</p>
        </div>
        <div >
            <ul className="container-fluid d-flex flex-row " style={{listStyle:"none", gap:"30px"}}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>FAQs</li>

            </ul>
        </div>
        
    </div>
    </>
    
  )
}

export default Footer