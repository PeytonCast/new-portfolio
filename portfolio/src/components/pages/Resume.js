// link to downloadabe resume 
import pcresume from "../../assets/resume/pcresume.pdf"
import React from "react";
function Resume () {
    return (
        <div className="card m-4">
            <div className="card-header">
            <h3>Resume</h3>
             </div>
            <div className="card-body">
            <ul className="row ml-2 mr-2 mb-5">
            <li className="col-sm-12 col-md-4 skills text-light mb-2"><h5>Skills</h5></li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="https://th.bing.com/th/id/R.e6d82362f50c26c1b0e6186b99e18e3c?rik=ZkiNhqWudt2EYQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-PTty3CfTGnA%2fTpZOEjTQ_WI%2fAAAAAAAAAeo%2fKeKt_D5X2xo%2fs1600%2fjs.jpg&ehk=uLz7cG48BbXqyb7LS1GN3v3uFyOhkFlskPBBnFx4ryc%3d&risl=&pid=ImgRaw&r=0" alt="JavaScript" /> JavaScript</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="https://th.bing.com/th/id/OIP.HrBOk_qD-pQSmgSI3XzRJAHaHw?w=160&h=180&c=7&r=0&o=5&pid=1.7" alt="Python" /> Python</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="https://th.bing.com/th/id/R.91d202ff3335dd331e452965fdb7b966?rik=I0wd%2bnwSC1x5%2fQ&riu=http%3a%2f%2ffresheropenings.com%2fwp-content%2fuploads%2f2020%2f10%2fFree-C-Certification-Course-1-696x696.png&ehk=XBdGIt%2bkX0vtBUWVtNmBOm9JzAvcTopZP7ZUPwYQKmM%3d&risl=&pid=ImgRaw&r=0" alt="C++" /> C++</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "1.7rem"}}src="https://egenteas.sirv.com/exato/project/react_icon.png" alt="React" /> React</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="https://th.bing.com/th/id/OIP.mNLHMt-PM0iPB52LqWOBAgHaHd?pid=ImgDet&rs=1" alt="Bootstrap" /> BootStrap</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2.2rem"}}src="https://logos-world.net/wp-content/uploads/2021/02/Google-Analytics-Emblem.png" alt="GA4" /> Google Analytics </li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2.8rem"}}src="https://th.bing.com/th/id/R.6b47d7fec15d3e1a5de086ac1c808f6d?rik=IIkC39481Md3Bw&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f05%2fMySQL_logo_logotype.png&ehk=aWHquyoObU%2fXSsDiw7VKaqGdBCxP2cRjipdNUO5Q6us%3d&risl=&pid=ImgRaw&r=0" alt="MySql" />MySQL</li>

                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="https://basesdedatosactividad2.files.wordpress.com/2014/08/mongo-db-alternate-logo.png" alt="mongoDB" /> MongoDB</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="https://i.pinimg.com/originals/50/d0/83/50d0834e3e146ad945ee8b4f89b5b309.png" alt="node" /> Node.js</li>
                            <li className="col-sm-12 col-md-4 font-weight-light mb-2"><img style={{width: "2rem"}}src="https://th.bing.com/th/id/OIP.1fZjQpkRMKTBGN_7H5YnFwHaGL?pid=ImgDet&rs=1" alt="express.js" /> Express.js</li>
                   
                    </ul>
             <p className="card-text">Link to downloadabe resume.</p>
             <a href={pcresume} download className="badge badge-success p-2">click here to download</a>
            </div>
        </div>
    )
}
export default Resume;