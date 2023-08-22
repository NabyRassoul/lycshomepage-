import React from "react";
import './footer.css';

function Footer(){
    return(
        <footer>
            <div className="container-fluid card bg-dark rounded-0 ">
                <div className="row">
                    <div class=" col-lg-2  mx-auto card rounded-0 sty bg " >
                        <div class="card-body">
                        </div> 
                    </div>
                    <div className="col-lg-8">
                    <h1 className="text-center text-uppercase text-light mt-4  tilte"> Rejoignez la revolution lycs</h1>
                    </div>
                    <div class=" col-lg-2 mx-auto card  rounded-0 sty bg" >
                        <div class="card-body">
                        </div> 
                    </div>
                    
                </div>
            
               
                <div className="row mt-4 text-center text-uppercase text-light">
                  <div className="col-lg-4 col-md-12 col-ms-12">
                    <h1 className="">Paris</h1>
                    <p className="sp">25 route de ponthieu 75008 Paris</p>

                  </div>
                  <div className="col-lg-4 col-md-12 col-ms-12">
                  <h1 className="">Casablanca</h1>
                  <p className="sp"> 12 boulevard el qods</p>
                  </div>
                  <div className="col-lg-4 col-md-12 col-ms-12">
                  <h1 className="">Dakar</h1>
                  <p className="sp">route de ngor dakar</p>
                  </div>


                </div>

            </div>
        </footer>
    )
}
export default Footer;