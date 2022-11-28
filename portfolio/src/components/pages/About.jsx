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
               and developing new technologies. I love taking a good idea ang making it a reality.
               I'm a fast learner, good communicator, and love working in a team environment!
            </p>
            <div className="">
                    {/* need help with this  style={{width: "12rem"}}*/}
                    <ul className="row ml-2 mr-2 mb-5">
                            <li className="col-sm-12 col-md-4 skills text-light mb-2"><h5>Skills</h5></li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="https://th.bing.com/th/id/R.e6d82362f50c26c1b0e6186b99e18e3c?rik=ZkiNhqWudt2EYQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-PTty3CfTGnA%2fTpZOEjTQ_WI%2fAAAAAAAAAeo%2fKeKt_D5X2xo%2fs1600%2fjs.jpg&ehk=uLz7cG48BbXqyb7LS1GN3v3uFyOhkFlskPBBnFx4ryc%3d&risl=&pid=ImgRaw&r=0" alt="JavaScript" /> JavaScript</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "1.7rem"}}src="https://egenteas.sirv.com/exato/project/react_icon.png" alt="React" /> React</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="https://th.bing.com/th/id/OIP.mNLHMt-PM0iPB52LqWOBAgHaHd?pid=ImgDet&rs=1" alt="Bootstrap" /> BootStrap</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2.2rem"}}src="https://logos-world.net/wp-content/uploads/2021/02/Google-Analytics-Emblem.png" alt="GA4" /> Google Analytics </li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2.2rem"}}src="https://f0.pngfuel.com/png/653/226/my-sql-logo-png-clip-art-thumbnail.png" alt="MySql" /> MySQL</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="https://basesdedatosactividad2.files.wordpress.com/2014/08/mongo-db-alternate-logo.png" alt="mongoDB" /> MongoDB</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="https://i.pinimg.com/originals/50/d0/83/50d0834e3e146ad945ee8b4f89b5b309.png" alt="node" /> Node.js</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="https://th.bing.com/th/id/OIP.1fZjQpkRMKTBGN_7H5YnFwHaGL?pid=ImgDet&rs=1" alt="express.js" /> Express.js</li>
                    </ul>

            </div>
        </div>
    )
}
export default About;
