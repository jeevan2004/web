import React from 'react'
import Pizza from "../img/bg-2.jpg"
const Menu = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="about_img">
                            <img src={Pizza} alt="pizza" />
                        </div>
                    </div>
                    <div className="col-6 p-25">
                        <h3>The Pizza Menu</h3>
                        <h1>CHICAGO THIN CRUST</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos sint veritatis facilis reiciendis soluta enim vitae.
                        </p>
                        <div className="about_btn">
                            <a href="" className="btn btn-smart"> VIEW MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
