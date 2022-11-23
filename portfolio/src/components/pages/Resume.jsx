// link to downloadabe resume
import pcresume from "../../assets/pcresume.pdf"
import React from "react";
function Resume () {
    return (
        <div className="card m-2">
            <div class="card-header">
            <h3>Resume</h3>
             </div>
            <div className="card-body">
             <p className="card-text">Link to downloadabe resume.</p>
             <a href={pcresume} download="Peyton_Castillo_Resume" className="badge badge-success p-2">click here to download</a>
            </div>
        </div>
    )
}
export default Resume;