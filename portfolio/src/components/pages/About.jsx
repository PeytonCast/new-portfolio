// I see a recent photo or avatar of the developer and a short bio about them
import React from "react";
import '../../styles/app.css'
function About () {
    return (
        <div>
            <h3 className="m-2">About Me</h3>
            <img id="myself" className="rounded-circle m-2 img1" src="https://media-exp2.licdn.com/dms/image/C5603AQES5lCoiu2i8g/profile-displayphoto-shrink_200_200/0/1654701590408?e=2147483647&amp;v=beta&amp;t=VZTwoeD25yKBsqnaeZEyGuWb2e-ODUv-7LQ9fFQn83k" alt="profile pic"></img>
    
            <p className="m-2 ">
                
               I am a... <br/>
               Full Stack Web Developer certified in Google Analytics 4.
               I enjoy problem-solving, learning new technologies, 
               and developing new technologies and ideas. 
               I'm a fast learner who is 
               competent in good communication, and working in a team environment.
            </p>
            <ul className="ml-2 mr-2 mb-5 col-lg-2 col-md-2 list-group">
                     <li className="list-group-item skills text-light"><h5>Skills</h5></li>
                     <li className="list-group-item font-weight-light">JavaScript</li>
                     <li className="list-group-item font-weight-light">React</li>
                     <li className="list-group-item font-weight-light">Google Analytics</li>
                     <li className="list-group-item font-weight-light">MySQL</li>
                     <li className="list-group-item font-weight-light">MongooseDB</li>
                     <li className="list-group-item font-weight-light">Node.js</li>
                     <li className="list-group-item font-weight-light p-auto">Express.js</li>
            </ul>
        </div>
    )
}
export default About;
