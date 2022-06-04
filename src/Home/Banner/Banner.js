import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div className="main " >
            <img src="images/background.png" alt=" background img" className="img-fluid bg-img" />
            <div className=" ms-4 ms-md-5 h-100 d-flex align-items-center " id="main-content">
                <div className="row row-cols-1  row-cols-md-2 w-100 ">
                    <div className="main-txt col" >
                        <h5 className="main-txt-h3 text-start greet ">Hello there!</h5>
                        <h1 className="text-start m-h1 font">I am Mahtab</h1>
                        <h2 className="text-start font">I am a frontend web developer</h2>

                    </div>


                    <div className="col" >
                        <div>

                            <button className="button my-3" >Latest Projects</button>
                        </div>
                        <button className="button" >More about me</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner