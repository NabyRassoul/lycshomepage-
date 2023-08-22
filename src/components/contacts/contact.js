import React from 'react';
import './contact.css';


function Contact(){
    return(
        <section>
            
            <div className="container-fluide greenPage ">
                <div className='row'>
                <h1 className='rj text-uppercase text-start ms-4'>Rejoingez la <br></br> Revolution lycs.</h1>,<br />
                </div>
                <div className="row ">
                    <div className=" col-lg-7 col-md-12 col-sm-12">
                    
                        <h1 className='rj text-uppercase text-start ms-4'>Talent</h1>
                        <p className='text-start ms-4 '> Aidez-nous à <br /> repandre la <br/>philosophie LYCS</p>
                        
                    </div>
                        
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <h1 className='rj text-uppercase text-start ms-4'>Client</h1>
                        <p className='text-start ms-4 '> Vous avez un <br /> challange autour de  <br/>l’éxperience de vos<br/> Clients? Parlons-en !</p>
                        
                    
                    </div>
                    
                </div>
                <div className='row '>
                    <div className='mb-4 col-lg-4 col-md-12 col-sm-12 mx-auto card1 card bg-dark rounded '>
                            <p className='text-light text-uppercase p2'>Consultez nos offres</p>
                    </div>
                    <div className='mb-4 col-lg-4 col-md-12 col-sm-12 card2 mx-auto card bg-dark rounded '>
                        <p className='text-light text-uppercase p2'>Prenons rvd</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
export default Contact;