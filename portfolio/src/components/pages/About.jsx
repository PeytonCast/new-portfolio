// I see a recent photo or avatar of the developer and a short bio about them
import React from "react";
import '../../styles/app.css'
function About () {
    return (
        <div>
            <h3 className="m-2">About Me</h3>
            <img id="myself" className="rounded-circle m-2 img1" src="https://media-exp2.licdn.com/dms/image/C5603AQES5lCoiu2i8g/profile-displayphoto-shrink_200_200/0/1654701590408?e=2147483647&amp;v=beta&amp;t=VZTwoeD25yKBsqnaeZEyGuWb2e-ODUv-7LQ9fFQn83k" alt="profile pic"></img>
    
            <p className="p-3">
                
               I am a... <br/>
               Full Stack Web Developer certified in Google Analytics 4.
               I enjoy problem-solving, learning new technologies, 
               and developing new technologies and ideas. 
               I'm a fast learner who is 
               competent in good communication, and working in a team environment.
            </p>
            <div className="">
                    {/* need help with this  style={{width: "12rem"}}*/}
                    <ul className="row ml-2 mr-2 mb-5">
                            <li className="col-sm-12 col-md-4 skills text-light"><h5>Skills</h5></li>
                            <li className="col-sm-12 col-md-4 font-weight-light">JavaScript <img style={{width: "1rem"}}src="https://th.bing.com/th/id/R.e6d82362f50c26c1b0e6186b99e18e3c?rik=ZkiNhqWudt2EYQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-PTty3CfTGnA%2fTpZOEjTQ_WI%2fAAAAAAAAAeo%2fKeKt_D5X2xo%2fs1600%2fjs.jpg&ehk=uLz7cG48BbXqyb7LS1GN3v3uFyOhkFlskPBBnFx4ryc%3d&risl=&pid=ImgRaw&r=0" alt="JavaScript" /></li>
                            <li className="col-sm-12 col-md-4 font-weight-light">React</li>
                            <li className="col-sm-12 col-md-4 font-weight-light">BootStrap</li>
                            <li className="col-sm-12 col-md-4 font-weight-light">Google Analytics</li>
                            <li className="col-sm-12 col-md-4 font-weight-light">MySQL</li>
                            <li className="col-sm-12 col-md-4 font-weight-light">MongooseDB</li>
                            <li className="col-sm-12 col-md-4 font-weight-light">Node.js</li>
                            <li className="col-sm-12 col-md-4 font-weight-light">Express.js</li>
                    </ul>

                    <section className="card shadow my-2" style={{width: "12rem"}}>
                    <div className="p-2">
                    <p><a href="https://github.com/PeytonCast/new-portfolio">This Portfolio's Repository</a></p>
                    </div> 
                    </section>
            </div>
        </div>
    )
}
export default About;
