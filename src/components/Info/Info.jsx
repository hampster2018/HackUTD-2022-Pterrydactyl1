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
      <div class="Body">
        <div><Navbar></Navbar></div>,
        <div class="App" className="App">

          <img src={Bonton} alt="Bonton" id="Bonton" />

          <img src={Oasis} alt="Oasis" id="Oasis" />
          <div class="container">
            <img src={BostonFarms} alt="BostonFarms" id="BostonFarms" />
            <div id="BostonFarmsHeader">
              <h1 id="BostonTitle">Invest in Dallas!</h1>
              <p id="BostonText">Bonton Farms is a great example of a local farm and market that was able to impact the neighborhood of Bonton, which was known as a food desert for many years. Health issues were sky high, and there wasn't enough funding for this issue. Bonton Farms would not have been possible without help from a business investor.  </p>
              <button id="BostonButton"> <a href="https://bontonfarms.org/"><u>Learn About Bonton Farms</u></a></button>
            </div>
            <a href="https://www.ers.usda.gov/data-products/food-access-research-atlas/documentation/">
              <img src={FirstSide} alt="FirstSide" id="FirstSide"></img> </a>
          </div>
          <div id="container2">
            <div id="DidYouInner">
              <img src={South} alt="South" id="South" />
              <img src={DidYou} alt="DidYou" id="DidYou" />
              <div id="PartnerCard">
                <h1 id="AgencyHeader" ><u>Partner With the Dallas Economic Development Agency</u></h1>
                <a href="https://www.dallasecodev.org/263/Public-Private-Partnership-Program"><img src={Deda} alt="Deda" id="Deda" /></a>
                <p id="AgencyText">
                  Grocery stores located in or near food deserts are eligible for financial assistance and receive special benefits as part of
                  the Public/Private Partnership Program. Retrieve the PDF application here:
                </p>
                <div id="buuton">
                  <button>
                    <h4>
                      <b>
                        <a href={Short}><u>Application</u></a>
                      </b>
                    </h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Info;