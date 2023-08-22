// I see a recent photo or avatar of the developer and a short bio about them
import React from "react";
import '../../styles/app.css'
import JSicon from "../../assets/img/js-port-icon.jpg";
import ReactIcon from "../../assets/img/react_icon.webp"
import BootStrapIcon from "../../assets/img/bootstrap-icon.png"
import GoogleIcon from "../../assets/img/Google-Analytics-Emblem.png"
import MySQLIcon from "../../assets/img/MySQL-Icon.png"
import MongoIcon from "../../assets/img/mongo-icon.png"
import nodeJS from "../../assets/img/nodejs-icon.png"
import expressIcon from "../../assets/img/expressjs.png"


function About () {
    return (
        <div>
            <h3 className="m-2">About Me</h3>
            <img id="myself" style={{width: "200px"}} className="rounded-circle m-3 img1" src="https://media.licdn.com/dms/image/D5603AQHya5Omv95cNw/profile-displayphoto-shrink_800_800/0/1677247564965?e=2147483647&v=beta&t=U8pe_UTfVUV2N-T-v5HU7CHxtqt9kyZKl9A608KL6JY" alt="profile pic"/>
            <p  className="p-4 highlight text-light">
               I am a certified Full Stack Web Developer with specialized knowledge in Google Analytics 4. 
               My passion for technology is fueled by the challenges presented by problem-solving and the thrill of mastering new technologies. 
               With a penchant for innovation, I am driven to transform great ideas into fully-realized products.</p>
            <p className="p-3">
               I pride myself on my adaptability and ability to learn quickly,
               which have enabled me to stay current with the ever-evolving tech industry.
               Furthermore, I am an effective communicator and thrive in collaborative team environments where I can contribute my skills and expertise to the collective success of a project.
               <br/>
               I am currently employed as an instructional specialist at 2U educational bootcamps, 
               where I contribute to the education of students enrolled in bootcamps for the esteemed Georgia Institute of Technology. 
               The gratification I derive from sharing knowledge and facilitating the transformation of talented students into seasoned developers is immeasurable.
               <br/>
               
            </p>
            <div className="">
                    {/* need help with this  style={{width: "12rem"}}*/}
                    <ul className="row ml-2 mr-2 mb-5">
                            <li className="col-sm-12 col-md-4 skills text-light mb-2"><h5>Skills</h5></li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src={JSicon} alt="JavaScript" /> JavaScript</li>
                            {/* <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="" alt="Python" /> Python</li> */}
                            {/* <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="" alt="C++" /> C++</li> */}
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "1.7rem"}} src={ReactIcon} alt="React" /> React</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src={BootStrapIcon} alt="Bootstrap" /> BootStrap</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2.2rem"}}src={GoogleIcon} alt="GA4" /> Google Analytics </li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src={MySQLIcon} alt="MySql" />MySQL</li>

                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src={MongoIcon} alt="mongoDB" /> MongoDB</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src={nodeJS} alt="node" /> Node.js</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "1.8rem"}}src={expressIcon} alt="express.js" /> Express.js</li>
                    </ul>

            </div>
        </div>
    )
}
export default About;
