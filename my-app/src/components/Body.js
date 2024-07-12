import React, { useState } from "react";

function Body () {
    

    return(
        <div>
              {/* <div class="slideshow-container">
                <div class="mySlides fade">             
                    <img src="../assets/images/2-1copy.jpeg" alt="front" style="width:100%">            
                </div>           
                <div class="mySlides fade">             
                    <img src="../assets/images/2-2copy.jpeg" alt="middle" style="width:100%">             
                </div>           
                <div class="mySlides fade">
                    <img src="../assets/images/2-5copy.jpeg" alt="rear" style="width:100%">
                </div>
              </div> */}

            <p>Vin: 11637Nxxxxxx <br />
                First Digit: 1 (Code for Model Year) <br />

                Second & Third Digit: 16 Code for Series(Bel Air 8 cyl.) <br />

                Fourth & Fifth Digit: 37 Code for Body Style(2 dr. Sport Coupe) <br />

                N Six Digit: Code for Assembly Plant (Norwood, OH) <br />

                Last Six Digits: Production Numbers <br />

                There were 177,969 1961 2 Door Sport Coupes made. Total production for the Belair Sport Coupes was: <br />

                1537 (6cyl): 8671 <br />

                1637 (V8): 9686 <br />
                This car is 1 of 9686 <br />
            </p>

            
            
            {/* const App = () => {
            const [currentPage, setCurrentPage] = useState(1);

            const nextPage = () => {
                setCurrentPage(currentPage === 1 ? 2 : 1);
            };
        
            return (
                <div>
                    {currentPage === 1 ? <Body /> : <Trim />}
                    <button onClick={nextPage}>Next Page</button>
                </div>
            );
            }; */}

        </div>
    )
}



export default Body;