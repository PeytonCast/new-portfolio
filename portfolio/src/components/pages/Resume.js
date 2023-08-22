// link to downloadabe resume 
import pcresume from "../../assets/resume/PeytonCastilloResume.pdf"
import React from "react";
import JSicon from "../../assets/img/js-port-icon.jpg";
import ReactIcon from "../../assets/img/react_icon.webp"
import BootStrapIcon from "../../assets/img/bootstrap-icon.png"
import GoogleIcon from "../../assets/img/Google-Analytics-Emblem.png"
import MySQLIcon from "../../assets/img/MySQL-Icon.png"
import MongoIcon from "../../assets/img/mongo-icon.png"
import nodeJS from "../../assets/img/nodejs-icon.png"
import expressIcon from "../../assets/img/expressjs.png"
function Resume () {
    return (
        <div className="card m-4">
            <div className="card-header">
            <h3>Resume</h3>
             </div>
            <div className="card-body">
            <ul className="row ml-2 mr-2 mb-5">
            <li className="col-sm-12 col-md-4 skills text-light mb-2"><h5>Skills</h5></li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}} src={JSicon} alt="JavaScript" /> JavaScript</li>
                            {/* <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="https://th.bing.com/th/id/OIP.HrBOk_qD-pQSmgSI3XzRJAHaHw?w=160&h=180&c=7&r=0&o=5&pid=1.7" alt="Python" /> Python</li> */}
                            {/* <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="https://th.bing.com/th/id/R.91d202ff3335dd331e452965fdb7b966?rik=I0wd%2bnwSC1x5%2fQ&riu=http%3a%2f%2ffresheropenings.com%2fwp-content%2fuploads%2f2020%2f10%2fFree-C-Certification-Course-1-696x696.png&ehk=XBdGIt%2bkX0vtBUWVtNmBOm9JzAvcTopZP7ZUPwYQKmM%3d&risl=&pid=ImgRaw&r=0" alt="C++" /> C++</li> */}
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "1.7rem"}}src={ReactIcon} alt="React" /> React</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}} src={BootStrapIcon} alt="Bootstrap" /> BootStrap</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2.2rem"}}src={GoogleIcon} alt="GA4" /> Google Analytics </li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2.3rem"}} src={MySQLIcon} alt="MySql" />MySQL</li>

                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src={MongoIcon} alt="mongoDB" /> MongoDB</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src={nodeJS} alt="node.js" /> Node.js</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "1.7rem"}}src={expressIcon} alt="express.js" /> Express.js</li>
                   
                    </ul>
             <p className="card-text">Link to downloadabe resume.</p>
             <a href={pcresume} download className="badge badge-success p-2">click here to download</a>
            </div>
        </div>
    )
}
export default Resume;