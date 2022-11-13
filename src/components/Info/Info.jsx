import React from "react";
import './Info.css';
import Bonton from "../../assets/Bonton-1.png";
import FirstSide from "../../assets/finalfirstg.png";
import Deda from "../../assets/deda3.png";
import DidYou from "../../assets/DidYouKnow.png";
import South from "../../assets/south dallas.png";
import Short from "../../assets/dedashort.pdf";
import Oasis from "../../assets/oasis.png";
import Navbar from "../Navbar/Navbar";
import BostonFarms from "../../assets/BostonFarms.png";



function Info() {
  return (
    <>
    <body class="Body">
      <div><Navbar></Navbar></div>,
      <div className="App">

        <img src={Bonton} alt="Bonton" id="Bonton" />

        <img src={Oasis} alt="Oasis" id="Oasis" />
        <div class="container">
          <img src={BostonFarms} alt="BostonFarms" id="BostonFarms" />
          <div class="BostonFarmsHeader">
            <h1 id="BostonTitle">Boston Farms</h1>
            <p id="BostonText">Boston Farms is a great example of an organization working towards providing nutricious meals for people in low-income communities. Boston is located in a food desert but through Boston Farms, the community has access to fresh produce. Filler test. Will change later. towards providing nutricious meals for people in low-income communities. Boston is located in a food desert but through Boston Farms, the community has access to fresh produce.</p>
            <button id="BostonButton">Visit Boston Farms</button>
          </div>
          <img src={FirstSide} alt="FirstSide" id="FirstSide" />
        </div>
        <div class="container2">
          <div id="DidYouInner">
            <img src={South} alt="South" id="South" />
            <img src={DidYou} alt="DidYou" id="DidYou" />
            <div>
              <h1 id="AgencyHeader" >Partner With the Dallas Economic Development Agency</h1>
              <a href="https://www.dallasecodev.org/263/Public-Private-Partnership-Program"><img src={Deda} alt="Deda" id="Deda" /></a>
              <p id="AgencyText">
              Grocery stores located in or near food deserts may eligible for financial assistance as part of
              the Public/Private Partnership Program Download the application here:
            </p>
            <div id="buuton">
              <button>
                <h4>
                  <b>
                    <a href={Short} target="_blank">Application</a>
                  </b>
                </h4>
              </button>
            </div>
            </div>
          </div>
        </div>

      </div>
    </body>

    </>

  );
}

export default Info;