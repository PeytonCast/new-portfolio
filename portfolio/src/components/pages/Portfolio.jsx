// I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
// For each project that is featured in your portfolio, include the following:

// * An image of the deployed application (either a short animated GIF or screenshot)

// * The title of the project

// * A link to the deployed application

// * A link to the corresponding GitHub repository
import React from "react";
function Portfolio () {
    return (
        <div className="container">
            <h3>Portfolio</h3>
            <div className="d-flex flex-wrap justify-content-around mb-5">
            {/* <div> */}
                    {/* BLOG SPOT */}
                    <section className="card shadow my-2" style={{width: "12rem"}}>
                    <img src="https://via.placeholder.com/150" alt="Portfolio" />
                    <div className="p-2">
                    <p><a href="https://github.com/PeytonCast/Blog-Spot">Blog-Spot (repository)</a></p>
                    <p><a href="https://blog-spot-3.herokuapp.com/">Blog-Spot(website)</a></p>
                    </div> 
                    </section>

                    {/* THIS APP */}
                    <section className="card shadow my-2" style={{width: "12rem"}}>
                    <img src="https://via.placeholder.com/150" alt="Portfolio" />
                    <div className="p-2">
                    <p><a href="https://github.com/PeytonCast/new-portfolio">This Portfolio's Repository</a></p>
                    </div> 
                    </section>

                    {/* TEXT EDITOR PWA */}
                    <section className="card shadow my-2" style={{width: "12rem"}}>
                    <img src="https://via.placeholder.com/150" alt="Text editor" />
                    <div className="p-2">
                        <p><a href="https://github.com/PeytonCast/PWA-text-editor">Text Editor PWA (repository)</a></p>
                        <p><a href="https://gt12-3.herokuapp.com/">Text Editor PWA (site)</a></p>
                    </div> 
                    </section>
            {/* </div>
            <div> */}
                    {/*  RECIPE FINDER */}
                    <section className="card shadow my-2" style={{width: "12rem"}}>
                    <img src="https://via.placeholder.com/150" alt="Text editor" />
                    <div className="p-2">
                        <p><a href="https://github.com/PeytonCast/Recipe-finder">Recipe Finder (repository)</a></p>
                        <p><a href="https://peytoncast.github.io/Project-1-Recipe-finder/">Recipe Finder (site)</a></p>
                    </div> 
                    </section>
                    
                    {/* PASSWORD GENERATOR */}
                    <section className="card shadow my-2" style={{width: "12rem"}}>
                    <img src="https://via.placeholder.com/150" alt="Text editor" />
                    <div className="p-2">
                        <p><a href="https://github.com/PeytonCast/password_generator">Password Generator (repository)</a></p>
                        <p><a href="https://peytoncast.github.io/password_generator/Develop/">Password Generator (site)</a></p>
                    </div> 
                    </section>

                    {/* A-SCARY-QUIZ */}
                    <section className="card shadow my-2" style={{width: "12rem"}}>
                    <img src="https://via.placeholder.com/150" alt="Text editor" />
                    <div className="p-2">
                        <p><a href="https://github.com/PeytonCast/A-SCARY-QUIZ">A-SCARY-QUIZ (repository)</a></p>
                        <p><a href="https://peytoncast.github.io/A-SCARY-QUIZ/Assets/index1.html">A-SCARY-QUIZ (site)</a></p>
                    </div> 
                    </section>
                </div>
            {/* </div> */}
        </div>
    )
}
export default Portfolio;