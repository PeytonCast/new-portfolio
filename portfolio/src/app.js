import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import PortfolioContainer from "./components/Content"
function App() {
    return (
      <section>
      <div>
        <Header />
      </div>
        {/* <div>
            <PortfolioContainer />
        </div> */}
      <div>
        <Footer />
      </div>
      </section>
    );
  }
  
  export default App;