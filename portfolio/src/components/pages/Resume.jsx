// link to downloadabe resume
import pcresume from "../../assets/pcresume.pdf"
import React from "react";
function Resume () {
    return (
        <div>
            <h3>Resume</h3>
            <p>Link to downloadabe resume.</p>
            <a href={pcresume} download="Peyton_Castillo_Resume">click here to download</a>
        </div>
    )
}
export default Resume;