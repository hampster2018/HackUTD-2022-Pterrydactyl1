import React from "react";
import './Info.css'; 
import Bonton from "./assets/Bonton-1.png";
import FirstSide from "./assets/finalfirstg.png";
import Deda from "./assets/deda3.png";
import DidYou from "./assets/didyouo.png";
import South from "./assets/Casuals.png";
import Short from "./assets/dedashort.pdf";
import Oasis from "./assets/oasis.png";



function Info() {
  return (
    <div className="App">
      
      <img src={Bonton} alt="Bonton" id="Bonton"/>
      <img src={Oasis} alt="Oasis" id="Oasis"/>
      <div>
        <h4>
           <a href="https://bontonfarms.org/">Bonton Farms</a> in South Dallas. An excellent example of what private investments can do for food deserts.
        </h4>
      </div>

     <div id="DidYouOuter">
      <div id="DidYouInner">
        <img src={DidYou} alt="DidYou" id="DidYou"/>
        <img src={FirstSide} alt="FirstSide" id="FirstSide"/>

      </div>    
    </div>
      <img src={South} alt="South" id="South"/>
      <h3>
            Partner With the Dallas Economic Development Agency
          </h3>
      <div class="card">
      
        <div className="firstcard">
        <a href="https://www.dallasecodev.org/263/Public-Private-Partnership-Program"><img src={Deda} alt="Deda" id="Deda" /></a>
          <p>
            Grocery stores located in or near food deserts may eligible for financial assistance as part of 
            the Public/Private Partnership Program Download the application here:
          </p>
          <div id="buuton">
          <button>
            <h4>
              <b>
              <a href = {Short} target = "_blank">Application</a>
              </b>
            </h4>
          </button>
          </div>
        </div>
        <div class="container">
        </div>
      </div>
      
    </div> 



  );
}



export default Info;
