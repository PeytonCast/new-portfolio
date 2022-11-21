// add some to type of hover effect that this feild is required

// add is email validation


import React from "react";
function Contact () {
    return (
        <section>
        <div>
            <h3>Contact Me</h3>
            <p>Let's get in touch contact me at <a href="mailto:viol.bailie-0x@icloud.com"> viol.bailie-0x@icloud.com.  </a>
            <br />Or fillout this form and I'll get back to you as soon as possible.</p>
            
        </div>
        <div>
            
        <form action="/action_page.php">
             <label for="name">Name</label> <br />
             <input type="text" id="name" name="name" placeholder="Your name.."/> <br />
             <label for="email">Email</label> <br />
             <input type="email" id="email" name="email" placeholder="email.."/> <br />
             <label for="message">Message</label> <br />
             <textarea id="message" name="message" placeholder="Write something.." ></textarea> <br />
             <input type="submit" value="Submit"/> 
        </form>
        </div>
        </section>
    )
}
export default Contact;
