import React from 'react';
import './UnderConstruction.css';

const underConstruction = () => {
    return(
        <div class="Body">
            <div className="Offset"></div>
            <div class = "Content">

                <div className= "Text">
                    I will be back ASAP
                </div>

                <div className="Info"></div>

                <div className="Link">
                    <div className="footer-social-icons">
                        <h4 className="_14">Follow me on</h4>
                        <ul className="social-icons">
                            <li><a href="https://www.facebook.com/LuminousBhuwan" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com/LuminousBhuwan" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
                            <li><a href="https://github.com/bhuwanadhikari" className="social-icon"> <i className="fa fa-github"></i></a></li>
                            <li><a href="https://www.instagram.com/luminousbhuwan/?hl=en" className="social-icon"> <i className="fa fa-instagram"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/bhuwan-adhikari-130385121/" className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )
};

export default underConstruction;