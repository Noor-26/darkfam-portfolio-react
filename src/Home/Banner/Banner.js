import React from 'react'
import './Banner.css'
import Typewriter from 'typewriter-effect';
function Banner() {
    const projectPage = () => window.location.href = "#Project"
    const aboutPage = () => window.location.href = "#About"
    return (
        <div className="main "  id='home'>
            <img src="images/background.png" alt=" background img" className="img-fluid bg-img" />
            <div className=" ms-4 ms-md-5 main d-flex align-items-center " id="main-content">
                <div className="row row-cols-1  row-cols-md-2 w-100 ">
                    <div className="main-txt col" >
                        <h5 className="main-txt-h3 text-start greet ">Hello there!</h5>
                        <h1 className="text-start m-h1 font"><Typewriter  options={{
    autoStart:true,
    loop:true,
    delay:40,
    strings:["I am Mahtab","I am Darkfam"]
}}/></h1>
                        <h2 className="text-start font">I am a frontend web developer</h2>

                    </div>


                    <div className="col" >
                        <div>

                            <button className="button my-3" onClick={projectPage}>Latest Projects</button>
                        </div>
                        <button className="button" onClick={aboutPage}>More about me</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner