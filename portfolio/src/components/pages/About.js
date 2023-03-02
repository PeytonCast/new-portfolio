// I see a recent photo or avatar of the developer and a short bio about them
import React from "react";
import '../../styles/app.css'
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
               When I am not actively engaged in teaching,
               I allocate my time towards executing client or personal projects. 
               My favorite is a long-term project I am presently undertaking, which involves the creation of a Tech Blog scheduled for launch in early 2023. 
               Through this platform, I intend to document my journey through the tech field and address issues such as AI and new languages.
            </p>
            <div className="">
                    {/* need help with this  style={{width: "12rem"}}*/}
                    <ul className="row ml-2 mr-2 mb-5">
                            <li className="col-sm-12 col-md-4 skills text-light mb-2"><h5>Skills</h5></li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="https://th.bing.com/th/id/R.e6d82362f50c26c1b0e6186b99e18e3c?rik=ZkiNhqWudt2EYQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-PTty3CfTGnA%2fTpZOEjTQ_WI%2fAAAAAAAAAeo%2fKeKt_D5X2xo%2fs1600%2fjs.jpg&ehk=uLz7cG48BbXqyb7LS1GN3v3uFyOhkFlskPBBnFx4ryc%3d&risl=&pid=ImgRaw&r=0" alt="JavaScript" /> JavaScript</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "1.7rem"}}src="https://egenteas.sirv.com/exato/project/react_icon.png" alt="React" /> React</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="https://th.bing.com/th/id/OIP.mNLHMt-PM0iPB52LqWOBAgHaHd?pid=ImgDet&rs=1" alt="Bootstrap" /> BootStrap</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2.2rem"}}src="https://logos-world.net/wp-content/uploads/2021/02/Google-Analytics-Emblem.png" alt="GA4" /> Google Analytics </li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2.8rem"}}src="https://th.bing.com/th/id/R.6b47d7fec15d3e1a5de086ac1c808f6d?rik=IIkC39481Md3Bw&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f05%2fMySQL_logo_logotype.png&ehk=aWHquyoObU%2fXSsDiw7VKaqGdBCxP2cRjipdNUO5Q6us%3d&risl=&pid=ImgRaw&r=0" alt="MySql" />MySQL</li>

                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="https://basesdedatosactividad2.files.wordpress.com/2014/08/mongo-db-alternate-logo.png" alt="mongoDB" /> MongoDB</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="https://i.pinimg.com/originals/50/d0/83/50d0834e3e146ad945ee8b4f89b5b309.png" alt="node" /> Node.js</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="https://th.bing.com/th/id/OIP.1fZjQpkRMKTBGN_7H5YnFwHaGL?pid=ImgDet&rs=1" alt="express.js" /> Express.js</li>
                    </ul>

            </div>
        </div>
    )
}
export default About;
