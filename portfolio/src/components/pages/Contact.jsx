// add some to type of hover effect that this feild is required

// add is email validation

import React, { useState } from "react";
//function isEmail(){
//     let email = ''
//     email = document.getElementById('email').value()
//     const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

//     // logging the js value of email
//     console.log(email, 'email')
//     // if email matches regex pattern then console.log 'match'
//     if(email.match(pattern)){
//         console.log('match')
//     }
//     // if it doesnt then throw an err
//     else{
//         console.log('err')
//     }
// }
const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

function Contact() {
  // declaring the value as empty
  const [email, setEmail] = useState("");
  const [userName, setName] = useState("");
  const [text, setText] = useState("")
  // declaring the err as false
  const [emailErr, setEmailErr] = useState(false);
  const [userErr, setUserErr] = useState(false);
  const [textErr, setTextErr] = useState(false)
  // if form is correct then send this 
  const [mesSent, isSent] = useState(false);
  // validation function test email && set off err
  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (!userName){
        setUserErr(true)
    }
    if (!text){
        setTextErr(true)
    }
    if(userName && validEmail.test(email)){
        setEmailErr(false);
        setUserErr(false)
        setTextErr(false)
        isSent(true)
    }
  };
  return (
    <section className="p-4">
      <div className="card p-3">
        <h3>Contact Me</h3>
        <p>
          Let's get in touch contact me at{" "}
          <a href="mailto:viol.bailie-0x@icloud.com">
            {" "}
            viol.bailie-0x@icloud.com.{" "}
          </a>
          <br />
          Or fillout this form and I'll get back to you as soon as possible.
        </p>
      </div>
      <div className="card mt-4 p-3 mb-5">
        {/* use boot strap for pop ups */}
        <form action="https://formsubmit.co/viol.bailie-0x@icloud.com" method="POST" className="form-group">
          <label for="name">Name</label> <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            required
            className="form-control"
            onChange={(n) => setName(n.target.value)}
          />
          {userErr && <p className="text-danger">**Please provide your name.**</p>}
          <br />
          <label for="email">Email</label> <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            required
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailErr && <p className="text-danger">**Your email is invalid.**</p>}
          <br />
          <label for="message">Message</label> <br />
          <textarea
            id="message"
            name="message"
            placeholder="Write something.."
            className="form-control"
            required
            onChange={(n) => setText(n.target.value)}
          ></textarea>
          {textErr && <p className="text-danger">**This feild cannot be empty.**</p>}
          
          <br />
          <input type="hidden" name="_next" value="https://peytoncast.github.io/new-portfolio/#contact"></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <button className="btn btn-success" type="submit" onClick={validate}>Send</button>
          {mesSent && <h4 className="text-success">Messsage sent!</h4>}
    
        </form>
      </div>
    </section>
  );
}
export default Contact;
