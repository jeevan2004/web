import React from 'react'
import Navbar from './Navbar'
const Header = () => {
    return (
        <div className="banner">
            <Navbar />
            <div className="banner_content">
                <div className="container">
                    <div className="banner_text">
                        <h3>Pizza Delivery</h3>
                        <h1>Mastor Pizinni</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum velit iusto. Perferendis aliquam dolor voluptate recusandae.</p>
                        <div className="banner_btn">
                            <a href="" className="btn btn-smart">DELIVERY NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
